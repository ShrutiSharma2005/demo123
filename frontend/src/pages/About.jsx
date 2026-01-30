import React from 'react';
import { CheckCircle, Award, Target, Heart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-sky-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Venus Fabcare</h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
            Your trusted partner for professional institutional laundry services across India
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/i.jpeg"
                alt="Venus Fabcare Services"
                className="rounded-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                VENUS FABCARE has been delivering professional laundry services across India for over 20 years, supporting institutions that require reliability, hygiene, and scale. From the past two decades, our operations have followed a practical, step-by-step process where every garment is carefully sorted, thoroughly cleaned, professionally finished, and delivered on time, without shortcuts.

              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We use eco-friendly detergents, modern industrial equipment, and hands-on fabric expertise to maintain high hygiene standards while preserving fabric quality. Our experienced team ensures consistent results even when handling large laundry volumes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over 20 years, VENUS FABCARE has worked with residential schools, Integrated PU Colleges and there Courses, universities, medical colleges, hospitals, hotels, and industrial facilities, helping them manage laundry smoothly while reducing daily operational stress and workload.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-sky-100 bg-blue-100 hover:border-sky-300 transition-all hover:shadow-lg text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-full mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Committed to delivering the highest quality in every wash
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-100 bg-blue-100 hover:border-sky-300 transition-all hover:shadow-lg text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-full mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reliability</h3>
                <p className="text-gray-600">
                  Consistent service you can depend on, day after day
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-100 bg-blue-100 hover:border-sky-300 transition-all hover:shadow-lg text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-full mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Care</h3>
                <p className="text-gray-600">
                  Treating every garment with the attention it deserves
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-100 bg-blue-100 hover:border-sky-300 transition-all hover:shadow-lg text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-600">
                  Transparent processes and honest communication
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Serve */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Institutions We Serve
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Residential & Boarding Schools',
              'International & CBSE Schools',
              'PU Colleges with NEET/JEE',
              'Engineering Colleges',
              'Medical Colleges',
              'Universities & Hostels',
              'Multi-Specialty Hospitals',
              'Hotels & Hospitality',
              'Industrial Units',
              'Warehouses & Logistics',
              'Manufacturing Facilities',
              'Large Institutions'
            ].map((institute, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-5 w-5 text-sky-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{institute}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 to-sky-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
            Why Schools, Colleges & Industries Trust <br className="hidden md:block" /> Venus Fabcare
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-left">
            {[
              'We understand the institution\'s responsibility',
              'We work patiently and consistently',
              'We follow routines without compromise',
              'We treat every uniform with care',
              'We use eco-friendly, fabric-safe products',
              'We maintain the highest hygiene standards',
              'We provide transparent processes',
              'We deliver on time, every time'
            ].map((point, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl hover:bg-white/20 transition-all duration-300">
                <CheckCircle className="h-6 w-6 text-sky-300 flex-shrink-0" />
                <span className="text-white text-lg font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
