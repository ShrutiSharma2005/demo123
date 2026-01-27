// Mock data for Venus Fabcare website

export const services = [
  {
    id: 1,
    title: "Residential School Laundry Services",
    slug: "residential-school",
    description:
      "Fresh uniforms support happy school days! A trustable laundry service created for schools to maintain cleanliness, comfort, and discipline.",
    icon: "school",
    image:
      /*"https://i.ibb.co/gZkpRPMX/7819534-3711661.jpg",*/
      "https://i.ibb.co/B2gNhpXS/137676600-10356258-1.jpg",
    features: [
      "Designed keeping children's comfort in mind",
      "Consistent service throughout the academic year",
      "Reduces laundry-related parent concerns",
      "Supports cleaner hostel environments",
    ],
  },

  {
    id: 2,
    title: "College Laundry Service",
    slug: "college-laundry",
    description:
      "Fresh clothes for a confident campus life! We handle laundry for college students and hostellers, so they focus more on learning and less on washing.",
    icon: "graduationCap",
    image:
      /*"https://i.ibb.co/gMC9bwhq/1.jpg"*/
      "https://i.ibb.co/zTW5Ytm3/5.jpg",
    features: [
      "More time for studies and campus life",
      "Clean clothes without the hassle",
      "Easy-to-follow collection routines",
      "Professional Hygiene Standards",
      "Doorstep Pick-up & Delivery",
    ],
  },

  {
    id: 3,
    title: "Industrial Laundry Service",
    slug: "industrial-laundry",
    description:
      "Clean workwear every day! We handle large-scale laundry for industries, keeping uniforms, linens, and workwear clean and ready.",
    icon: "factory",
    image:
      /*"https://i.ibb.co/B2gNhpXS/137676600-10356258-1.jpg"*/
      "https://i.ibb.co/gMC9bwhq/1.jpg",
    features: [
      "Handles large laundry volumes",
      "Saves staff time and effort",
      "Keeps uniforms clean and hygienic",
      "Eco-friendly and heavy-duty cleaning",
      "Quality checks and fabric longevity",
      "Customized scheduling and fast turnaround",
    ],
  },
];

export const processSteps = [
  {
    id: 1,
    title: "Pre Wash Care",
    description: "Spot and stain removal. Special care for cuffs and collars.",
    icon: "search",
  },
  {
    id: 2,
    title: "Wash",
    description: "State-of-the-art commercial machines with global standard detergents.",
    icon: "waves",
  },
  {
    id: 3,
    title: "Drying",
    description: "Advanced dryers with moisture sensing and axial airflow.",
    icon: "wind",
  },
  {
    id: 4,
    title: "Steam Iron",
    description: "Professional vacuum steam ironing for crisp finish.",
    icon: "iron",
  },
  {
    id: 5,
    title: "Quality Check",
    description: "Final manual inspection by trained experts.",
    icon: "checkCircle",
  },
  {
    id: 6,
    title: "Packaging",
    description: "Individual, combined, or hanger packaging as required.",
    icon: "package",
  },
];

export const whyChooseUs = [
  {
    icon: "calendar",
    title: "Planned Pickup",
    description: "Pick-up land and safe delivery"
  },
  {
    icon: "gitBranch",
    title: "Process Oriented",
    description: "Workflow at every stage"
  },
  {
    icon: "leaf",
    title: "Eco-Friendly",
    description: "Fabric-safe cleaning products"
  },
  {
    icon: "cpu",
    title: "Modern Machinery",
    description: "Advanced washing and drying equipment"
  },
  {
    icon: "users",
    title: "Skilled Handling",
    description: "Of uniforms, linens, and daily wear"
  },
  {
    icon: "tag",
    title: "Cloth Coding",
    description: "To prevent loss or mixing"
  },
  {
    icon: "eye",
    title: "Manual Checks",
    description: "Before and after washing"
  },
  {
    icon: "package",
    title: "Neat Packing",
    description: "With proper labeling"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Management",
    organization: "Residential School, Bangalore",
    text: "Venus Fabcare has streamlined our residential school laundry with hygienic processes and consistent fabric care. Their structured approach and timely delivery make them a dependable partner."
  },
  {
    id: 2,
    name: "Administration",
    organization: "Engineering Institution, Bangalore",
    text: "Handling hostel laundry at scale is smooth with Venus Fabcare. Their trained team, modern machinery, and clear processes ensure clean, well-maintained garments every time."
  },
  {
    id: 3,
    name: "Operations Head",
    organization: "Institutional Facility",
    text: "Their industrial laundry process meets our hygiene and quality standards with ease. Reliable service, fabric safety, and operational consistency stand out."
  }
];

export const solutions = [
  { icon: "truck", title: "Campus Pickup", description: "Reusable bags for easy collection" },
  { icon: "tag", title: "Cloth Coding", description: "Track every garment accurately" },
  { icon: "cpu", title: "Modern Machinery", description: "High-capacity industrial equipment" },
  { icon: "shield", title: "Fabric Care Focus", description: "Gentle on all fabric types" },
  { icon: "leaf", title: "Eco-Friendly Chemicals", description: "Safe for fabrics and environment" },
  { icon: "search", title: "Stain Inspection", description: "Pre-treatment for tough stains" },
  { icon: "dollarSign", title: "Affordable Pricing", description: "Bulk rates for institutions" },
  { icon: "clock", title: "On-Time Delivery", description: "Consistent, scheduled returns" }
];

export const institutesServed = [
  "Residential & Boarding Schools",
  "International & CBSE Schools",
  "PU Colleges with NEET/JEE Coaching",
  "Engineering & Medical Colleges",
  "Universities & Institutional Hostels",
  "Medical Colleges & Multi-Specialty Hospitals",
  "Hotels & Hospitality Facilities",
  "Industrial Units & Large Institutions"
];

export const contactFormSubmit = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted:", formData);
      resolve({ success: true, message: "Thank you! We'll contact you soon." });
    }, 1000);
  });
};
