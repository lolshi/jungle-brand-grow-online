
import Layout from '@/components/Layout';
import ThreeDCard from '@/components/ThreeDCard';
import ThreeDButton from '@/components/ThreeDButton';
import ParallaxSection from '@/components/ParallaxSection';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { ArrowRight, Users, TrendingUp, Zap, Target, Globe, Award, Search, Palette, Code, BarChart3, Heart, Star } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to the Global Jungle! 🌍",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail('');
  };

  const services = [
    {
      title: 'Performance Marketing',
      description: 'ROAS-breaking ad funnels and performance campaigns that scale globally across all platforms.',
      icon: '🎯',
      features: ['Meta & Google Ads', 'Funnel Optimization', 'ROAS Tracking', 'Global Scaling'],
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'SEO & UGC Content',
      description: 'Viral UGC and SEO strategies that dominate search rankings and social feeds worldwide.',
      icon: '📱',
      features: ['UGC Creation', 'Global SEO', 'Content Strategy', 'Viral Campaigns'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Brand Identity',
      description: 'Bold branding that makes your brand roar in any market, anywhere in the world.',
      icon: '🦁',
      features: ['Logo & Visual Identity', 'Brand Strategy', 'Global Positioning', 'Marketing Materials'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Creative Services',
      description: 'Fast, sharp creative that converts - from concept to campaign in record time.',
      icon: '🎨',
      features: ['Graphic Design', 'Video Content', 'Ad Creatives', 'Social Media Assets'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Web Development',
      description: 'High-converting websites built for global audiences and maximum performance.',
      icon: '💻',
      features: ['Conversion-Focused Design', 'E-commerce Development', 'Global Optimization', 'Speed Enhancement'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Digital Strategy',
      description: 'Complete marketing ecosystems that plug into your business and deliver results.',
      icon: '📊',
      features: ['Growth Planning', 'Data Analytics', 'Conversion Optimization', 'ROI Maximization'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Global',
      text: 'The Brand Jungle Network transformed our global presence. Our ROAS increased by 400% and we scaled to 15 new markets in just 6 months!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c0763c69?w=100&h=100&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Urban Fashion Co.',
      text: 'These misfits know their stuff! Our UGC campaigns went viral globally and sales exploded. Fast, sharp, and results-driven team.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'EcoLife Brands',
      text: 'Working with this collective feels like having an in-house global team that actually delivers. Their Delhi base gives us 24/7 coverage.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5
    }
  ];

  const portfolioProjects = [
    {
      title: 'Global E-commerce Scale',
      category: 'Performance Marketing',
      description: '400% ROAS increase for DTC fashion brand across 15 countries',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      results: '+400% ROAS'
    },
    {
      title: 'Viral UGC Campaign',
      category: 'Content & SEO',
      description: '10M+ views on TikTok and Instagram for beauty startup',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      results: '10M+ Views'
    },
    {
      title: 'Brand Identity Overhaul',
      category: 'Branding',
      description: 'Complete rebrand for tech startup expanding globally',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
      results: '3x Recognition'
    }
  ];

  return (
    <Layout>
      {/* Sticky CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThreeDButton 
          size="lg" 
          className="animate-pulse hover:animate-none shadow-2xl"
        >
          <Link to="/contact" className="flex items-center">
            Get Strategy Call <Target className="ml-2 h-5 w-5" />
          </Link>
        </ThreeDButton>
      </div>

      {/* Enhanced Hero Section */}
      <ParallaxSection className="py-32 bg-gradient-to-br from-jungle-green via-jungle-green/95 to-jungle-green/90 text-white relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 hero-jungle-pattern opacity-20"></div>
        
        {/* Floating 3D Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="text-6xl filter drop-shadow-lg">🌿</div>
        </div>
        <div className="absolute top-32 right-20 animate-float" style={{animationDelay: '1s'}}>
          <div className="text-5xl filter drop-shadow-lg">🐅</div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{animationDelay: '2s'}}>
          <div className="text-4xl filter drop-shadow-lg">🦜</div>
        </div>
        <div className="absolute top-1/2 right-10 animate-float" style={{animationDelay: '0.5s'}}>
          <div className="text-3xl filter drop-shadow-lg">📊</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="mb-8 bg-jungle-yellow text-jungle-black animate-glow text-lg px-6 py-2">
            🌍 Global Marketing Collective • Based in Delhi, India
          </Badge>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-8 animate-fade-in leading-tight">
            Global Marketing
            <span className="text-jungle-yellow block animate-float text-shadow"> That Converts</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto mb-12 animate-fade-in leading-relaxed">
            We're the ex-agency misfits who make brands roar globally. From Delhi to the world, 
            we create viral UGC and ROAS-breaking campaigns that scale without the BS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in">
            <ThreeDButton size="lg" className="text-xl px-10 py-6 hover:scale-110 transition-all duration-300">
              <Link to="/contact" className="flex items-center">
                Book Free Consultation <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </ThreeDButton>
            <ThreeDButton variant="outline" size="lg" className="text-xl px-10 py-6 hover:scale-110 transition-all duration-300">
              <Link to="/portfolio" className="flex items-center">
                Download Case Study <Globe className="ml-3 h-6 w-6" />
              </Link>
            </ThreeDButton>
          </div>
        </div>
      </ParallaxSection>

      {/* Enhanced Stats Section */}
      <section className="py-24 bg-jungle-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="jungle-leaves-pattern"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Globe, number: 'Global', label: 'Reach Worldwide', color: 'text-jungle-green', desc: '15+ Countries' },
              { icon: TrendingUp, number: '400%+', label: 'Average ROAS', color: 'text-jungle-green', desc: 'Performance Marketing' },
              { icon: Zap, number: '24/7', label: 'Support Coverage', color: 'text-jungle-green', desc: 'Delhi Time Zone' },
              { icon: Award, number: '2025', label: 'Founded Fresh', color: 'text-jungle-green', desc: 'Modern Approach' }
            ].map((stat, index) => (
              <ThreeDCard key={index} className="bg-white/95 hover:bg-white hover:scale-110 transition-all duration-500 group">
                <div className="text-center">
                  <stat.icon className={`h-16 w-16 ${stat.color} mx-auto mb-6 animate-float group-hover:scale-125 transition-transform duration-300`} />
                  <div className="text-5xl font-bold text-jungle-green mb-3">{stat.number}</div>
                  <div className="text-jungle-black font-bold text-lg mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.desc}</div>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <ParallaxSection className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-jungle-green/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-jungle-green text-white text-lg px-6 py-2">
              🚀 Performance-Driven Services
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-jungle-black mb-8 leading-tight">
              Marketing That 
              <span className="text-jungle-green"> Actually Works</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From viral UGC to ROAS-breaking ad funnels, we create marketing that's fast, 
              sharp, and built to scale globally from our Delhi headquarters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ThreeDCard 
                key={index} 
                title={service.title}
                icon={service.icon}
                className="h-full bg-white/95 hover:bg-white hover:scale-105 transition-all duration-500 rustling-leaves group border-l-4 border-l-jungle-green"
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-jungle-green font-medium">
                      <span className="mr-3 text-lg">🌿</span> {feature}
                    </li>
                  ))}
                </ul>
              </ThreeDCard>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <ThreeDButton size="lg" className="hover:scale-110 transition-all duration-300 text-xl px-10 py-6">
              <Link to="/services" className="flex items-center">
                Explore All Services <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </ThreeDButton>
          </div>
        </div>
      </ParallaxSection>

      {/* Enhanced Portfolio Preview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jungle-yellow/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-jungle-yellow text-jungle-black text-lg px-6 py-2">
              🏆 Global Success Stories
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-jungle-black leading-tight">
              Results That 
              <span className="text-jungle-green">Speak Volumes</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From Delhi to global markets, see how we've transformed brands with 
              performance-driven strategies and viral campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {portfolioProjects.map((project, index) => (
              <ThreeDCard key={index} className="bg-gray-50 hover:bg-white hover:scale-105 hover:rotate-1 transition-all duration-500 group overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-6 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-jungle-green text-white px-3 py-1 rounded-full text-sm font-bold">
                    {project.results}
                  </div>
                </div>
                <Badge className="mb-3 bg-jungle-yellow text-jungle-black">{project.category}</Badge>
                <h3 className="text-xl font-bold text-jungle-green mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </ThreeDCard>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <ThreeDButton size="lg" className="hover:scale-110 transition-all duration-300 text-xl px-10 py-6">
              <Link to="/portfolio" className="flex items-center">
                See All Projects <Star className="ml-3 h-6 w-6" />
              </Link>
            </ThreeDButton>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-24 bg-jungle-green text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-20"></div>
        <div className="absolute top-10 right-10 animate-float">
          <div className="text-5xl filter drop-shadow-lg">🦁</div>
        </div>
        <div className="absolute bottom-10 left-10 animate-float" style={{animationDelay: '1.5s'}}>
          <div className="text-4xl filter drop-shadow-lg">🐅</div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-jungle-yellow text-jungle-black text-lg px-6 py-2">
              🎯 Meet The Global Misfits
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              The Collective Behind 
              <span className="text-jungle-yellow">Your Growth</span>
            </h2>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              We're ex-agency misfits based in Delhi who got tired of bloated retainers and 
              snail-paced approvals. So we built something better for global brands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: 'Aniket',
                role: 'Founder & CEO',
                description: 'The visionary misfit who escaped agency life to build a collective that delivers results globally from Delhi.',
                emoji: '🦁',
                expertise: 'Strategy & Vision'
              },
              {
                name: 'Shivam',
                role: 'Head of Performance Marketing',
                description: 'ROAS-obsessed performance nerd who turns ad spend into profit machines across 15+ countries.',
                emoji: '🎯',
                expertise: 'Meta & Google Ads'
              },
              {
                name: 'Keshav',
                role: 'SEO & UGC Specialist',
                description: 'Content killer and SEO wizard who makes brands go viral and rank #1 in global markets.',
                emoji: '📱',
                expertise: 'Content & SEO'
              }
            ].map((member, index) => (
              <ThreeDCard key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-500 group">
                <div className="text-center">
                  <div className="text-8xl mb-6 animate-float group-hover:scale-125 transition-transform duration-300">{member.emoji}</div>
                  <h3 className="text-3xl font-bold text-jungle-yellow mb-2">{member.name}</h3>
                  <p className="text-xl font-semibold mb-2">{member.role}</p>
                  <Badge className="mb-4 bg-jungle-yellow text-jungle-black">{member.expertise}</Badge>
                  <p className="text-gray-200 leading-relaxed">{member.description}</p>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-jungle-green/10 rounded-full translate-y-32 -translate-x-32"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-jungle-yellow text-jungle-black text-lg px-6 py-2">
              🗣️ What Our Global Pack Says
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-jungle-black leading-tight">
              Success Stories from the 
              <span className="text-jungle-green">Global Jungle</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <ThreeDCard key={index} className="bg-gray-50 hover:bg-white hover:scale-105 hover:rotate-1 transition-all duration-500 border-l-4 border-l-jungle-green group">
                <div className="text-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-jungle-yellow fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="font-bold text-jungle-green text-xl">{testimonial.name}</div>
                  <div className="text-gray-500 text-lg">{testimonial.company}</div>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-24 bg-jungle-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="jungle-leaves-pattern"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-jungle-black mb-8 leading-tight">
            Join the Global Jungle Newsletter 🌍
          </h2>
          <p className="text-2xl text-jungle-black/80 mb-12 leading-relaxed">
            Get weekly global marketing insights, performance tips, and viral strategies 
            straight from Delhi to your inbox.
          </p>
          
          <ThreeDCard className="bg-white/95 hover:bg-white hover:scale-105 transition-all duration-300 max-w-lg mx-auto">
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-6">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:ring-jungle-green focus:border-jungle-green text-lg py-4"
                required
              />
              <ThreeDButton type="submit" className="w-full hover:scale-105 transition-transform text-lg py-4">
                Join the Global Pack 🦁
              </ThreeDButton>
            </form>
          </ThreeDCard>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <ParallaxSection className="py-24 bg-gradient-to-br from-jungle-green to-jungle-green/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-30"></div>
        <div className="absolute top-10 left-10 animate-float">
          <div className="text-5xl filter drop-shadow-lg">🌿</div>
        </div>
        <div className="absolute bottom-10 right-10 animate-float" style={{animationDelay: '2s'}}>
          <div className="text-4xl filter drop-shadow-lg">🎯</div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Ready to Make Your Brand 
            <span className="text-jungle-yellow block animate-float">Roar Globally?</span>
          </h2>
          <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
            Let's plug into your ecosystem and create marketing that converts globally. 
            Fast, sharp, and built for scale from Delhi to the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <ThreeDButton size="lg" className="text-xl px-10 py-6 hover:scale-110 transition-all duration-300">
              <Link to="/contact" className="flex items-center">
                Get Free Global Strategy Call <Globe className="ml-3 h-6 w-6" />
              </Link>
            </ThreeDButton>
            <ThreeDButton variant="outline" size="lg" className="text-xl px-10 py-6 hover:scale-110 transition-all duration-300">
              <a href="tel:+918800362887" className="flex items-center">
                Call Delhi: +91 88003 62887 <Heart className="ml-3 h-6 w-6" />
              </a>
            </ThreeDButton>
          </div>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Index;
