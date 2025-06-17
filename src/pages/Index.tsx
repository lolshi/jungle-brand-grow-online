
import Layout from '@/components/Layout';
import ThreeDCard from '@/components/ThreeDCard';
import ThreeDButton from '@/components/ThreeDButton';
import ParallaxSection from '@/components/ParallaxSection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { ArrowRight, Users, TrendingUp, Zap, Target, Globe, Award } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to the Jungle! 🌿",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail('');
  };

  const services = [
    {
      title: 'SEO & Content Marketing',
      description: 'Dominate search results with our data-driven SEO strategies and compelling content.',
      icon: '🔍',
      features: ['Keyword Research', 'Content Strategy', 'Link Building', 'Technical SEO']
    },
    {
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all major social platforms with engaging content.',
      icon: '📱',
      features: ['Content Creation', 'Community Management', 'Social Ads', 'Influencer Outreach']
    },
    {
      title: 'PPC Advertising',
      description: 'Get instant visibility and qualified leads with targeted pay-per-click campaigns.',
      icon: '🎯',
      features: ['Google Ads', 'Facebook Ads', 'Landing Pages', 'Conversion Tracking']
    },
    {
      title: 'Brand Identity & Design',
      description: 'Create a memorable brand that stands out in the digital jungle.',
      icon: '🎨',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Materials']
    },
    {
      title: 'Web Development',
      description: 'Build fast, responsive websites that convert visitors into customers.',
      icon: '💻',
      features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'Performance Optimization']
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track your success with comprehensive analytics and actionable insights.',
      icon: '📊',
      features: ['Google Analytics', 'Custom Dashboards', 'ROI Tracking', 'Performance Reports']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechStart Solutions',
      text: 'The Brand Jungle Network transformed our digital presence completely. Our online sales increased by 300% in just 6 months!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      company: 'Lifestyle Boutique',
      text: 'Their creative approach and jungle-themed campaigns helped us stand out in a crowded market. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c0763c69?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Mohammed Ali',
      company: 'Green Foods Co.',
      text: 'Professional, creative, and results-driven. They understand the Mumbai market like no other agency.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <ParallaxSection className="py-32 bg-gradient-to-br from-jungle-green via-jungle-green/90 to-jungle-green/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-jungle-yellow text-jungle-black animate-glow">
            🌿 Mumbai's Freshest Digital Marketing Agency
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            We Grow Your Brand in the 
            <span className="text-jungle-yellow block animate-float"> Digital Jungle</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 animate-fade-in">
            Navigate the wild world of digital marketing with Mumbai's most creative agency. 
            We combine jungle-inspired creativity with data-driven strategies to help your brand roar online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in">
            <ThreeDButton size="lg" className="text-lg px-8 py-4">
              <Link to="/contact" className="flex items-center">
                Get Free Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </ThreeDButton>
            <ThreeDButton variant="outline" size="lg" className="text-lg px-8 py-4">
              <Link to="/portfolio">View Our Wild Work</Link>
            </ThreeDButton>
          </div>
        </div>
      </ParallaxSection>

      {/* Stats Section */}
      <section className="py-20 bg-jungle-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: '50+', label: 'Happy Clients' },
              { icon: TrendingUp, number: '300%', label: 'Average Growth' },
              { icon: Zap, number: '24/7', label: 'Support' },
              { icon: Award, number: '10+', label: 'Industries' }
            ].map((stat, index) => (
              <ThreeDCard key={index} className="bg-white/90 hover:bg-white">
                <div className="text-center">
                  <stat.icon className="h-12 w-12 text-jungle-green mx-auto mb-4 animate-float" />
                  <div className="text-4xl font-bold text-jungle-green mb-2">{stat.number}</div>
                  <div className="text-jungle-black font-medium">{stat.label}</div>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ParallaxSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-jungle-green text-white">
              🚀 Our Jungle Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-jungle-black mb-6">
              Survive & Thrive in the 
              <span className="text-jungle-green"> Digital Wilderness</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From SEO to social media, we offer the complete digital marketing ecosystem 
              to help your brand grow wild and free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ThreeDCard 
                key={index} 
                title={service.title}
                icon={service.icon}
                className="h-full bg-white/95 hover:bg-white rustling-leaves"
              >
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-jungle-green">
                      <span className="mr-2">🌿</span> {feature}
                    </li>
                  ))}
                </ul>
              </ThreeDCard>
            ))}
          </div>
          <div className="text-center mt-12">
            <ThreeDButton size="lg">
              <Link to="/services">Explore All Services</Link>
            </ThreeDButton>
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials Section */}
      <section className="py-20 bg-jungle-green text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-jungle-yellow text-jungle-black">
              🗣️ What Our Pack Says
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories from the 
              <span className="text-jungle-yellow">Jungle</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ThreeDCard key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <div className="text-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <p className="text-gray-200 mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-jungle-yellow">{testimonial.name}</div>
                  <div className="text-sm text-gray-300">{testimonial.company}</div>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-jungle-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-jungle-black mb-6">
            Join the Jungle Newsletter 🌿
          </h2>
          <p className="text-xl text-jungle-black/80 mb-8">
            Get weekly digital marketing tips, trends, and Mumbai business insights straight to your inbox.
          </p>
          <ThreeDCard className="bg-white/90 hover:bg-white max-w-md mx-auto">
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:ring-jungle-green focus:border-jungle-green"
                required
              />
              <ThreeDButton type="submit" className="w-full">
                Join the Pack 🦁
              </ThreeDButton>
            </form>
          </ThreeDCard>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxSection className="py-20 bg-gradient-to-br from-jungle-green to-jungle-green/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make Your Brand 
            <span className="text-jungle-yellow block animate-float">Roar?</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss your project and create a custom digital marketing strategy 
            that'll help you dominate your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ThreeDButton size="lg" className="text-lg px-8 py-4">
              <Link to="/contact">Get Free Consultation</Link>
            </ThreeDButton>
            <ThreeDButton variant="outline" size="lg" className="text-lg px-8 py-4">
              <a href="tel:+919876543210">Call: +91 98765 43210</a>
            </ThreeDButton>
          </div>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Index;
