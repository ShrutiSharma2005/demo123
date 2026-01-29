import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';


const Contact = () => {
  /* Unused state and handlers removed for build implementation */

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-sky-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
            Let's discuss how Venus Fabcare can handle your institutional laundry needs
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Reach out to us and we'll respond as soon as possible. We're here to help with all your laundry needs.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-sky-100 hover:border-sky-300 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">Address</h3>
                        <p className="text-gray-600">
                          Bangalore and Moodbidre, Karnataka, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sky-100 hover:border-sky-300 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">+91 90357 00656</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sky-100 hover:border-sky-300 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">info@venusfabcare.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sky-100 hover:border-sky-300 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Saturday: 9:00 AM - 6:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">
                    Send Us a Message
                  </h2>

                  <form
                    action="https://formspree.io/f/YOUR_FORM_ID"
                    method="POST"
                    className="space-y-6"
                  >
                    {/* Hidden helpers */}
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Laundry Service Enquiry"
                    />
                    <input
                      type="text"
                      name="_gotcha"
                      style={{ display: "none" }}
                    />

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="border-gray-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        className="border-gray-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="border-gray-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="institution"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Institution Name *
                      </label>
                      <Input
                        id="institution"
                        name="institution"
                        type="text"
                        required
                        placeholder="Your school / college / company name"
                        className="border-gray-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="serviceType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Service Type *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="residential-school">
                          Residential School Laundry
                        </option>
                        <option value="college-laundry">
                          College Laundry Service
                        </option>
                        <option value="industrial-laundry">
                          Industrial Laundry Service
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        className="border-gray-300"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-900 hover:bg-sky-700 text-white"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Map or Additional CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 to-sky-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Let Venus Fabcare handle your laundry while you focus on what matters most
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+91XXXXXXXXXX">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50 text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
            </a>
            <a href="mailto:info@venusfabcare.com">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-600 text-lg px-8 py-6">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
