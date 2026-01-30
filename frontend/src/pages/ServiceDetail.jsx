import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../mock';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

// Service-specific content
const serviceContent = {
  'residential-school': {
    subtitle: (
      <>
        <b>Fresh, Clean Uniforms for Happy School Days.</b>
        <br />
        <br />
        We offer a reliable school laundry service designed to support cleanliness, comfort, and discipline. From student uniforms to school bedding, we ensure every item is washed hygienically and handled with care so students look neat and feel confident every day
      </>
    ),
    processTitle: 'How We Handle School Laundry',
    processDescription:
      'Our school laundry service is built around hygiene, discipline, and consistency. We handle uniforms, bedding, and school textiles with care, ensuring professional washing, drying, and finishing. This reduces hostel staff workload and ensures students always have clean, ready-to-use clothes.',
    whoFor: [
      'Residential & Boarding Schools',
      'International & CBSE Schools',
      'Schools with Hostel Facilities'
    ],
    challenges: [
      { problem: 'Students depend fully on staff', solution: 'Laundry managed externally' },
      { problem: 'Parents worry about cleanliness', solution: 'Hygiene-focused washing methods' },
      { problem: 'Uniforms wear out quickly', solution: 'Gentle, fabric-safe care' },
      { problem: 'Laundry schedules get missed', solution: 'Fixed service routines' },
      { problem: 'Mixing of student clothes', solution: 'Clear tagging & identification' },
      { problem: 'High staff workload', solution: 'Reduced internal handling' }
    ],
    benefits: [
      'Designed with children’s comfort in mind',
      'Suitable for daily uniform use',
      'Consistent service throughout the year',
      'Reduces laundry-related parent concerns',
      'Cleaner hostel environments',
      'Easy coordination with school authorities',
      'Reliable during peak school schedules',
      'Maintains discipline through routine'
    ]
  },

  'college-laundry': {
    subtitle: (
      <>
        <b>Clean, Hygienic Laundry — Made Easy for Students.</b>
        <br />
        <br />
        We provide reliable college laundry services designed for student life. From daily wear to hostel essentials, we ensure clothes are washed hygienically, handled with care, and delivered on time so students can focus on studies, not laundry.
      </>
    ),
    processTitle: 'How We Handle College Laundry',
    processDescription:
      'Our college laundry service includes scheduled pickup and delivery within campus. With proper tagging, tracking, and professional care, students receive clean clothes on time while focusing on academics and campus life.',
    whoFor: ['Colleges', 'Universities', 'Hostels', 'PGs'],
    challenges: [
      { problem: 'No time for laundry', solution: 'Fully managed service' },
      { problem: 'Lack of washing space', solution: 'Professional infrastructure' },
      { problem: 'Clothes get mixed', solution: 'Proper tagging & tracking' },
      { problem: 'Laundry stress', solution: 'Regular pickup schedules' },
      { problem: 'Hygiene concerns', solution: 'Sanitized wash process' },
      { problem: 'Staff burden', solution: 'End-to-end management' }
    ],
    benefits: [
      'More time for studies and campus life',
      'Hassle-free laundry routines',
      'Organized hostel living',
      'Affordable institutional pricing',
      'Reliable weekly schedules',
      'Improved hygiene standards',
      'Reduced stress for students',
      'Peace of mind for parents'
    ]
  },

  'industrial-laundry': {
    subtitle: (
      <>
        <b>Clean, Fresh Workwear — Every Single Day.</b>
        <br />
        <br />
        We provide reliable industrial laundry services for businesses of all sizes. From uniforms and workwear to linens and protective clothing, we clean, sanitize, and deliver everything on time so your team is always ready to work.
      </>
    ),
    processTitle: 'How We Handle Industrial Laundry',
    processDescription:
      'Our industrial laundry services are designed for high-volume operations. From uniforms and workwear to linens and protective clothing, we ensure hygienic cleaning, fabric safety, and timely delivery—helping businesses operate smoothly.',
    whoFor: [
      'Factories & Manufacturing Units',
      'Hotels & Hospitality',
      'Hospitals & Medical Centers',
      'Uniform-Based Organizations',
      'Large Industrial Facilities'
    ],
    challenges: [
      { problem: 'Large laundry volumes', solution: 'High-capacity processing' },
      { problem: 'Heavy stains', solution: 'Pre-treatment & inspection' },
      { problem: 'Fabric damage', solution: 'Fabric-specific wash cycles' },
      { problem: 'Operational delays', solution: 'Scheduled pickup & delivery' },
      { problem: 'Strict hygiene rules', solution: 'Eco-friendly sanitization' },
      { problem: 'Tracking issues', solution: 'Cloth coding & batch tracking' },
      { problem: 'Extra manpower required', solution: 'Fully outsourced service' }
    ],
    benefits: [
      'Handles bulk laundry efficiently',
      'Saves staff time and effort',
      'Maintains hygiene compliance',
      'Careful with tough & delicate fabrics',
      'Eco-conscious cleaning methods',
      'Accurate tracking system',
      'On-time delivery assurance',
      'Reduced operational stress'
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  const content = serviceContent[slug];

  if (!service || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/">
            <Button className="bg-sky-600 hover:bg-sky-700">Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const {
    subtitle,
    processTitle,
    processDescription,
    whoFor = [],
    challenges = [],
    benefits = []
  } = content;

  const whoWeServeLayout =
    whoFor.length >= 5
      ? 'flex flex-wrap justify-center max-w-6xl'
      : whoFor.length === 4
        ? 'grid sm:grid-cols-2 lg:grid-cols-4 max-w-7xl'
        : 'grid sm:grid-cols-2 lg:grid-cols-3 max-w-4xl';

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-sky-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Link to="/" className="inline-flex items-center mb-6 text-sky-100 hover:text-white">
              <ArrowLeft className="mr-2" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl mb-8 text-sky-100">{subtitle}</p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50">
                Get a Quote Today <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>

          <img src={service.image} alt={service.title} className="rounded-2xl" />
        </div>
      </section>

      {/* Process */}
      <section className="py-10 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">{processTitle}</h2>
        <p className="max-w-4xl mx-auto text-gray-700">{processDescription}</p>
      </section>

      {/* Who We Serve */}
      <section className="py-10 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Who We Serve</h2>
        <div className={`gap-6 mx-auto ${whoWeServeLayout}`}>
          {whoFor.map((item, i) => (
            <Card
              key={i}
              className={`bg-blue-100 border-sky-100 ${whoFor.length >= 5 ? 'w-full sm:w-[45%] lg:w-[30%]' : ''}`}
            >
              <CardContent className="p-6 text-center">
                <CheckCircle className="mx-auto mb-3 text-sky-600" />
                <p className="font-medium text-gray-700">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-sky-50">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          What Makes Our Service Special
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex gap-3 bg-blue-100 p-5 rounded-xl">
              <CheckCircle className="text-sky-600 mt-1" />
              <span className="text-gray-700">{b}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
