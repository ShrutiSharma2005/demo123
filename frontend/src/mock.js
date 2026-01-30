// Mock data for Venus Fabcare website

export const services = [
  {
    id: 1,
    title: " Residential School Laundry Service",
    slug: "residential-school",
    description:
      "Fresh, clean uniforms for happy school days. Our school laundry service supports hygiene, comfort, and discipline by ensuring uniforms and bedding are washed with care and delivered on time.",
    icon: "school",
    image: "/Residential school laundry service-01.png",
    features: [
      "Designed with children’s comfort and safety in mind",
      "Consistent service throughout the academic year",
      "Maintains high hygiene and appearance standards",
      "Reduces workload for school staff and caretakers",
    ],
  },

  {
    id: 2,
    title: "College Laundry Service",
    slug: "college-laundry",
    description:
      "Clean, hygienic laundry made easy for students. We manage hostel and college laundry efficiently, so students focus on academics while we handle washing, care, and timely delivery.",
    icon: "graduationCap",
    image: "/college.png",
    features: [
      "More time for studies and campus life",
      "Hassle-free laundry with scheduled routines",
      "Professional hygiene and fabric care standards",
      "Doorstep pickup and delivery within campus",
    ],
  },

  {
    id: 3,
    title: "Industrial Laundry Services",
    slug: "industrial-laundry",
    description:
      "Our industrial laundry services are designed for efficiency, hygiene, and scale. From workwear and uniforms to linens and protective clothing, we clean, sanitize, and deliver reliably—every time.",
    icon: "factory",
    image: "/industry.png",
    features: [
      "High-capacity handling for large laundry volumes",
      "Consistent hygiene and fabric longevity",
      "Eco-friendly, heavy-duty cleaning processes",
      "Quality checks at every stage",
      "Customized pickup schedules and fast turnaround",
    ],
  },
];

export const whyChooseUs = [
  {
    icon: "truck",
    title: "Scheduled Pickup & Safe Delivery",
    description: "Timely collection and secure delivery tailored to your schedule.",
  },
  {
    icon: "settings",
    title: "Process-Driven Excellence",
    description: "A structured, step-by-step workflow ensuring consistent quality.",
  },
  {
    icon: "leaf",
    title: "Eco-Conscious Cleaning",
    description: "Fabric-safe, sustainable detergents for responsible laundering.",
  },
  {
    icon: "cpu",
    title: "Advanced Laundry Technology",
    description: "Modern industrial machines for superior washing and drying.",
  },
  {
    icon: "users",
    title: "Expert Textile Handling",
    description: "Trained professionals managing uniforms, linens, and workwear.",
  },
  {
    icon: "tag",
    title: "Precision Tagging & Tracking",
    description: "Accurate garment identification to prevent loss or mix-ups.",
  },
  {
    icon: "eye",
    title: "Strict Quality Inspections",
    description: "Manual checks before and after every wash cycle.",
  },
  {
    icon: "package",
    title: "Neat & Organized Packaging",
    description: "Cleanly folded, labeled, and ready-to-use delivery.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Management Team",
    organization: "Residential School, Bangalore",
    text:
      "Venus Fabcare has streamlined our school laundry operations with hygienic processes and dependable delivery. Their structured workflow makes them a trusted partner.",
  },
  {
    id: 2,
    name: "Administration",
    organization: "Engineering Institution, Bangalore",
    text:
      "Managing hostel laundry is effortless with Venus Fabcare. Their trained staff, modern machinery, and consistent service quality stand out.",
  },
  {
    id: 3,
    name: "Operations Head",
    organization: "Institutional Facility",
    text:
      "Venus Fabcare delivers industrial laundry services that meet strict hygiene and quality standards. Their disciplined processes ensure reliable outcomes at scale.",
  },
];

export const solutions = [
  { icon: "truck", title: "Campus Pickup", description: "Scheduled collection using reusable laundry bags" },
  { icon: "tag", title: "Cloth Coding", description: "Accurate tracking for every garment" },
  { icon: "cpu", title: "Modern Machinery", description: "High-capacity industrial equipment" },
  { icon: "shield", title: "Fabric Care Focus", description: "Safe for all fabric types" },
  { icon: "leaf", title: "Eco-Friendly Chemicals", description: "Safe for people and the environment" },
  { icon: "search", title: "Stain Inspection", description: "Pre-treatment for tough stains" },
  { icon: "dollarSign", title: "Affordable Pricing", description: "Institution-friendly bulk pricing" },
  { icon: "clock", title: "On-Time Delivery", description: "Reliable, scheduled returns" },
];

export const institutesServed = [
  "Residential & Boarding Schools",
  "International, CBSE & ICSE Schools",
  "PU Colleges with NEET/JEE Coaching",
  "Engineering & Medical Colleges",
  "Universities & Institutional Hostels",
  "Hospitals & Medical Institutions",
  "Hotels & Hospitality Facilities",
  "Industrial Units & Large Organizations",
];

export const contactFormSubmit = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted:", formData);
      resolve({ success: true, message: "Thank you! We’ll get in touch shortly." });
    }, 1000);
  });
};
