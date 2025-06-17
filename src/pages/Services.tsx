
import Layout from '@/components/Layout';
import ThreeDCard from '@/components/ThreeDCard';
import ThreeDButton from '@/components/ThreeDButton';
import ParallaxSection from '@/components/ParallaxSection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Zap, Target, TrendingUp, Users, Globe, Award, Star, Sparkles, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'SEO & Content Marketing',
      description: 'Dominate search results globally and attract organic traffic with our comprehensive SEO strategies.',
      icon: '🔍',
      gradient: 'from-green-500 to-emerald-600',
      price: '₹25,000/month',
      features: [
        'Global SEO Strategy & Audit',
        'Keyword Research & Optimization',
        'Technical SEO & Core Web Vitals',
        'Content Creation & Distribution',
        'International Link Building',
        'Performance Analytics & Reporting'
      ],
      popular: false
    },
    {
      title: 'Social Media Marketing',
      description: 'Build your global brand presence and engage audiences across all major platforms worldwide.',
      icon: '📱',
      gradient: 'from-blue-500 to-purple-600',
      price: '₹20,000/month',
      features: [
        'Global Social Media Strategy',
        'Viral Content Creation & UGC',
        'Multi-Platform Management',
        'Influencer Collaborations',
        'Social Media Advertising',
        'Community Building & Engagement'
      ],
      popular: true
    },
    {
      title: 'Performance Marketing',
      description: 'Break ROAS records with data-driven campaigns that convert globally across all channels.',
      icon: '🎯',
      gradient: 'from-orange-500 to-red-600',
      price: '₹15,000/month + Ad Spend',
      features: [
        'Google Ads & Microsoft Ads',
        'Meta & TikTok Advertising',
        'LinkedIn & Twitter Campaigns',
        'Conversion Rate Optimization',
        'Advanced Attribution Modeling',
        'Real-time Performance Tracking'
      ],
      popular: false
    },
    {
      title: 'Brand Identity & Creative',
      description: 'Create memorable brands that roar in the global marketplace and stand out everywhere.',
      icon: '🎨',
      gradient: 'from-pink-500 to-rose-600',
      price: '₹50,000 one-time',
      features: [
        'Global Brand Strategy',
        'Logo & Visual Identity Design',
        'Brand Guidelines & Systems',
        'Marketing Collateral Design',
        'Digital Asset Library',
        'Brand Implementation Support'
      ],
      popular: false
    },
    {
      title: 'Web Development',
      description: 'Build lightning-fast, conversion-optimized websites that perform globally.',
      icon: '💻',
      gradient: 'from-indigo-500 to-blue-600',
      price: '₹1,00,000+',
      features: [
        'Global-Ready Web Development',
        'E-commerce & DTC Platforms',
        'Performance Optimization',
        'SEO-Friendly Architecture',
        'Mobile-First Design',
        'Ongoing Maintenance & Support'
      ],
      popular: false
    },
    {
      title: 'Full Jungle Package',
      description: 'Complete digital ecosystem with all services for brands ready to dominate globally.',
      icon: '🚀',
      gradient: 'from-jungle-green to-green-600',
      price: '₹75,000/month',
      features: [
        'All Services Included',
        'Dedicated Global Account Team',
        'Weekly Strategy Sessions',
        'Priority 24/7 Support',
        'Custom Analytics Dashboard',
        'Quarterly Growth Reviews'
      ],
      popular: true
    }
  ];

  const industries = [
    { name: 'E-commerce & DTC', icon: '🛒', color: 'bg-gradient-to-r from-blue-500 to-cyan-500', description: 'Global online retail' },
    { name: 'Healthcare & Wellness', icon: '🏥', color: 'bg-gradient-to-r from-green-500 to-emerald-500', description: 'Medical & wellness brands' },
    { name: 'Real Estate', icon: '🏢', color: 'bg-gradient-to-r from-purple-500 to-violet-500', description: 'Property & development' },
    { name: 'EdTech & Learning', icon: '🎓', color: 'bg-gradient-to-r from-orange-500 to-amber-500', description: 'Education technology' },
    { name: 'Food & Beverage', icon: '🍽️', color: 'bg-gradient-to-r from-red-500 to-pink-500', description: 'Culinary & hospitality' },
    { name: 'SaaS & Technology', icon: '💻', color: 'bg-gradient-to-r from-indigo-500 to-blue-500', description: 'Software & tech startups' },
    { name: 'Fashion & Lifestyle', icon: '👗', color: 'bg-gradient-to-r from-pink-500 to-rose-500', description: 'Fashion & retail brands' },
    { name: 'FinTech & Finance', icon: '💰', color: 'bg-gradient-to-r from-yellow-500 to-orange-500', description: 'Financial services' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'Deep dive into your business, analyze global competition, and craft a winning strategy.',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Creative Execution',
      description: 'Our ex-agency team executes with precision, creativity, and conversion focus.',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Performance Optimization',
      description: 'Continuously monitor, test, and optimize for maximum ROI and global growth.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '04',
      title: 'Scale & Dominate',
      description: 'Scale your success globally with advanced strategies and expanded market reach.',
      icon: Award,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    { icon: Globe, title: 'Global Reach', description: 'Worldwide expertise from Delhi' },
    { icon: Zap, title: 'Lightning Fast', description: 'No bloated processes' },
    { icon: Target, title: 'Conversion Focused', description: 'Built to convert & scale' },
    { icon: Users, title: 'Ex-Agency Experts', description: 'Seasoned professionals' }
  ];

  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <ParallaxSection className="relative py-32 bg-gradient-to-br from-jungle-green via-jungle-green/95 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-jungle-yellow rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-jungle-yellow/40 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-8 h-8 text-jungle-yellow/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-8 bg-jungle-yellow/20 text-jungle-yellow border border-jungle-yellow/30 text-lg px-6 py-2 animate-glow">
            <Star className="w-4 h-4 mr-2" />
            Complete Digital Marketing Solutions
          </Badge>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-in leading-tight">
            Services That Make 
            <span className="block text-transparent bg-gradient-to-r from-jungle-yellow to-amber-300 bg-clip-text animate-float">
              Your Brand Roar
            </span>
            <span className="block text-4xl md:text-5xl mt-4 text-gray-200">
              Globally
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            From viral UGC to ROAS-breaking campaigns, we provide the complete digital ecosystem 
            your brand needs to dominate markets worldwide. Based in Delhi, serving the globe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <ThreeDButton size="lg" className="text-lg px-10 py-5 animate-slide-in">
              <Link to="/contact" className="flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
            </ThreeDButton>
            <ThreeDButton variant="outline" size="lg" className="text-lg px-10 py-5 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/portfolio" className="flex items-center">
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </ThreeDButton>
          </div>
        </div>
      </ParallaxSection>

      {/* Key Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ThreeDCard key={index} className="text-center bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
                <feature.icon className="w-12 h-12 text-jungle-green mx-auto mb-4 animate-float" />
                <h3 className="text-lg font-bold text-jungle-black mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-jungle-green/10 text-jungle-green border border-jungle-green/20">
              🌿 Our Service Jungle
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-jungle-black mb-8">
              Choose Your 
              <span className="text-transparent bg-gradient-to-r from-jungle-green to-emerald-600 bg-clip-text">
                Growth Path
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Each service is crafted by ex-agency experts who understand what it takes 
              to build brands that dominate globally. No fluff, just results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ThreeDCard 
                key={index} 
                className={`relative h-full overflow-hidden group transition-all duration-500 hover:scale-105 ${
                  service.popular 
                    ? 'bg-gradient-to-br from-jungle-green to-emerald-700 text-white ring-4 ring-jungle-yellow/50' 
                    : 'bg-white hover:shadow-2xl'
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-jungle-yellow text-jungle-black font-bold text-sm px-3 py-1 animate-pulse">
                      🔥 Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="relative z-10 text-center mb-8">
                  <div className="text-5xl mb-6 animate-float group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    service.popular ? 'text-jungle-yellow' : 'text-jungle-green'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm mb-6 leading-relaxed ${
                    service.popular ? 'text-gray-200' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>
                  <div className={`text-3xl font-bold mb-6 ${
                    service.popular ? 'text-jungle-yellow' : 'text-jungle-green'
                  }`}>
                    {service.price}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 relative z-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start text-sm ${
                      service.popular ? 'text-gray-200' : 'text-gray-600'
                    }`}>
                      <Check className={`mr-3 h-5 w-5 mt-0.5 flex-shrink-0 ${
                        service.popular ? 'text-jungle-yellow' : 'text-jungle-green'
                      }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="relative z-10">
                  <ThreeDButton 
                    variant={service.popular ? 'secondary' : 'primary'} 
                    className="w-full group-hover:scale-105 transition-transform duration-300"
                  >
                    <Link to="/contact" className="flex items-center justify-center">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </ThreeDButton>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <ParallaxSection className="py-24 bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 jungle-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-jungle-green/10 text-jungle-green border border-jungle-green/20">
              <Zap className="w-4 h-4 mr-2" />
              Our Proven Process
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-jungle-black mb-8">
              How We Grow Your 
              <span className="text-transparent bg-gradient-to-r from-jungle-green to-emerald-600 bg-clip-text">
                Global Brand
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our systematic approach ensures every project delivers maximum results and ROI, 
              backed by ex-agency expertise and global market insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <ThreeDCard 
                key={index} 
                className="text-center bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:scale-105 group"
              >
                <div className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.step}
                </div>
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-jungle-black mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Enhanced Industries Section */}
      <section className="py-24 bg-gradient-to-br from-jungle-green via-emerald-800 to-jungle-green text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-jungle-green/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-jungle-yellow/20 text-jungle-yellow border border-jungle-yellow/30">
              <Globe className="w-4 h-4 mr-2" />
              Global Industries We Serve
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Expertise Across 
              <span className="text-jungle-yellow block animate-float">
                Every Industry
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              From scrappy DTC startups to scaling enterprises, we've helped businesses 
              across every industry dominate their markets globally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <ThreeDCard 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${industry.color} flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform duration-300`}>
                  {industry.icon}
                </div>
                <h3 className="font-bold text-jungle-yellow text-lg mb-2">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-jungle-yellow via-amber-400 to-jungle-yellow relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-jungle-yellow/90 to-amber-400/90"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 animate-float">
          <Sparkles className="w-8 h-8 text-jungle-green/30" />
        </div>
        <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <Star className="w-6 h-6 text-jungle-green/40" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-jungle-black mb-8">
            Ready to Dominate 
            <span className="block text-jungle-green">
              Your Market?
            </span>
          </h2>
          <p className="text-xl text-jungle-black/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's create a custom digital marketing strategy that fits your business goals, 
            budget, and global ambitions. No bloated retainers, just results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <ThreeDButton size="lg" className="text-lg px-10 py-5 bg-jungle-green hover:bg-jungle-green/90">
              <Link to="/contact" className="flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Get Free Strategy Call
              </Link>
            </ThreeDButton>
            <ThreeDButton variant="outline" size="lg" className="text-lg px-10 py-5 border-jungle-green text-jungle-green hover:bg-jungle-green hover:text-white">
              <Link to="/portfolio" className="flex items-center">
                View Success Stories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </ThreeDButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
