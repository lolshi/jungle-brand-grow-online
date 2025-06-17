
import Layout from '@/components/Layout';
import ThreeDCard from '@/components/ThreeDCard';
import ThreeDButton from '@/components/ThreeDButton';
import ParallaxSection from '@/components/ParallaxSection';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Search, 
  TrendingUp, 
  PenTool, 
  Monitor, 
  BarChart3, 
  Users,
  Target,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Performance Marketing',
      description: 'ROAS-breaking ad funnels and performance campaigns that scale globally across all platforms.',
      icon: <Target className="h-12 w-12" />,
      features: ['Meta & Google Ads', 'Funnel Optimization', 'ROAS Tracking', 'Global Scaling'],
      color: 'from-red-500 to-pink-500',
      price: 'Starting at $2,500/month',
      emoji: '🎯'
    },
    {
      title: 'SEO & UGC Content',
      description: 'Viral UGC and SEO strategies that dominate search rankings and social feeds worldwide.',
      icon: <Search className="h-12 w-12" />,
      features: ['UGC Creation', 'Global SEO', 'Content Strategy', 'Viral Campaigns'],
      color: 'from-blue-500 to-cyan-500',
      price: 'Starting at $1,800/month',
      emoji: '📱'
    },
    {
      title: 'Brand Identity',
      description: 'Bold branding that makes your brand roar in any market, anywhere in the world.',
      icon: <PenTool className="h-12 w-12" />,
      features: ['Logo & Visual Identity', 'Brand Strategy', 'Global Positioning', 'Marketing Materials'],
      color: 'from-yellow-500 to-orange-500',
      price: 'Starting at $3,500',
      emoji: '🦁'
    },
    {
      title: 'Creative Services',
      description: 'Fast, sharp creative that converts - from concept to campaign in record time.',
      icon: <PenTool className="h-12 w-12" />,
      features: ['Graphic Design', 'Video Content', 'Ad Creatives', 'Social Media Assets'],
      color: 'from-purple-500 to-indigo-500',
      price: 'Starting at $1,200/month',
      emoji: '🎨'
    },
    {
      title: 'Web Development',
      description: 'High-converting websites built for global audiences and maximum performance.',
      icon: <Monitor className="h-12 w-12" />,
      features: ['Conversion-Focused Design', 'E-commerce Development', 'Global Optimization', 'Speed Enhancement'],
      color: 'from-green-500 to-teal-500',
      price: 'Starting at $4,500',
      emoji: '💻'
    },
    {
      title: 'Digital Strategy',
      description: 'Complete marketing ecosystems that plug into your business and deliver results.',
      icon: <BarChart3 className="h-12 w-12" />,
      features: ['Growth Planning', 'Data Analytics', 'Conversion Optimization', 'ROI Maximization'],
      color: 'from-indigo-500 to-purple-500',
      price: 'Starting at $2,000/month',
      emoji: '📊'
    }
  ];

  const packages = [
    {
      name: 'Startup Pack',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for startups ready to scale globally',
      features: [
        'Performance Marketing Setup',
        'Basic UGC Content',
        'Brand Guidelines',
        'Monthly Strategy Calls',
        'Performance Reports'
      ],
      popular: false
    },
    {
      name: 'Growth Pack',
      price: '$5,500',
      period: '/month',
      description: 'For growing brands expanding worldwide',
      features: [
        'Full Performance Marketing',
        'SEO & Content Strategy',
        'Creative Services',
        'Weekly Strategy Calls',
        'Advanced Analytics',
        'Priority Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Pack',
      price: '$12,000',
      period: '/month',
      description: 'Complete global marketing ecosystem',
      features: [
        'All Services Included',
        'Dedicated Account Manager',
        'Custom Strategy Development',
        'Daily Performance Monitoring',
        'Quarterly Business Reviews',
        '24/7 Support'
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <ParallaxSection className="py-32 bg-gradient-to-br from-jungle-green via-jungle-green/95 to-jungle-green/90 text-white relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 hero-jungle-pattern opacity-20"></div>
        
        {/* Floating 3D Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="text-6xl filter drop-shadow-lg">🌿</div>
        </div>
        <div className="absolute top-32 right-20 animate-float" style={{animationDelay: '1s'}}>
          <div className="text-5xl filter drop-shadow-lg">🎯</div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{animationDelay: '2s'}}>
          <div className="text-4xl filter drop-shadow-lg">📊</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="mb-8 bg-jungle-yellow text-jungle-black animate-glow text-lg px-6 py-2">
            🚀 Global Marketing Services
          </Badge>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-8 animate-fade-in leading-tight">
            Marketing Services
            <span className="text-jungle-yellow block animate-float text-shadow">That Convert</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto mb-12 animate-fade-in leading-relaxed">
            From Delhi to the world, we deliver performance marketing, viral UGC, and 
            conversion-focused strategies that scale globally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in">
            <ThreeDButton size="lg" className="text-xl px-10 py-6 hover:scale-110 transition-all duration-300">
              <Link to="/contact" className="flex items-center">
                Start Your Project <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </ThreeDButton>
            <ThreeDButton variant="outline" size="lg" className="text-xl px-10 py-6 hover:scale-110 transition-all duration-300">
              <Link to="/portfolio" className="flex items-center">
                View Case Studies <Globe className="ml-3 h-6 w-6" />
              </Link>
            </ThreeDButton>
          </div>
        </div>
      </ParallaxSection>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-jungle-green/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-jungle-green text-white text-lg px-6 py-2">
              🎯 Our Core Services
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-jungle-black mb-8 leading-tight">
              Everything You Need to 
              <span className="text-jungle-green"> Dominate Globally</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Full-service digital marketing and branding solutions designed to scale 
              your business from Delhi to every corner of the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ThreeDCard 
                key={index} 
                className="h-full bg-white/95 hover:bg-white hover:scale-105 transition-all duration-500 group border-l-4 border-l-jungle-green relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 animate-float group-hover:scale-125 transition-transform duration-300">
                    {service.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-jungle-green mb-3">{service.title}</h3>
                  <div className="text-lg font-semibold text-jungle-yellow mb-4">{service.price}</div>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-jungle-green font-medium">
                      <CheckCircle className="mr-3 h-5 w-5 text-jungle-green" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <ThreeDButton size="sm" className="w-full mt-auto">
                  <Link to="/contact" className="flex items-center justify-center">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </ThreeDButton>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-jungle-yellow/10 rounded-full translate-y-48 translate-x-48"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-jungle-yellow text-jungle-black text-lg px-6 py-2">
              📦 Service Packages
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-jungle-black leading-tight">
              Choose Your 
              <span className="text-jungle-green">Growth Plan</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Flexible packages designed to grow with your business, from startup to enterprise scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {packages.map((pkg, index) => (
              <ThreeDCard 
                key={index}
                className={`h-full ${pkg.popular ? 'bg-jungle-green text-white scale-105' : 'bg-gray-50 hover:bg-white'} hover:scale-110 transition-all duration-500 group border-2 ${pkg.popular ? 'border-jungle-yellow' : 'border-transparent hover:border-jungle-green'} relative overflow-hidden`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-jungle-yellow text-jungle-black text-sm px-4 py-1">
                      🔥 Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className={`text-3xl font-bold mb-3 ${pkg.popular ? 'text-jungle-yellow' : 'text-jungle-green'}`}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className={`text-5xl font-bold ${pkg.popular ? 'text-white' : 'text-jungle-green'}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-xl ml-1 ${pkg.popular ? 'text-gray-200' : 'text-gray-500'}`}>
                      {pkg.period}
                    </span>
                  </div>
                  <p className={`${pkg.popular ? 'text-gray-200' : 'text-gray-600'} text-lg`}>
                    {pkg.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center ${pkg.popular ? 'text-white' : 'text-gray-600'}`}>
                      <CheckCircle className={`mr-3 h-5 w-5 ${pkg.popular ? 'text-jungle-yellow' : 'text-jungle-green'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <ThreeDButton 
                  variant={pkg.popular ? 'secondary' : 'primary'} 
                  size="lg" 
                  className="w-full mt-auto"
                >
                  <Link to="/contact" className="flex items-center justify-center">
                    Choose Plan <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </ThreeDButton>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            Ready to Dominate 
            <span className="text-jungle-yellow block animate-float">Global Markets?</span>
          </h2>
          <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
            Let's create a custom strategy that scales your business globally. 
            Fast execution, measurable results, Delhi-powered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <ThreeDButton size="lg" className="text-xl px-10 py-6 hover:scale-110 transition-all duration-300">
              <Link to="/contact" className="flex items-center">
                Get Custom Strategy <Target className="ml-3 h-6 w-6" />
              </Link>
            </ThreeDButton>
            <ThreeDButton variant="outline" size="lg" className="text-xl px-10 py-6 hover:scale-110 transition-all duration-300">
              <a href="tel:+918800362887" className="flex items-center">
                Call Delhi: +91 88003 62887 <Globe className="ml-3 h-6 w-6" />
              </a>
            </ThreeDButton>
          </div>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Services;
