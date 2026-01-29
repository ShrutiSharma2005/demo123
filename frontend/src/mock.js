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

      "/college.png",
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

      "/industry.png",
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

export const whyChooseUs = [
  {
    icon: "truck",
    title: "Scheduled Pickup & Safe Delivery",
    description: "Timely collection and secure delivery right to your doorstep."
  },
  {
    icon: "settings",
    title: "Process-Driven Excellence",
    description: "A meticulous, step-by-step workflow for consistent quality."
  },
  {
    icon: "leaf",
    title: "Eco-Conscious Cleaning",
    description: "Sustainable practices using gentle, fabric-safe detergents."
  },
  {
    icon: "cpu",
    title: "State-of-the-Art Technology",
    description: "Utilizing high-end machinery for superior washing and drying."
  },
  {
    icon: "users",
    title: "Expert Textile Handling",
    description: "Specialized care for everything from uniforms to delicate linens."
  },
  {
    icon: "tag",
    title: "Precision Tagging & Coding",
    description: "Advanced tracking systems to ensure your items are never misplaced."
  },
  {
    icon: "eye",
    title: "Rigorous Quality Inspections",
    description: "Detailed manual checks performed before and after every wash."
  },
  {
    icon: "package",
    title: "Pristine Packaging",
    description: "Crisply folded and clearly labeled for a boutique finish."
  }
];


export const testimonials = [
  {
    id: 1,
    name: "Management",
    organization: "Residential School, Bangalore",
    text: "“Venus Fabcare has streamlined our residential school laundry operations through hygienic processes and consistent fabric care. Their structured workflow and timely delivery make them a reliable partner."
  },
  {
    id: 2,
    name: "Administration",
    organization: "Engineering Institution, Bangalore",
    text: "Venus Fabcare simplifies large-scale hostel laundry with trained staff, modern machinery, and clear operational processes. Every delivery meets cleanliness, fabric care, and service reliability standards."
  },
  {
    id: 3,
    name: "Operations Head",
    organization: "Institutional Facility",
    text: "Venus Fabcare delivers industrial laundry services that consistently meet strict hygiene and quality standards. Their strong focus on fabric safety, dependable operations,disciplined service processes ensures reliable outcomes at scale"
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
