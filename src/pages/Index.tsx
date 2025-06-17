
import Layout from '@/components/Layout';
import ThreeDCard from '@/components/ThreeDCard';
import ThreeDButton from '@/components/ThreeDButton';
import ParallaxSection from '@/components/ParallaxSection';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { ArrowRight, Users, TrendingUp, Zap, Target, Globe, Award, Search, Palette, Code, BarChart3, Heart, Star, Sparkles, Rocket, Crown, CheckCircle } from 'lucide-react';

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
      color: 'from-red-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-red-50 to-pink-50',
      highlight: '400%+ ROAS Increase'
    },
    {
      title: 'SEO & UGC Content',
      description: 'Viral UGC and SEO strategies that dominate search rankings and social feeds worldwide.',
      icon: '📱',
      features: ['UGC Creation', 'Global SEO', 'Content Strategy', 'Viral Campaigns'],
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      highlight: '10M+ Views Generated'
    },
    {
      title: 'Brand Identity',
      description: 'Bold branding that makes your brand roar in any market, anywhere in the world.',
      icon: '🦁',
      features: ['Logo & Visual Identity', 'Brand Strategy', 'Global Positioning', 'Marketing Materials'],
      color: 'from-yellow-500 to-orange-500',
      gradient: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      highlight: '3x Brand Recognition'
    },
    {
      title: 'Creative Services',
      description: 'Fast, sharp creative that converts - from concept to campaign in record time.',
      icon: '🎨',
      features: ['Graphic Design', 'Video Content', 'Ad Creatives', 'Social Media Assets'],
      color: 'from-purple-500 to-indigo-500',
      gradient: 'bg-gradient-to-br from-purple-50 to-indigo-50',
      highlight: '48hr Turnaround'
    },
    {
      title: 'Web Development',
      description: 'High-converting websites built for global audiences and maximum performance.',
      icon: '💻',
      features: ['Conversion-Focused Design', 'E-commerce Development', 'Global Optimization', 'Speed Enhancement'],
      color: 'from-green-500 to-teal-500',
      gradient: 'bg-gradient-to-br from-green-50 to-teal-50',
      highlight: '85%+ Conversion Rate'
    },
    {
      title: 'Digital Strategy',
      description: 'Complete marketing ecosystems that plug into your business and deliver results.',
      icon: '📊',
      features: ['Growth Planning', 'Data Analytics', 'Conversion Optimization', 'ROI Maximization'],
      color: 'from-indigo-500 to-purple-500',
      gradient: 'bg-gradient-to-br from-indigo-50 to-purple-50',
      highlight: '300% ROI Growth'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Global',
      text: 'The Brand Jungle Network transformed our global presence. Our ROAS increased by 400% and we scaled to 15 new markets in just 6 months!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c0763c69?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      result: '400% ROAS Increase'
    },
    {
      name: 'David Chen',
      company: 'Urban Fashion Co.',
      text: 'These misfits know their stuff! Our UGC campaigns went viral globally and sales exploded. Fast, sharp, and results-driven team.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      result: '10M+ Viral Views'
    },
    {
      name: 'Maria Rodriguez',
      company: 'EcoLife Brands',
      text: 'Working with this collective feels like having an in-house global team that actually delivers. Their Delhi base gives us 24/7 coverage.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      result: '15 Global Markets'
    }
  ];

  const portfolioProjects = [
    {
      title: 'Global E-commerce Scale',
      category: 'Performance Marketing',
      description: '400% ROAS increase for DTC fashion brand across 15 countries',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      results: '+400% ROAS',
      metrics: ['15 Countries', '400% ROAS', '6 Month Scale']
    },
    {
      title: 'Viral UGC Campaign',
      category: 'Content & SEO',
      description: '10M+ views on TikTok and Instagram for beauty startup',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      results: '10M+ Views',
      metrics: ['10M+ Views', '500% Engagement', '3 Platforms']
    },
    {
      title: 'Brand Identity Overhaul',
      category: 'Branding',
      description: 'Complete rebrand for tech startup expanding globally',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
      results: '3x Recognition',
      metrics: ['Global Launch', '3x Recognition', '5 Markets']
    }
  ];

  const achievements = [
    { icon: Globe, number: '15+', label: 'Global Markets', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: TrendingUp, number: '400%+', label: 'Average ROAS', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: Zap, number: '48hrs', label: 'Creative Turnaround', color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { icon: Crown, number: '50+', label: 'Brands Scaled', color: 'text-purple-600', bg: 'bg-purple-50' }
  ];

  return (
    <Layout>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThreeDButton 
          size="lg" 
          className="animate-pulse hover:animate-none shadow-2xl bg-gradient-to-r from-jungle-green to-green-600 hover:shadow-jungle-green/25"
        >
          <Link to="/contact" className="flex items-center">
            <Rocket className="mr-2 h-5 w-5" />
            Get Strategy Call
          </Link>
        </ThreeDButton>
      </div>

      {/* Enhanced Hero Section with Glassmorphism */}
      <ParallaxSection className="py-32 bg-gradient-to-br from-jungle-green via-emerald-800 to-jungle-green/90 text-white relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 hero-jungle-pattern opacity-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 animate-float opacity-80">
            <div className="text-6xl filter drop-shadow-xl animate-pulse">🌿</div>
          </div>
          <div className="absolute top-32 right-20 animate-float opacity-80" style={{animationDelay: '1s'}}>
            <div className="text-5xl filter drop-shadow-xl animate-pulse">🐅</div>
          </div>
          <div className="absolute bottom-32 left-1/4 animate-float opacity-80" style={{animationDelay: '2s'}}>
            <div className="text-4xl filter drop-shadow-xl animate-pulse">🦜</div>
          </div>
          <div className="absolute top-1/2 right-10 animate-float opacity-80" style={{animationDelay: '0.5s'}}>
            <div className="text-3xl filter drop-shadow-xl animate-pulse">📊</div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 mb-8">
            <Badge className="mb-8 bg-gradient-to-r from-jungle-yellow to-yellow-400 text-jungle-black animate-glow text-lg px-8 py-3 rounded-full shadow-xl">
              <Sparkles className="mr-2 h-4 w-4" />
              🌍 #1 Global Marketing Collective • Based in Delhi, India
            </Badge>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 animate-fade-in leading-none bg-gradient-to-r from-white via-jungle-yellow to-white bg-clip-text text-transparent">
              Global Marketing
              <span className="block text-jungle-yellow animate-float drop-shadow-2xl"> That Converts</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-5xl mx-auto mb-12 animate-fade-in leading-relaxed font-light">
              We're the ex-agency misfits who make brands roar globally. From Delhi to the world, 
              we create viral UGC and ROAS-breaking campaigns that scale without the BS.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in">
            <ThreeDButton size="lg" className="text-xl px-12 py-8 hover:scale-110 transition-all duration-300 bg-gradient-to-r from-jungle-yellow to-yellow-400 text-jungle-black shadow-2xl">
              <Link to="/contact" className="flex items-center">
                <Target className="mr-3 h-6 w-6" />
                Book Free Consultation
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </ThreeDButton>
            <ThreeDButton variant="outline" size="lg" className="text-xl px-12 py-8 hover:scale-110 transition-all duration-300 backdrop-blur-sm bg-white/10 border-white/30 hover:bg-white/20">
              <Link to="/portfolio" className="flex items-center">
                <Globe className="mr-3 h-6 w-6" />
                Download Case Study
              </Link>
            </ThreeDButton>
          </div>
        </div>
      </ParallaxSection>

      {/* Enhanced Achievements Section */}
      <section className="py-24 bg-gradient-to-r from-jungle-yellow via-yellow-300 to-jungle-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="jungle-leaves-pattern"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <ThreeDCard key={index} className="bg-white/95 hover:bg-white hover:scale-110 transition-all duration-500 group border-0 shadow-2xl">
                <div className="text-center">
                  <div className={`${achievement.bg} p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-125 transition-transform duration-300`}>
                    <achievement.icon className={`h-12 w-12 ${achievement.color} animate-float`} />
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-jungle-green mb-3 bg-gradient-to-r from-jungle-green to-emerald-600 bg-clip-text text-transparent">
                    {achievement.number}
                  </div>
                  <div className="text-jungle-black font-bold text-lg mb-2">{achievement.label}</div>
                  <div className="text-sm text-gray-600">Global Excellence</div>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section with Glassmorphism */}
      <ParallaxSection className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-jungle-green/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-jungle-green to-emerald-600 text-white text-lg px-8 py-3 rounded-full shadow-xl">
              <Rocket className="mr-2 h-4 w-4" />
              🚀 Performance-Driven Services
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-jungle-black mb-8 leading-tight">
              Marketing That 
              <span className="bg-gradient-to-r from-jungle-green to-emerald-600 bg-clip-text text-transparent"> Actually Works</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              From viral UGC to ROAS-breaking ad funnels, we create marketing that's fast, 
              sharp, and built to scale globally from our Delhi headquarters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ThreeDCard 
                key={index} 
                className={`h-full ${service.gradient} hover:bg-white hover:scale-105 transition-all duration-500 group border-0 shadow-xl hover:shadow-2xl backdrop-blur-sm overflow-hidden relative`}
              >
                <div className={`absolute top-0 right-0 bg-gradient-to-l ${service.color} w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-bl-full`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-6xl animate-float group-hover:scale-125 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <Badge className={`bg-gradient-to-r ${service.color} text-white px-3 py-1 text-sm font-bold rounded-full`}>
                      {service.highlight}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-jungle-green mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-jungle-green font-medium">
                        <CheckCircle className="mr-3 h-5 w-5 text-jungle-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ThreeDCard>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <ThreeDButton size="lg" className="hover:scale-110 transition-all duration-300 text-xl px-12 py-6 bg-gradient-to-r from-jungle-green to-emerald-600 shadow-2xl">
              <Link to="/services" className="flex items-center">
                <Sparkles className="mr-3 h-6 w-6" />
                Explore All Services
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </ThreeDButton>
          </div>
        </div>
      </ParallaxSection>

      {/* Enhanced Portfolio Preview with Motion */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jungle-yellow/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-jungle-green/10 rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-jungle-yellow to-yellow-400 text-jungle-black text-lg px-8 py-3 rounded-full shadow-xl">
              <Crown className="mr-2 h-4 w-4" />
              🏆 Global Success Stories
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-jungle-black leading-tight">
              Results That 
              <span className="bg-gradient-to-r from-jungle-green to-emerald-600 bg-clip-text text-transparent">Speak Volumes</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              From Delhi to global markets, see how we've transformed brands with 
              performance-driven strategies and viral campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {portfolioProjects.map((project, index) => (
              <ThreeDCard key={index} className="bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-gray-50 hover:scale-105 hover:rotate-1 transition-all duration-500 group overflow-hidden border-0 shadow-xl hover:shadow-2xl">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-jungle-green to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {project.results}
                  </div>
                </div>
                
                <Badge className="mb-3 bg-gradient-to-r from-jungle-yellow to-yellow-400 text-jungle-black rounded-full px-3 py-1">
                  {project.category}
                </Badge>
                
                <h3 className="text-xl font-bold text-jungle-green mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric, idx) => (
                    <Badge key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {metric}
                    </Badge>
                  ))}
                </div>
              </ThreeDCard>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <ThreeDButton size="lg" className="hover:scale-110 transition-all duration-300 text-xl px-12 py-6 bg-gradient-to-r from-jungle-green to-emerald-600 shadow-2xl">
              <Link to="/portfolio" className="flex items-center">
                <Star className="mr-3 h-6 w-6" />
                See All Projects
                <Crown className="ml-3 h-6 w-6" />
              </Link>
            </ThreeDButton>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-24 bg-gradient-to-br from-jungle-green via-emerald-800 to-jungle-green text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-20"></div>
        <div className="absolute top-10 right-10 animate-float opacity-80">
          <div className="text-5xl filter drop-shadow-xl animate-pulse">🦁</div>
        </div>
        <div className="absolute bottom-10 left-10 animate-float opacity-80" style={{animationDelay: '1.5s'}}>
          <div className="text-4xl filter drop-shadow-xl animate-pulse">🐅</div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-jungle-yellow to-yellow-400 text-jungle-black text-lg px-8 py-3 rounded-full shadow-xl">
              <Users className="mr-2 h-4 w-4" />
              🎯 Meet The Global Misfits
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              The Collective Behind 
              <span className="text-jungle-yellow">Your Growth</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
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
                expertise: 'Strategy & Vision',
                achievement: 'Built 50+ Global Brands'
              },
              {
                name: 'Shivam',
                role: 'Head of Performance Marketing',
                description: 'ROAS-obsessed performance nerd who turns ad spend into profit machines across 15+ countries.',
                emoji: '🎯',
                expertise: 'Meta & Google Ads',
                achievement: '400%+ Average ROAS'
              },
              {
                name: 'Keshav',
                role: 'SEO & UGC Specialist',
                description: 'Content killer and SEO wizard who makes brands go viral and rank #1 in global markets.',
                emoji: '📱',
                expertise: 'Content & SEO',
                achievement: '10M+ Viral Views'
              }
            ].map((member, index) => (
              <ThreeDCard key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-500 group border-0 shadow-2xl">
                <div className="text-center">
                  <div className="text-8xl mb-6 animate-float group-hover:scale-125 transition-transform duration-300 filter drop-shadow-xl">
                    {member.emoji}
                  </div>
                  <h3 className="text-3xl font-bold text-jungle-yellow mb-2">{member.name}</h3>
                  <p className="text-xl font-semibold mb-2">{member.role}</p>
                  <Badge className="mb-3 bg-gradient-to-r from-jungle-yellow to-yellow-400 text-jungle-black rounded-full px-3 py-1">
                    {member.expertise}
                  </Badge>
                  <Badge className="mb-4 bg-white/10 text-white border border-white/20 rounded-full px-3 py-1 block">
                    {member.achievement}
                  </Badge>
                  <p className="text-gray-200 leading-relaxed">{member.description}</p>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-jungle-green/10 rounded-full translate-y-32 -translate-x-32"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-jungle-yellow to-yellow-400 text-jungle-black text-lg px-8 py-3 rounded-full shadow-xl">
              <Heart className="mr-2 h-4 w-4" />
              🗣️ What Our Global Pack Says
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-jungle-black leading-tight">
              Success Stories from the 
              <span className="bg-gradient-to-r from-jungle-green to-emerald-600 bg-clip-text text-transparent">Global Jungle</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <ThreeDCard key={index} className="bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-gray-50 hover:scale-105 hover:rotate-1 transition-all duration-500 group border-0 shadow-xl hover:shadow-2xl overflow-hidden">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full mx-auto group-hover:scale-110 transition-transform duration-300 border-4 border-jungle-green/20"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-jungle-green to-emerald-600 text-white px-3 py-1 text-xs rounded-full">
                        {testimonial.result}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-jungle-yellow fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic text-lg leading-relaxed font-light">"{testimonial.text}"</p>
                  
                  <div className="font-bold text-jungle-green text-xl mb-1">{testimonial.name}</div>
                  <div className="text-gray-500 text-lg">{testimonial.company}</div>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-jungle-yellow via-yellow-300 to-jungle-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="jungle-leaves-pattern"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-jungle-black mb-8 leading-tight">
              Join the Global Jungle Newsletter 🌍
            </h2>
            <p className="text-xl md:text-2xl text-jungle-black/80 mb-12 leading-relaxed font-light">
              Get weekly global marketing insights, performance tips, and viral strategies 
              straight from Delhi to your inbox.
            </p>
            
            <ThreeDCard className="bg-white/95 hover:bg-white hover:scale-105 transition-all duration-300 max-w-lg mx-auto border-0 shadow-2xl">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-6">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:ring-jungle-green focus:border-jungle-green text-lg py-6 rounded-xl border-2 border-gray-200 focus:border-jungle-green transition-colors duration-300"
                  required
                />
                <ThreeDButton type="submit" className="w-full hover:scale-105 transition-transform text-lg py-6 bg-gradient-to-r from-jungle-green to-emerald-600 shadow-xl">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Join the Global Pack 🦁
                </ThreeDButton>
              </form>
            </ThreeDCard>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <ParallaxSection className="py-24 bg-gradient-to-br from-jungle-green via-emerald-800 to-jungle-green text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-30"></div>
        <div className="absolute top-10 left-10 animate-float opacity-80">
          <div className="text-5xl filter drop-shadow-xl animate-pulse">🌿</div>
        </div>
        <div className="absolute bottom-10 right-10 animate-float opacity-80" style={{animationDelay: '2s'}}>
          <div className="text-4xl filter drop-shadow-xl animate-pulse">🎯</div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-12 border border-white/10 shadow-2xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              Ready to Make Your Brand 
              <span className="text-jungle-yellow block animate-float">Roar Globally?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed font-light">
              Let's plug into your ecosystem and create marketing that converts globally. 
              Fast, sharp, and built for scale from Delhi to the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <ThreeDButton size="lg" className="text-xl px-12 py-8 hover:scale-110 transition-all duration-300 bg-gradient-to-r from-jungle-yellow to-yellow-400 text-jungle-black shadow-2xl">
                <Link to="/contact" className="flex items-center">
                  <Globe className="mr-3 h-6 w-6" />
                  Get Free Global Strategy Call
                  <Rocket className="ml-3 h-6 w-6" />
                </Link>
              </ThreeDButton>
              <ThreeDButton variant="outline" size="lg" className="text-xl px-12 py-8 hover:scale-110 transition-all duration-300 backdrop-blur-sm bg-white/10 border-white/30 hover:bg-white/20">
                <a href="tel:+918800362887" className="flex items-center">
                  <Heart className="mr-3 h-6 w-6" />
                  Call Delhi: +91 88003 62887
                </a>
              </ThreeDButton>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Index;
