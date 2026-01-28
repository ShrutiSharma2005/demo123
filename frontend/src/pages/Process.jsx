import React from 'react';
import {
  Package, FolderOpen, Search, Waves, Shield, Wind,
  CheckCircle, Box, Truck, ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const processSteps = [
  {
    id: 1,
    title: "Pickup",
    description: "Laundry is collected from the campus or facility as per schedule.",
    icon: "package",
    image: "/1.png"
  },
  {
    id: 2,
    title: "Sorting & Coding",
    description: "Garments are separated and coded to keep tracking simple.",
    icon: "folderOpen",
    image: "/2.png"
  },
  {
    id: 3,
    title: "Initial Check",
    description: "Stains, fabric condition, and special care needs are reviewed.",
    icon: "search",
    image: "/3.png"
  },
  {
    id: 4,
    title: "Washing",
    description: "RO water, eco detergents, and high-capacity machines are used.",
    icon: "waves",
    image: "/4.png"
  },
  {
    id: 5,
    title: "Fabric Care",
    description: "Extra attention is given to color, softness, and durability.",
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
    title: "Final Check",
    description: "Each batch is checked before dispatching.",
    icon: "checkCircle",
    image: "/7.png"
  },
  {
    id: 8,
    title: "Delivery",
    description: "Packed securely and delivered on time.",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Laundry Process</h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
            A systematic, step-by-step approach ensuring quality at every stage
          </p>
        </div>
      </section>

      {/* Process Flow Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base text-gray-600 leading-relaxed">
            Our process is designed to deliver clean, fresh, and well-maintained garments with complete reliability.<br />
            Every step is carefully planned to ensure hygiene, fabric care, and on-time delivery.
          </p>
        </div>
      </section>

      {/* Process Steps - Exact Image Match */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 relative">
          {/* Continuous vertical line through all steps */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300" style={{height: '100%'}} />
          
          {processSteps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const Icon = ProcessIcons[step.icon];

            return (
              <div
                key={step.id}
                className="relative flex items-center justify-center py-12"
              >
                {/* Container with three columns */}
                <div className="w-full flex items-center relative z-5">
                  {/* Left Side - Box or Text */}
                  <div className={`w-5/12 flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
                    {isLeft ? (
                      // Box on left with image
                      <div className="w-64 h-48 bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg border border-blue-100 overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      // Text on left
                      <div className="text-right pr-8">
                        <div className="text-sm text-sky-600 font-medium mb-2">
                          Step {String(step.id).padStart(2, '0')}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-xs ml-auto">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center - Circle Icon */}
                  <div className="w-2/12 flex justify-center relative">
                    <div className="w-20 h-20 rounded-full bg-sky-600 flex items-center justify-center z-10 shadow-md">
                      <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Right Side - Text or Box */}
                  <div className={`w-5/12 flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    {isLeft ? (
                      // Text on right
                      <div className="text-left pl-8">
                        <div className="text-sm text-sky-600 font-medium mb-2">
                          Step {String(step.id).padStart(2, '0')}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      // Box on right with image
                      <div className="w-64 h-48 bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg border border-blue-100 overflow-hidden">
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
            <Card className="border-sky-200 shadow-lg bg-sky-50 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sky-600 text-white rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">ON</span>
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
                  <div className="w-12 h-12 bg-sky-600 text-white rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">OFF</span>
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