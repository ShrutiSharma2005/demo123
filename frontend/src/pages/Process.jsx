import React from 'react';
const ProcessIcons = {
  search: Droplet,
  waves: RefreshCw,
  wind: Wind,
  iron: Activity,
  checkCircle: CheckCircle,
  package: Package,
};
import { processSteps } from '../mock';
import {
  Truck, Activity, RefreshCw, Shield, Wind,
  CheckCircle, Package, ArrowRight,
  Droplet
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const Process = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-sky-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Laundry Process</h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
            A systematic, step-by-step approach ensuring quality at every stage
          </p>
        </div>
      </section>

      {/* Process Flow Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our process is designed to deliver clean, fresh, and well-maintained garments with complete reliability.
            Every step is carefully planned to ensure hygiene, fabric care, and on-time delivery.
          </p>
        </div>
      </section>

      {/* Process Steps - Visual Flow */}
      <section className="py-14 bg-white font-sans overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="space-y-0">
            {processSteps.map((step, index, array) => {
              const isTextRight = index % 2 === 0;
              const Icon = ProcessIcons[step.icon];

              return (
                <div
                  key={step.id}
                  className={`flex items-center w-full ${isTextRight ? "flex-row-reverse" : "flex-row"
                    }`}
                >
                  {/* Text */}
                  <div
                    className={`w-[45%] py-8 ${isTextRight ? "text-left pl-10" : "text-right pr-10"
                      }`}
                  >
                    <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                  {/* Center Line + Icon */}
                  <div className="w-[10%] flex justify-center relative">
                    {index < array.length - 1 && (
                      <div className="absolute top-1/2 left-1/2 w-[3px] h-[calc(100%+2.5rem)] bg-blue-200 -translate-x-1/2 z-0" />
                    )}

                    <div
                      className={`absolute top-1/2 h-[3px] w-20 bg-blue-200 z-0 ${isTextRight ? "left-1/2" : "right-1/2"
                        }`}
                    />

                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-200 border-[5px] border-white shadow-xl z-10 flex items-center justify-center">
                      {Icon && (
                        <Icon className="w-10 h-10 md:w-12 md:h-12 text-blue-900" />
                      )}
                    </div>
                  </div>

                  <div className="w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <img
            src="https://i.ibb.co/bjQPtsgz/process.jpg"
            alt="Laundry process overview"
            className="max-w-5xl w-full rounded-xl shadow-sm"
          />
        </div>
      </section>


      {/* Process Highlights */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              What Makes Our Process Special
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-full mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fabric Safety</h3>
                <p className="text-gray-600">
                  Eco-friendly detergents and gentle handling to preserve fabric quality and color
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Control</h3>
                <p className="text-gray-600">
                  Manual checks at multiple stages to ensure every garment meets our standards
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-full mb-4">
                  <Truck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Delivery</h3>
                <p className="text-gray-600">
                  Scheduled pickup and delivery to ensure your laundry is always on time
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Operational Setup */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Operational Setup
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer flexible operational models to suit your institution's needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-sky-200 shadow-lg bg-blue-100 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold">ON</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">On-Campus</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We set up laundry units inside your campus so we can process clothes faster,
                  monitor quality easily, and manage daily laundry without delays.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-200 bg-blue-100 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold">OFF</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Off-Campus</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We run processing units near your campus with daily pickup and delivery,
                  and we can set up units anywhere in India based on your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-900 to-sky-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Our Process-Driven Approach
          </h2>
          <p className="text-xl mb-8 text-sky-100">
            Let us handle your laundry with care, consistency, and professionalism
          </p>
          <a href="/contact">
            <button className="bg-white text-sky-600 hover:bg-sky-50 font-semibold px-8 py-4 rounded-lg text-lg inline-flex items-center transition-colors shadow-lg">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Process;
