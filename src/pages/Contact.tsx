
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent Successfully! 🌿",
      description: "We'll get back to you within 24 hours to discuss your project.",
    });
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  const services = [
    'SEO & Content Marketing',
    'Social Media Marketing',
    'PPC Advertising',
    'Brand Identity & Design',
    'Web Development',
    'Creative Services',
    'Full Digital Marketing Package'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-jungle-green to-jungle-green/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 jungle-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-jungle-yellow text-jungle-black">
            🌿 Let's Grow Your Brand Together
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Dominate the 
            <span className="text-jungle-yellow"> Digital Jungle?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Get in touch with Mumbai's freshest digital marketing agency. 
            Let's discuss how we can help your brand thrive online.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-jungle-green">
                  Get Your Free Consultation 🚀
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours 
                  with a custom strategy for your brand.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="focus:ring-jungle-green focus:border-jungle-green"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="focus:ring-jungle-green focus:border-jungle-green"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="focus:ring-jungle-green focus:border-jungle-green"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest *
                    </label>
                    <Select onValueChange={handleServiceChange}>
                      <SelectTrigger className="focus:ring-jungle-green focus:border-jungle-green">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell Us About Your Project *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your goals, challenges, and what you're looking to achieve..."
                      rows={5}
                      required
                      className="focus:ring-jungle-green focus:border-jungle-green"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-jungle-green hover:bg-jungle-green/90 text-white text-lg py-3"
                  >
                    Send Message & Get Free Strategy 🌿
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Info */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-jungle-green flex items-center">
                    <span className="mr-2">📍</span>
                    Mumbai Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-gray-600">
                      The Brand Jungle Network<br />
                      Mumbai, Maharashtra, India<br />
                      India's Commercial Capital
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-600">
                      <span className="mr-2">📧</span>
                      hello@brandjunglenetwork.com
                    </p>
                    <p className="flex items-center text-gray-600">
                      <span className="mr-2">📞</span>
                      +91 98765 43210
                    </p>
                    <p className="flex items-center text-gray-600">
                      <span className="mr-2">💬</span>
                      WhatsApp Available
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg bg-jungle-green text-white">
                <CardHeader>
                  <CardTitle className="text-jungle-yellow">
                    Quick Actions 🚀
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    asChild 
                    className="w-full bg-jungle-yellow text-jungle-black hover:bg-jungle-yellow/90"
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Book 30-Min Consultation Call 📅
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white hover:text-jungle-green"
                  >
                    <a href="#" download>
                      Download Free Marketing Guide 📊
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white hover:text-jungle-green"
                  >
                    <a href="#" download>
                      Get Case Study Collection 📈
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="border-0 shadow-lg bg-jungle-yellow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-jungle-black text-xl mb-2">
                    ⚡ Lightning Fast Response
                  </h3>
                  <p className="text-jungle-black/80">
                    We respond to all inquiries within <strong>24 hours</strong>.<br />
                    Urgent projects? Call us directly!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-4">
              Frequently Asked 
              <span className="text-jungle-green">Questions</span>
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "How quickly can you start working on my project?",
                answer: "We can typically start within 1-2 weeks after our initial consultation and strategy approval. For urgent projects, we offer expedited timelines."
              },
              {
                question: "What makes The Brand Jungle Network different?",
                answer: "We're a fresh agency with a creative jungle theme, combining Mumbai's business pulse with innovative digital strategies. We focus on measurable results and creative solutions."
              },
              {
                question: "Do you work with businesses outside Mumbai?",
                answer: "Absolutely! While we're based in Mumbai, we work with clients across India and internationally. All our services are delivered remotely with excellent communication."
              },
              {
                question: "What's included in a free consultation?",
                answer: "Our free consultation includes a business analysis, competitive review, initial strategy recommendations, and a custom proposal for your specific needs."
              },
              {
                question: "How do you measure success?",
                answer: "We use data-driven KPIs specific to your goals: traffic growth, conversion rates, leads generated, revenue increase, and brand engagement metrics."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-l-4 border-l-jungle-green">
                <CardContent className="p-6">
                  <h3 className="font-bold text-jungle-black mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-jungle-green text-white relative overflow-hidden">
        <div className="absolute inset-0 jungle-pattern opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Make Your Brand Roar in the Digital Jungle! 🦁
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join the pack of successful brands we've helped grow. 
            Your digital transformation starts with a simple conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-jungle-yellow text-jungle-black hover:bg-jungle-yellow/90 text-lg px-8 py-4"
            >
              <a href="tel:+919876543210">Call Now: +91 98765 43210 📞</a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-jungle-green text-lg px-8 py-4"
            >
              <a href="mailto:hello@brandjunglenetwork.com">Email Us Directly 📧</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
