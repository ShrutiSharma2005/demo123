import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { services, whyChooseUs, testimonials } from '../mock';

const Home = () => {

  /* 🔁 HERO BACKGROUND ROTATION (ONLY CHANGE) */
  const heroImages = [
    "https://i.ibb.co/spt1K1KL/2.jpg",
    "https://i.ibb.co/k2Sh2Ym4/Whats-App-Image-2026-01-21-at-7-21-17-PM.jpg",
    "https://i.ibb.co/V0mKH8Jn/Whats-App-Image-2026-01-21-at-7-21-18-PM-1.jpg",
    "https://i.ibb.co/b5b4Wd0F/Whats-App-Image-2026-01-21-at-7-21-18-PM.jpg"
  ];

  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  /* 🔁 END CHANGE */

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100">

        {/* Dynamic Background Images */}
        {heroImages.map((img, index) => (
          <img
            key={img}
            src={img}
            alt="Laundry Service"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-40" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="inline-flex items-center bg-blue-200 text-sky-700 px-4 py-2 rounded-full text-base font-medium">
            <Sparkles className="h-4 w-4 mr-2" />
            Student Trusted Laundry Partner
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
            The No 1 Trusted Laundry Solutions
            <br />
            <span className="text-blue-900">for Large-Scale Operations</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed max-w-2xl">
            We handle large-volume laundry with care for residential schools, colleges, hospitals, and hotels across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white text-lg px-8 py-6">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/process">
              <Button size="lg" variant="outline" className="text-blue-900 border-blue-600 hover:bg-sky-50 text-lg px-8 py-6">
                See How We Work
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-gray-200 max-w-3xl w-full">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-900">500+</div>
              <div className="text-sm sm:text-base font-semibold text-gray-900">Institutions Served</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-900">99%</div>
              <div className="text-sm sm:text-base font-semibold text-gray-900">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-900">10K+</div>
              <div className="text-sm sm:text-base font-semibold text-gray-900">Garments Cleaned</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-900">20+</div>
              <div className="text-sm sm:text-base font-semibold text-gray-900">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-8 lg:py-18 bg-white">
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
              { icon: '🌿', title: 'Eco-Friendly', desc: 'Using eco-friendly detergents' },
              { icon: '⚙️', title: 'Modern Equipment', desc: 'State-of-the-art machinery' },
              { icon: '🎯', title: 'Fabric Knowledge', desc: 'Expert handling of all fabrics' },
              { icon: '✨', title: 'Quality Focus', desc: 'Maintaining hygiene standards' }
            ].map((item, index) => (
              <Card key={index} className="border-blue-100 bg-blue-100 hover:border-sky-300 transition-all hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-6 pb-8 lg:pb-18 bg-gradient-to-b from-blue-100 to-white">
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
      <section className="pt-8 lg:pt-10 pb-8 bg-white">
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
                  <span className="text-2xl">{item.icon === 'calendar' ? '📅' : item.icon === 'gitBranch' ? '🔄' : item.icon === 'leaf' ? '🌿' : item.icon === 'cpu' ? '⚙️' : item.icon === 'users' ? '👥' : item.icon === 'tag' ? '🏷️' : item.icon === 'eye' ? '👁️' : '📦'}</span>
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
