from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
import uuid

class ContactInquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=10, max_length=20)
    institution: str = Field(..., min_length=2, max_length=200)
    service_type: str = Field(..., min_length=1)
    message: str = Field(..., min_length=10, max_length=2000)
    status: str = Field(default="new")  # new, contacted, quoted, closed
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ContactInquiryCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=10, max_length=20)
    institution: str = Field(..., min_length=2, max_length=200)
    service_type: str = Field(..., min_length=1)
    message: str = Field(..., min_length=10, max_length=2000)

class ContactInquiryResponse(BaseModel):
    success: bool
    message: str
    inquiry_id: Optional[str] = None
