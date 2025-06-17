
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
      title: 'Performance Marketing',
      description: 'ROAS-breaking ad funnels and performance campaigns that scale globally.',
      icon: '🎯',
      features: ['Paid Ads (Meta, Google)', 'Funnel Optimization', 'ROAS Tracking', 'Global Scaling']
    },
    {
      title: 'SEO & UGC Content',
      description: 'Viral UGC and SEO strategies that dominate search and social feeds.',
      icon: '📱',
      features: ['UGC Creation', 'SEO Strategy', 'Content Marketing', 'Viral Campaigns']
    },
    {
      title: 'Brand Identity',
      description: 'Bold branding that makes your brand roar in any market, anywhere.',
      icon: '🦁',
      features: ['Logo & Visual Identity', 'Brand Strategy', 'Marketing Materials', 'Global Brand Positioning']
    },
    {
      title: 'Creative Services',
      description: 'Fast, sharp creative that converts - from concept to campaign.',
      icon: '🎨',
      features: ['Graphic Design', 'Video Content', 'Ad Creatives', 'Social Media Content']
    },
    {
      title: 'Web Development',
      description: 'High-converting websites built for global audiences and performance.',
      icon: '💻',
      features: ['Conversion-Focused Design', 'E-commerce Development', 'Global SEO', 'Performance Optimization']
    },
    {
      title: 'Digital Strategy',
      description: 'Complete marketing ecosystems that plug into your business and convert.',
      icon: '📊',
      features: ['Marketing Strategy', 'Growth Planning', 'Data Analytics', 'Conversion Optimization']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Global',
      text: 'The Brand Jungle Network transformed our global presence. Our ROAS increased by 400% and we scaled to 15 new markets!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c0763c69?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'David Chen',
      company: 'Urban Fashion Co.',
      text: 'These misfits know their stuff! Our UGC campaigns went viral and sales exploded. Fast, sharp, and results-driven.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Maria Rodriguez',
      company: 'EcoLife Brands',
      text: 'Working with this collective feels like having an in-house team that actually delivers. Global reach, local expertise.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Enhanced Parallax */}
      <ParallaxSection className="py-32 bg-gradient-to-br from-jungle-green via-jungle-green/90 to-jungle-green/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-30"></div>
        <div className="absolute top-10 left-10 animate-float">
          <div className="text-6xl">🌿</div>
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{animationDelay: '1s'}}>
          <div className="text-4xl">🐅</div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{animationDelay: '2s'}}>
          <div className="text-5xl">🦜</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="mb-6 bg-jungle-yellow text-jungle-black animate-glow">
            🌍 Global Marketing Collective • Based in Delhi
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            We Grow Your Brand
            <span className="text-jungle-yellow block animate-float"> Globally</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 animate-fade-in">
            We're the misfits who make your brand roar. Ex-agency experts, performance nerds, 
            and retention obsessives creating marketing that's fast, sharp, and built to convert 
            - from Delhi to the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in">
            <ThreeDButton size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform">
              <Link to="/contact" className="flex items-center">
                Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </ThreeDButton>
            <ThreeDButton variant="outline" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform">
              <Link to="/portfolio">See Our Wild Work</Link>
            </ThreeDButton>
          </div>
        </div>
      </ParallaxSection>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-jungle-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="jungle-leaves-pattern"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Globe, number: 'Global', label: 'Reach Worldwide', color: 'text-jungle-green' },
              { icon: TrendingUp, number: '400%+', label: 'Average ROAS', color: 'text-jungle-green' },
              { icon: Zap, number: '24/7', label: 'Support', color: 'text-jungle-green' },
              { icon: Award, number: '2025', label: 'Founded', color: 'text-jungle-green' }
            ].map((stat, index) => (
              <ThreeDCard key={index} className="bg-white/90 hover:bg-white hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4 animate-float`} />
                  <div className="text-4xl font-bold text-jungle-green mb-2">{stat.number}</div>
                  <div className="text-jungle-black font-medium">{stat.label}</div>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced 3D Elements */}
      <ParallaxSection className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-jungle-green/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-jungle-green text-white">
              🚀 Performance-Driven Services
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-jungle-black mb-6">
              Marketing That 
              <span className="text-jungle-green"> Converts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From viral UGC to ROAS-breaking ad funnels, we create marketing that's fast, 
              sharp, and built to scale globally.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ThreeDCard 
                key={index} 
                title={service.title}
                icon={service.icon}
                className="h-full bg-white/95 hover:bg-white hover:scale-105 transition-all duration-300 rustling-leaves"
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
            <ThreeDButton size="lg" className="hover:scale-105 transition-transform">
              <Link to="/services">Explore All Services</Link>
            </ThreeDButton>
          </div>
        </div>
      </ParallaxSection>

      {/* Team Section - The Misfits */}
      <section className="py-20 bg-jungle-green text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-20"></div>
        <div className="absolute top-10 right-10 animate-float">🦁</div>
        <div className="absolute bottom-10 left-10 animate-float" style={{animationDelay: '1.5s'}}>🐅</div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-jungle-yellow text-jungle-black">
              🎯 Meet The Misfits
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Collective Behind 
              <span className="text-jungle-yellow">Your Growth</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We're ex-agency misfits who got tired of bloated retainers and snail-paced approvals. 
              So we built something better.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Aniket',
                role: 'Founder & CEO',
                description: 'The visionary misfit who escaped agency life to build a collective that actually delivers.',
                emoji: '🦁'
              },
              {
                name: 'Shivam',
                role: 'Head of Performance Marketing',
                description: 'ROAS-obsessed performance nerd who turns ad spend into profit machines.',
                emoji: '🎯'
              },
              {
                name: 'Keshav',
                role: 'SEO & UGC Specialist',
                description: 'Content killer and SEO wizard who makes brands go viral and rank #1.',
                emoji: '📱'
              }
            ].map((member, index) => (
              <ThreeDCard key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-float">{member.emoji}</div>
                  <h3 className="text-2xl font-bold text-jungle-yellow mb-2">{member.name}</h3>
                  <p className="text-lg font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-200">{member.description}</p>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-jungle-yellow/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-jungle-yellow text-jungle-black">
              🗣️ What Our Pack Says
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-jungle-black">
              Global Success Stories from the 
              <span className="text-jungle-green">Jungle</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ThreeDCard key={index} className="bg-gray-50 hover:bg-white hover:scale-105 transition-all duration-300 border-l-4 border-l-jungle-green">
                <div className="text-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-jungle-green">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-jungle-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="jungle-leaves-pattern"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-jungle-black mb-6">
            Join the Global Jungle Newsletter 🌍
          </h2>
          <p className="text-xl text-jungle-black/80 mb-8">
            Get weekly global marketing insights, performance tips, and viral strategies 
            straight from Delhi to your inbox.
          </p>
          <ThreeDCard className="bg-white/90 hover:bg-white hover:scale-105 transition-all duration-300 max-w-md mx-auto">
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:ring-jungle-green focus:border-jungle-green"
                required
              />
              <ThreeDButton type="submit" className="w-full hover:scale-105 transition-transform">
                Join the Pack 🦁
              </ThreeDButton>
            </form>
          </ThreeDCard>
        </div>
      </section>

      {/* Final CTA Section */}
      <ParallaxSection className="py-20 bg-gradient-to-br from-jungle-green to-jungle-green/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-30"></div>
        <div className="absolute top-10 left-10 animate-float">🌿</div>
        <div className="absolute bottom-10 right-10 animate-float" style={{animationDelay: '2s'}}>🎯</div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Make Your Brand 
            <span className="text-jungle-yellow block animate-float">Roar Globally?</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's plug into your ecosystem and create marketing that converts. 
            Fast, sharp, and built for global scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ThreeDButton size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform">
              <Link to="/contact">Get Free Consultation</Link>
            </ThreeDButton>
            <ThreeDButton variant="outline" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform">
              <a href="tel:+918800362887">Call: +91 88003 62887</a>
            </ThreeDButton>
          </div>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Index;
