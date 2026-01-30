import React from 'react';
import {
  Package, FolderOpen, Search, Waves, Shield, Wind,
  CheckCircle, Box, Truck, ArrowRight, Building2, MapPin
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const processSteps = [
  {
    id: 1,
    title: "Pickup",
    description: "Scheduled collection from the campus or facility for hassle-free service",
    icon: "package",
    image: "/1.png"
  },
  {
    id: 2,
    title: "Sorting & Coding",
    description: "Garments are sorted and coded for accurate tracking.",
    icon: "folderOpen",
    image: "/2.png"
  },
  {
    id: 3,
    title: "Inspection",
    description: " Items are checked for stains, fabric condition, and special care needs",
    icon: "search",
    image: "/3.png"
  },
  {
    id: 4,
    title: "Washing",
    description: "Washed using RO-treated water at controlled temperatures, eco-friendly detergents, and commercial-grade machines.",
    icon: "waves",
    image: "/4.png"
  },
  {
    id: 5,
    title: "Fabric Care",
    description: "Extra care is taken to maintain color, softness, and durability.",
    icon: "shield",
    image: "/5.png"
  },
  {
    id: 6,
    title: "Drying & Finishing",
    description: "Clothes are dried, pressed, or folded as required.",
    icon: "wind",
    image: "/6.png"
  },
  {
    id: 7,
    title: "Quality Check",
    description: "Each batch is inspected before dispatch.",
    icon: "checkCircle",
    image: "/7.png"
  },
  {
    id: 8,
    title: "Delivery",
    description: "Securely packed and delivered on time.",
    icon: "box",
    image: "/8.png"
  }
];

const ProcessIcons = {
  package: Package,
  folderOpen: FolderOpen,
  search: Search,
  waves: Waves,
  shield: Shield,
  wind: Wind,
  checkCircle: CheckCircle,
  box: Box
};

const Process = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-sky-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Laundry Solution</h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
            A systematic, step-by-step approach ensuring quality at every stage
          </p>
        </div>
      </section>

      {/* Process Flow Introduction */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base text-gray-600 leading-relaxed">
            Our Solution is designed to deliver clean, fresh, and well-maintained garments with complete reliability.<br />
            Every step is carefully planned to ensure hygiene, fabric care, and on-time delivery.
          </p>
        </div>
      </section>

      {/* Process Steps - Exact Image Match */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 relative">
          {/* Continuous vertical line through all steps */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300" />

          {processSteps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const Icon = ProcessIcons[step.icon];

            return (
              <div
                key={step.id}
                className="relative flex items-center justify-center py-8"
              >
                {/* Container with three columns */}
                <div className="w-full flex items-center justify-center relative z-10 gap-6">

                  {/* Left Side */}
                  <div className="flex-1 flex justify-end">
                    {isLeft ? (
                      // Box on left with image
                      <div className="w-48 h-36 bg-gradient-to-br from-white-50 to-blue-50 rounded-lg border border-blue-100 overflow-hidden shadow-sm">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      // Text on left
                      <div className="text-right">
                        <div className="text-xs text-sky-600 font-medium mb-1">
                          Step {String(step.id).padStart(2, '0')}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed max-w-xs ml-auto">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center - Circle Icon */}
                  <div className="flex-shrink-0 w-16 h-16 relative flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center z-10 shadow-md border-4 border-white">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="flex-1 flex justify-start">
                    {isLeft ? (
                      // Text on right
                      <div className="text-left">
                        <div className="text-xs text-white-600 font-medium mb-1">
                          Step {String(step.id).padStart(2, '0')}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      // Box on right with image
                      <div className="w-48 h-36 bg-gradient-to-br from-white-50 to-blue-50 rounded-lg border border-blue-100 overflow-hidden shadow-sm">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Highlights */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              What Makes Our Solution Special
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
            <Card className="border-sky-200 shadow-lg bg-sky-50 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">On-Campus</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We set up laundry units inside your campus so we can process clothes faster,
                  monitor quality easily, and manage daily laundry without delays.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-200 bg-sky-50 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6" />
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-900 to-sky-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Our Solution-Driven Approach
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