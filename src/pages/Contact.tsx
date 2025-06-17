
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Award, Users, Globe, Star, CheckCircle } from 'lucide-react';

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

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "15+", label: "Awards Won" },
    { icon: Globe, number: "25+", label: "Countries Served" },
    { icon: Star, number: "4.9", label: "Client Rating" }
  ];

  const contactMethods = [
    { icon: Phone, label: "Call Us", value: "+91 98765 43210", action: "tel:+919876543210" },
    { icon: Mail, label: "Email Us", value: "hello@brandjunglenetwork.com", action: "mailto:hello@brandjunglenetwork.com" },
    { icon: MessageCircle, label: "WhatsApp", value: "Quick Response", action: "#" },
    { icon: MapPin, label: "Visit Us", value: "Mumbai, India", action: "#" }
  ];

  return (
    <Layout>
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-jungle-yellow/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-jungle-green/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-jungle-yellow/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-1/3 w-28 h-28 bg-jungle-green/5 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-jungle-green via-jungle-green/95 to-jungle-green/90 text-white overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 hero-jungle-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-jungle-yellow/5 to-transparent"></div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `linear-gradient(rgba(255,193,7,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,193,7,0.1) 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }}>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-jungle-yellow/20 backdrop-blur-sm border border-jungle-yellow/30 rounded-full px-6 py-3 mb-8 animate-fade-in">
              <MessageCircle className="w-5 h-5 text-jungle-yellow" />
              <span className="text-jungle-yellow font-medium">Let's Grow Your Brand Together</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in text-shadow">
              Ready to Dominate the{' '}
              <span className="text-jungle-yellow bg-clip-text bg-gradient-to-r from-jungle-yellow to-yellow-300">
                Digital Jungle?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 animate-fade-in">
              Get in touch with Mumbai's freshest digital marketing agency. 
              Let's discuss how we can help your brand thrive online.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in card-3d bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <stat.icon className="w-8 h-8 text-jungle-yellow mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-jungle-green/10 text-jungle-green border-jungle-green/20">
              Multiple Ways to Connect
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-jungle-black mb-6">
              Choose Your Preferred{' '}
              <span className="text-jungle-green">Contact Method</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-3d border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-gradient-to-br from-white to-gray-50/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-jungle-green to-jungle-green/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-jungle-black mb-2">{method.label}</h3>
                  <p className="text-gray-600 mb-4">{method.value}</p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-jungle-green text-jungle-green hover:bg-jungle-green hover:text-white"
                  >
                    <a href={method.action}>Connect Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-3d border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50/30 backdrop-blur-sm">
                <CardHeader className="pb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-jungle-green to-jungle-green/80 rounded-xl flex items-center justify-center">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-jungle-green">
                        Get Your Free Consultation 🚀
                      </CardTitle>
                      <p className="text-gray-600 mt-2">
                        Fill out the form below and we'll get back to you within 24 hours 
                        with a custom strategy for your brand.
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-jungle-green" />
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="h-12 focus:ring-jungle-green focus:border-jungle-green border-2 transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-jungle-green" />
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="h-12 focus:ring-jungle-green focus:border-jungle-green border-2 transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-jungle-green" />
                        Company Name
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="h-12 focus:ring-jungle-green focus:border-jungle-green border-2 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Award className="w-4 h-4 text-jungle-green" />
                        Service of Interest *
                      </label>
                      <Select onValueChange={handleServiceChange}>
                        <SelectTrigger className="h-12 focus:ring-jungle-green focus:border-jungle-green border-2 transition-all duration-300">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-2 border-gray-200 shadow-xl">
                          {services.map((service) => (
                            <SelectItem key={service} value={service} className="hover:bg-jungle-green/10">
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-jungle-green" />
                        Tell Us About Your Project *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your goals, challenges, and what you're looking to achieve..."
                        rows={6}
                        required
                        className="focus:ring-jungle-green focus:border-jungle-green border-2 transition-all duration-300 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full btn-3d bg-gradient-to-r from-jungle-green to-jungle-green/90 hover:from-jungle-green/90 hover:to-jungle-green text-white text-lg py-4 h-auto font-semibold"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message & Get Free Strategy 🌿
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-8">
              {/* Office Info */}
              <Card className="card-3d border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/30">
                <CardHeader>
                  <CardTitle className="text-jungle-green flex items-center text-xl">
                    <MapPin className="w-6 h-6 mr-3" />
                    Mumbai Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      The Brand Jungle Network<br />
                      Mumbai, Maharashtra, India<br />
                      India's Commercial Capital
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600 hover:text-jungle-green transition-colors cursor-pointer">
                      <Mail className="w-5 h-5 mr-3 text-jungle-green" />
                      hello@brandjunglenetwork.com
                    </div>
                    <div className="flex items-center text-gray-600 hover:text-jungle-green transition-colors cursor-pointer">
                      <Phone className="w-5 h-5 mr-3 text-jungle-green" />
                      +91 98765 43210
                    </div>
                    <div className="flex items-center text-gray-600 hover:text-jungle-green transition-colors cursor-pointer">
                      <MessageCircle className="w-5 h-5 mr-3 text-jungle-green" />
                      WhatsApp Available
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="card-3d border-0 shadow-xl bg-gradient-to-br from-jungle-green via-jungle-green/95 to-jungle-green/90 text-white overflow-hidden">
                <div className="absolute inset-0 jungle-pattern opacity-20"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-jungle-yellow flex items-center">
                    <Star className="w-6 h-6 mr-2" />
                    Quick Actions 🚀
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <Button 
                    asChild 
                    className="w-full btn-3d bg-jungle-yellow text-jungle-black hover:bg-jungle-yellow/90 font-semibold"
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      📅 Book 30-Min Consultation Call
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-jungle-green font-semibold"
                  >
                    <a href="#" download>
                      📊 Download Free Marketing Guide
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-jungle-green font-semibold"
                  >
                    <a href="#" download>
                      📈 Get Case Study Collection
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="card-3d border-0 shadow-xl bg-gradient-to-br from-jungle-yellow via-jungle-yellow/95 to-jungle-yellow/90 overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  <Clock className="w-12 h-12 text-jungle-black mx-auto mb-4" />
                  <h3 className="font-bold text-jungle-black text-2xl mb-3">
                    ⚡ Lightning Fast Response
                  </h3>
                  <p className="text-jungle-black/80 leading-relaxed">
                    We respond to all inquiries within <strong className="text-jungle-black">24 hours</strong>.<br />
                    Urgent projects? Call us directly!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-jungle-green/10 text-jungle-green border-jungle-green/20">
              Common Questions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-jungle-black mb-4">
              Frequently Asked{' '}
              <span className="text-jungle-green bg-clip-text bg-gradient-to-r from-jungle-green to-green-600">
                Questions
              </span>
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
              <Card key={index} className="card-3d border-l-4 border-l-jungle-green shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-white to-gray-50/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-jungle-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-jungle-black mb-3 text-lg">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-jungle-green via-jungle-green/95 to-jungle-green/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-jungle-yellow/5 to-transparent"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-jungle-yellow rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
              <span className="text-3xl">🦁</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
              Let's Make Your Brand Roar in the Digital Jungle!
            </h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Join the pack of successful brands we've helped grow. 
              Your digital transformation starts with a simple conversation.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="btn-3d bg-jungle-yellow text-jungle-black hover:bg-jungle-yellow/90 text-lg px-10 py-4 h-auto font-semibold"
            >
              <a href="tel:+919876543210" className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Call Now: +91 98765 43210
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="btn-3d bg-transparent border-2 border-white text-white hover:bg-white hover:text-jungle-green text-lg px-10 py-4 h-auto font-semibold"
            >
              <a href="mailto:hello@brandjunglenetwork.com" className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Email Us Directly
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
