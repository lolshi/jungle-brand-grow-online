
import Layout from '@/components/Layout';
import ThreeDCard from '@/components/ThreeDCard';
import ThreeDButton from '@/components/ThreeDButton';
import ParallaxSection from '@/components/ParallaxSection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Zap, Target, TrendingUp, Users, Globe, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'SEO & Content Marketing',
      description: 'Dominate search results and attract organic traffic with our comprehensive SEO strategies.',
      icon: '🔍',
      price: '₹25,000/month',
      features: [
        'Comprehensive SEO Audit',
        'Keyword Research & Strategy',
        'On-page & Technical SEO',
        'Content Creation & Optimization',
        'Link Building Campaigns',
        'Monthly Performance Reports'
      ],
      popular: false
    },
    {
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with your audience across all major platforms.',
      icon: '📱',
      price: '₹20,000/month',
      features: [
        'Social Media Strategy',
        'Content Creation & Scheduling',
        'Community Management',
        'Social Media Advertising',
        'Influencer Collaborations',
        'Analytics & Reporting'
      ],
      popular: true
    },
    {
      title: 'PPC Advertising',
      description: 'Get instant visibility and qualified leads with targeted pay-per-click campaigns.',
      icon: '🎯',
      price: '₹15,000/month + Ad Spend',
      features: [
        'Google Ads Management',
        'Facebook & Instagram Ads',
        'LinkedIn Advertising',
        'Landing Page Optimization',
        'Conversion Tracking',
        'A/B Testing & Optimization'
      ],
      popular: false
    },
    {
      title: 'Brand Identity & Design',
      description: 'Create a memorable brand that stands out in the competitive digital landscape.',
      icon: '🎨',
      price: '₹50,000 one-time',
      features: [
        'Logo Design & Brand Mark',
        'Brand Guidelines',
        'Visual Identity System',
        'Marketing Collateral',
        'Website Design Mockups',
        'Brand Asset Library'
      ],
      popular: false
    },
    {
      title: 'Web Development',
      description: 'Build fast, responsive websites that convert visitors into customers.',
      icon: '💻',
      price: '₹1,00,000+',
      features: [
        'Responsive Web Design',
        'E-commerce Development',
        'CMS Integration',
        'SEO-Friendly Structure',
        'Performance Optimization',
        'Ongoing Maintenance'
      ],
      popular: false
    },
    {
      title: 'Full Digital Package',
      description: 'Complete digital marketing solution with all services included.',
      icon: '🚀',
      price: '₹75,000/month',
      features: [
        'All Services Included',
        'Dedicated Account Manager',
        'Monthly Strategy Sessions',
        'Priority Support',
        'Custom Reporting Dashboard',
        'Quarterly Business Reviews'
      ],
      popular: true
    }
  ];

  const industries = [
    { name: 'E-commerce', icon: '🛒', color: 'bg-blue-500' },
    { name: 'Healthcare', icon: '🏥', color: 'bg-green-500' },
    { name: 'Real Estate', icon: '🏢', color: 'bg-purple-500' },
    { name: 'Education', icon: '🎓', color: 'bg-orange-500' },
    { name: 'Food & Beverage', icon: '🍽️', color: 'bg-red-500' },
    { name: 'Technology', icon: '💻', color: 'bg-indigo-500' },
    { name: 'Fashion', icon: '👗', color: 'bg-pink-500' },
    { name: 'Finance', icon: '💰', color: 'bg-yellow-500' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business, competition, and market to create a winning strategy.',
      icon: Target
    },
    {
      step: '02',
      title: 'Implementation',
      description: 'Our team executes the strategy with precision and creative excellence.',
      icon: Zap
    },
    {
      step: '03',
      title: 'Optimization',
      description: 'We continuously monitor and optimize for maximum ROI and growth.',
      icon: TrendingUp
    },
    {
      step: '04',
      title: 'Growth & Scale',
      description: 'Scale your success with advanced strategies and expanded reach.',
      icon: Award
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <ParallaxSection className="py-32 bg-gradient-to-br from-jungle-green via-jungle-green/90 to-jungle-green/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-jungle-yellow text-jungle-black animate-glow">
            🌿 Complete Digital Marketing Solutions
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Services That Make Your Brand 
            <span className="text-jungle-yellow block animate-float">Roar Online</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            From SEO to social media, we provide the complete digital ecosystem 
            your brand needs to thrive in the Mumbai market and beyond.
          </p>
          <ThreeDButton size="lg" className="text-lg px-8 py-4 animate-slide-in">
            <Link to="/contact">Get Custom Quote</Link>
          </ThreeDButton>
        </div>
      </ParallaxSection>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-jungle-black mb-6">
              Our Jungle of 
              <span className="text-jungle-green">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of digital marketing services, 
              each designed to help your brand grow and thrive online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ThreeDCard 
                key={index} 
                className={`h-full ${service.popular ? 'bg-jungle-green text-white' : 'bg-white'} relative overflow-hidden rustling-leaves`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-jungle-yellow text-jungle-black">
                      🔥 Popular
                    </Badge>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4 animate-float">{service.icon}</div>
                  <h3 className={`text-xl font-bold mb-2 ${service.popular ? 'text-jungle-yellow' : 'text-jungle-green'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm mb-4 ${service.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                  <div className={`text-2xl font-bold ${service.popular ? 'text-jungle-yellow' : 'text-jungle-green'}`}>
                    {service.price}
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center text-sm ${service.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                      <Check className={`mr-2 h-4 w-4 ${service.popular ? 'text-jungle-yellow' : 'text-jungle-green'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ThreeDButton 
                  variant={service.popular ? 'secondary' : 'primary'} 
                  className="w-full"
                >
                  <Link to="/contact">Get Started</Link>
                </ThreeDButton>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ParallaxSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-jungle-green text-white">
              🔄 Our Proven Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-jungle-black mb-6">
              How We Grow Your 
              <span className="text-jungle-green">Brand</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures every project delivers maximum results and ROI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <ThreeDCard key={index} className="text-center bg-white hover:bg-gray-50 rustling-leaves">
                <div className="text-4xl font-bold text-jungle-yellow mb-4">{step.step}</div>
                <step.icon className="h-12 w-12 text-jungle-green mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-bold text-jungle-black mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Industries Section */}
      <section className="py-20 bg-jungle-green text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-jungle-yellow text-jungle-black">
              🏭 Industries We Serve
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Expertise Across 
              <span className="text-jungle-yellow">Every Industry</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From startups to enterprises, we've helped businesses across Mumbai thrive online.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <ThreeDCard key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-center">
                <div className="text-3xl mb-3 animate-float">{industry.icon}</div>
                <h3 className="font-semibold text-jungle-yellow">{industry.name}</h3>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-jungle-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-jungle-black mb-6">
            Ready to Grow Your Brand?
          </h2>
          <p className="text-xl text-jungle-black/80 mb-8">
            Let's create a custom digital marketing strategy that fits your business goals and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ThreeDButton size="lg" className="text-lg px-8 py-4">
              <Link to="/contact">Get Free Consultation</Link>
            </ThreeDButton>
            <ThreeDButton variant="outline" size="lg" className="text-lg px-8 py-4">
              <Link to="/portfolio">View Case Studies</Link>
            </ThreeDButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
