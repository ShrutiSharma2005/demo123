import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, CheckCircle, Sparkles, Truck, Calendar, GitBranch, Leaf, Cpu, Users, Tag, Eye, Package } from 'lucide-react';
import { services, whyChooseUs, testimonials } from '../mock';

const Home = () => {

  /* 🔁 HERO SLIDER LOGIC */
  // Exactly 3 images as requested
  const heroImages = [
    "/hero1.png",
    "/hero2.png",
    "/hero3.png"
  ];

  const [currentHeroSlide, setCurrentHeroSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 5) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  /* 🔁 END CHANGE */

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#0e4a8f] min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full pt-20 pb-16 lg:pt-0 lg:pb-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">

            {/* LEFT COLUMN: Content */}
            <div className="text-left space-y-6 z-8 relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-sm text-sky-100 text-sm font-medium shadow-sm">
                <span className="text-sky-200">✦</span>
                Student Trusted Laundry Partner
              </div>


              {/* Title */}
              <p>  <h3 className="text-lg font-semibold text-white/90 mb-0">
                The No.1 Trusted
              </h3><h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white -mt-1">
                  Laundry Solutions{" "}
                  <span className="text-sky-400">for <br /> Large-Scale  Operations</span>
                </h1></p>




              {/* Description */}
              <p className="text-lg text-sky-100 max-w-xl leading-relaxed">
                We handle large-volume laundry with care for residential schools, colleges, hospitals, and hotels across India.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/contact">
                  <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white border-0 px-8 h-12 text-lg rounded-lg shadow-lg">
                    Get a Quote
                  </Button>
                </Link>
                <Link to="/process">
                  <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 h-12 text-lg rounded-lg">
                    See How We Work
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-8 pt-8 w-full max-w-lg">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                  <div className="text-xs text-sky-200 mt-1">Institutions Served</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">99%</div>
                  <div className="text-xs text-sky-200 mt-1">Client  <br></br>Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
                  <div className="text-xs text-sky-200 mt-1">Garments <br></br>Per Day</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">20+</div>
                  <div className="text-xs text-sky-200 mt-1">Years of Experience</div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Slider Images */}
            <div className="relative h-[800px] md:h-[900px] lg:h-[100vh] w-full flex items-center justify-center lg:justify-end">
              {heroImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center lg:justify-end lg:pr-96 ${index === currentHeroSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                >
                  <img
                    src={img}
                    alt="Laundry Service"
                    className="w-[120%] h-[120%] object-contain scale-150 lg:scale-[5.5]"
                  />

                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              About Venus Fabcare
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Venus Fabcare supports institutions across India with reliable laundry services built for scale. We follow a practical, step-by-step approach where garments are carefully sorted, cleaned, finished, and delivered without shortcuts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: 'Eco-Friendly', desc: 'Using eco-friendly detergents' },
              { icon: Cpu, title: 'Modern Equipment', desc: 'State-of-the-art machinery' },
              { icon: Sparkles, title: 'Fabric Knowledge', desc: 'Expert handling of all fabrics' },
              { icon: CheckCircle, title: 'Quality Focus', desc: 'Maintaining hygiene standards' }
            ].map((item, index) => (
              <Card key={index} className="border-blue-100 bg-blue-100 hover:border-sky-300 transition-all hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-3 flex justify-center text-sky-600">
                    <item.icon className="h-10 w-10" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Expert Laundry Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive laundry solutions tailored for different institutional needs
            </p>
          </div>

          {/* IMPORTANT CHANGE: items-stretch */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {services.map((service) => (
              <Card
                key={service.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden group h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent"></div>
                </div>

                {/* IMPORTANT CHANGE: flex + h-full */}
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* IMPORTANT CHANGE: mt-auto */}
                  <Link to={`/services/${service.slug}`} className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full text-sky-600 border-sky-600 hover:bg-sky-50"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Why Choose Venus Fabcare
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-blue-100 hover:bg-blue-50 transition-colors">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-sky-600 text-white rounded-full mb-4">
                  {(() => {
                    const Icon = {
                      truck: Truck,
                      calendar: Calendar,
                      gitBranch: GitBranch,
                      leaf: Leaf,
                      cpu: Cpu,
                      users: Users,
                      tag: Tag,
                      eye: Eye,
                      package: Package
                    }[item.icon] || Package;
                    return <Icon className="h-7 w-7" />;
                  })()}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 to-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <p className="text-white/90 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/70">{testimonial.organization}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-900 to-sky-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Venus Fabcare?
          </h2>
          <p className="text-xl mb-8 text-sky-100">
            Let's handle laundry, while your institution focuses on its core mission
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50 text-lg px-10 py-6">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
