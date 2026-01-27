from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Models
class ContactInquiryCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=10, max_length=20)
    institution: str = Field(..., min_length=2, max_length=200)
    serviceType: str = Field(..., min_length=1, alias="serviceType")
    message: str = Field(..., min_length=10, max_length=2000)

class ContactInquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    institution: str
    serviceType: str
    message: str
    status: str = Field(default="new")
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactInquiryResponse(BaseModel):
    success: bool
    message: str
    inquiry_id: Optional[str] = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Contact Form Routes
@api_router.post("/contact", response_model=ContactInquiryResponse)
async def submit_contact_form(inquiry: ContactInquiryCreate):
    """
    Submit a contact inquiry form
    """
    try:
        # Create inquiry object with generated ID and timestamps
        inquiry_dict = inquiry.model_dump(by_alias=True)
        inquiry_obj = ContactInquiry(**inquiry_dict)
        
        # Convert to dict and serialize datetime to ISO string for MongoDB
        doc = inquiry_obj.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        doc['updated_at'] = doc['updated_at'].isoformat()
        
        # Insert into MongoDB
        result = await db.contact_inquiries.insert_one(doc)
        
        if result.inserted_id:
            logger.info(f"Contact inquiry created: {inquiry_obj.id} from {inquiry_obj.email}")
            return ContactInquiryResponse(
                success=True,
                message="Thank you for contacting us! We'll get back to you within 24 hours.",
                inquiry_id=inquiry_obj.id
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to create inquiry")
            
    except Exception as e:
        logger.error(f"Error creating contact inquiry: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to submit inquiry: {str(e)}")

@api_router.get("/contact/inquiries")
async def get_contact_inquiries(status: str = None, limit: int = 50):
    """
    Get contact inquiries (for admin use)
    """
    try:
        query = {}
        if status:
            query["status"] = status
            
        inquiries = await db.contact_inquiries.find(query, {"_id": 0}).sort("created_at", -1).limit(limit).to_list(limit)
        
        # Convert ISO string timestamps back to datetime objects
        for inquiry in inquiries:
            if isinstance(inquiry.get('created_at'), str):
                inquiry['created_at'] = datetime.fromisoformat(inquiry['created_at'])
            if isinstance(inquiry.get('updated_at'), str):
                inquiry['updated_at'] = datetime.fromisoformat(inquiry['updated_at'])
        
        return {"success": True, "data": inquiries, "count": len(inquiries)}
    except Exception as e:
        logger.error(f"Error fetching inquiries: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch inquiries")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()