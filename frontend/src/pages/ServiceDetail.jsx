import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../mock';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

// Service-specific content
const serviceContent = {
  'residential-school': {
    subtitle: 'Our laundry service ensures prompt handling of school uniforms and bedding, helping maintain a professional appearance and streamline routines',
    whoFor: [
      'Residential & boarding schools',
      'International & CBSE schools',
      'Schools with hostel facilities'
    ],
    challenges: [
      { problem: 'Students depend fully on staff', solution: 'Laundry managed externally' },
      { problem: 'Parents worry about cleanliness', solution: 'Hygiene-focused wash methods' },
      { problem: 'Uniforms wear out quickly', solution: 'Gentle, uniform-friendly care' },
      { problem: 'Laundry schedules get missed', solution: 'Fixed service routines' },
      { problem: 'Mixing of student clothes', solution: 'Clear identification methods' },
      { problem: 'Hostel staff workload increases', solution: 'Reduced internal handling' }
    ],
    benefits: [
      'Designed keeping children\'s comfort in mind',
      'Suitable for daily uniform use',
      'Full-year consistency',
      'Reduces laundry-related parent concerns',
      'Supports cleaner hostel environments',
      'Easy coordination with school authorities',
      'Works well during busy school schedules',
      'Maintains discipline through routine'
    ]
  },
  'college-laundry': {
    subtitle: 'Simplify your campus laundry experience with our organized pickup and delivery service. We handle the laundry, so you can focus on classes, exams, and enjoying college life. Stay sharp and stress-free!',
    whoFor: [
      'PU colleges with NEET/JEE coaching',
      'Engineering and medical colleges',
      'Degree colleges and universities',
      'Institutional hostels'
    ],
    challenges: [
      { problem: 'Students lack time for laundry', solution: 'We handle everything for them' },
      { problem: 'No laundry knowledge or space', solution: 'Professional care provided' },
      { problem: 'Clothes get mixed or lost', solution: 'Proper tagging and tracking' },
      { problem: 'Laundry piles cause stress', solution: 'Regular pickup and delivery' },
      { problem: 'Hygiene concerns in hostels', solution: 'Clean, hygienic process' },
      { problem: 'Hostel staff burden', solution: 'Fully managed by us' }
    ],
    benefits: [
      'More time for studies and campus life',
      'Clean clothes without the hassle',
      'Easy-to-follow collection routines',
      'Keeps hostel rooms organized',
      'Quality care at affordable rates',
      'Regular schedules students can rely on',
      'Builds healthy daily habits',
      'Less worry for parents'
    ]
  },
  'industrial-laundry': {
    subtitle: 'Elevate your business with our high-volume laundry solution! We ensure fresh workwear and linens with a focus on hygiene and punctuality. Let us handle the laundry, so your team can maintain professionalism effortlessly!',
    whoFor: [
      'Factories & manufacturing units',
      'Hotels & hospitality facilities',
      'Hospitals, clinics, and medical centers',
      'Warehouses & logistics companies',
      'Large industrial institutions'
    ],
    challenges: [
      { problem: 'Too many uniforms and linens', solution: 'Handle large volumes easily' },
      { problem: 'Tough stains and dirt', solution: 'Pre-treat stains before washing' },
      { problem: 'Workwear gets damaged', solution: 'Special care for fabrics' },
      { problem: 'Laundry slows work', solution: 'Regular pickup and delivery' },
      { problem: 'Hygiene rules to follow', solution: 'Eco-friendly, hygienic cleaning' },
      { problem: 'Hard to track clothes', solution: 'Cloth coding and sorting' },
      { problem: 'Extra staff workload', solution: 'We manage all laundry' }
    ],
    benefits: [
      'Handles large laundry volumes',
      'Saves staff time and effort',
      'Keeps uniforms clean and hygienic',
      'Careful with tough and delicate fabrics',
      'Uses eco-friendly cleaning products',
      'Tracks every batch to avoid mix-ups',
      'Delivers on time, every time',
      'Reduces operational stress'
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  const content = serviceContent[slug];

  if (!service || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/">
            <Button className="bg-sky-600 hover:bg-sky-700">Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-sky-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link to="/" className="inline-flex items-center text-sky-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl md:text-2xl text-sky-100 mb-8 leading-relaxed">{content.subtitle}</p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50 text-lg px-8 py-6">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Who This Service Is For
            </h2>
          </div>

          <div className={`gap-6 mx-auto ${content.whoFor.length === 5
              ? "flex flex-wrap justify-center max-w-6xl"
              : content.whoFor.length === 4
                ? "grid sm:grid-cols-2 lg:grid-cols-4 max-w-7xl"
                : "grid sm:grid-cols-2 lg:grid-cols-3 max-w-4xl"
            }`}>
            {content.whoFor.map((item, index) => (
              <Card
                key={index}
                className={`h-full border-sky-100 bg-blue-100 hover:border-sky-300 transition-all ${content.whoFor.length === 5
                    ? "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                    : "w-full"
                  }`}
              >
                <CardContent className="p-6 text-center h-full flex flex-col justify-center items-center">
                  <CheckCircle className="h-10 w-10 text-sky-600 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>


      {/* Challenges & Solutions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Common Challenges & Our Solutions
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-3 px-5 text-left text-base font-semibold">
                    Problem
                  </th>
                  <th className="py-3 px-5 text-left text-base font-semibold">
                    Our Solution
                  </th>
                </tr>
              </thead>

              <tbody>
                {content.challenges.map((item, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-sky-50" : "bg-white"
                      } hover:bg-sky-100 transition-colors`}
                  >
                    <td className="py-3 px-5 text-gray-700 border-b border-sky-100">
                      {item.problem}
                    </td>
                    <td className="py-3 px-5 text-gray-900 font-medium border-b border-sky-100">
                      <span className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-sky-600 mt-[2px] flex-shrink-0" />
                        {item.solution}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>


      {/* Service Benefits */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              What Makes Our Service Special
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-5 bg-blue-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-6 w-6 text-sky-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Venus Fabcare */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 to-sky-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Choose Venus Fabcare?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                'We understand your institution\'s responsibility',
                'We work patiently and consistently',
                'We follow routines without compromise',
                'We treat every garment with care'
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3 text-left bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-sky-300 flex-shrink-0" />
                  <span className="text-lg">{point}</span>
                </div>
              ))}
            </div>

            <Link to="/contact">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50 text-lg px-10 py-6">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
