
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Grow organically in the search jungle with expert SEO strategies that increase visibility and drive qualified traffic.',
      icon: '🌿',
      features: ['Keyword Research & Strategy', 'On-Page Optimization', 'Technical SEO Audits', 'Link Building', 'Local SEO', 'SEO Analytics & Reporting'],
      benefits: 'Increase organic traffic by 150%+ and improve search rankings for target keywords.'
    },
    {
      title: 'Social Media Marketing',
      description: 'Roar on social platforms with engaging content, community building, and strategic social media campaigns.',
      icon: '🐅',
      features: ['Social Media Strategy', 'Content Creation', 'Community Management', 'Influencer Partnerships', 'Social Media Advertising', 'Analytics & Insights'],
      benefits: 'Build a loyal community and increase brand engagement by 200%+ across all platforms.'
    },
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Hunt for leads with precision-targeted advertising campaigns across Google, Facebook, and other platforms.',
      icon: '🎯',
      features: ['Google Ads Management', 'Facebook & Instagram Ads', 'LinkedIn Advertising', 'Campaign Optimization', 'Landing Page Design', 'Conversion Tracking'],
      benefits: 'Generate 300+ qualified leads monthly with optimized ad spend and high conversion rates.'
    },
    {
      title: 'Brand Identity & Design',
      description: 'Create a unique brand that stands tall in the digital wilderness with compelling visual identity and messaging.',
      icon: '🦁',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity Systems', 'Brand Messaging', 'Marketing Collaterals', 'Brand Strategy'],
      benefits: 'Establish a memorable brand presence that increases recognition and customer loyalty.'
    },
    {
      title: 'Web Development',
      description: 'Build digital territories that convert visitors into customers with responsive, fast, and user-friendly websites.',
      icon: '🕸️',
      features: ['Responsive Web Design', 'E-commerce Development', 'CMS Integration', 'Website Optimization', 'Mobile App Development', 'Maintenance & Support'],
      benefits: 'Increase website conversions by 80%+ with optimized user experience and performance.'
    },
    {
      title: 'Creative Services',
      description: 'Unleash creative visuals that capture your wild brand essence through compelling content and graphic design.',
      icon: '🎨',
      features: ['Graphic Design', 'Video Production', 'Content Writing', 'Photography', 'Infographic Design', 'Marketing Materials'],
      benefits: 'Create engaging content that increases brand engagement and drives customer action.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-jungle-green to-jungle-green/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 jungle-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-jungle-yellow text-jungle-black">
            🌿 Full-Service Digital Marketing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Services That Make Your Brand 
            <span className="text-jungle-yellow"> Roar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            From SEO to social media, we offer comprehensive digital marketing solutions 
            tailored to help your brand thrive in the competitive digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="pb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-5xl animate-float">{service.icon}</div>
                        <div>
                          <CardTitle className="text-2xl text-jungle-green mb-2">{service.title}</CardTitle>
                          <Badge variant="secondary">Jungle Specialty</Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg">{service.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-jungle-black mb-3">What We Do:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-jungle-green rounded-full"></div>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-jungle-yellow/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-jungle-green mb-2">Results You Can Expect:</h4>
                        <p className="text-sm text-gray-700">{service.benefits}</p>
                      </div>
                      <Button 
                        asChild 
                        className="w-full bg-jungle-green hover:bg-jungle-green/90 text-white"
                      >
                        <Link to="/contact">Get Started with {service.title.split(' ')[0]} 🚀</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-square bg-gradient-to-br from-jungle-green/20 to-jungle-yellow/20 rounded-2xl flex items-center justify-center">
                    <div className="text-8xl opacity-50">{service.icon}</div>
                  </div>
                  <div className="leaf-divider absolute -bottom-4 left-0 right-0"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-4">
              Our Proven 
              <span className="text-jungle-green">Growth Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your digital marketing success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We dive deep into your business, audience, and competition' },
              { step: '02', title: 'Strategy', description: 'We create a tailored digital marketing roadmap for growth' },
              { step: '03', title: 'Execute', description: 'We implement campaigns with precision and creativity' },
              { step: '04', title: 'Optimize', description: 'We continuously refine based on data and performance' }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-jungle-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-jungle-black mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-jungle-green/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-jungle-green text-white relative overflow-hidden">
        <div className="absolute inset-0 jungle-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Industries We Serve in the Digital Jungle
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[
              '🛍️ E-commerce',
              '💻 Technology',
              '🏨 Hospitality',
              '🏪 Retail',
              '🏥 Healthcare',
              '📚 Education',
              '🏦 Finance',
              '🍽️ Food & Beverage',
              '🏗️ Real Estate',
              '💄 Beauty & Fashion'
            ].map((industry, index) => (
              <div key={index} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <span className="text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>
          <p className="text-xl text-gray-200 mb-8">
            From startups to enterprises, we've helped businesses across diverse industries 
            achieve their digital marketing goals.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-jungle-yellow text-jungle-black hover:bg-jungle-yellow/90"
          >
            <Link to="/portfolio">See Our Work</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-jungle-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-6">
            Ready to Dominate Your Digital Territory?
          </h2>
          <p className="text-xl text-jungle-black/80 mb-8">
            Let's discuss which services will help your brand thrive in the digital jungle. 
            Book your free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-jungle-green hover:bg-jungle-green/90 text-white text-lg px-8 py-4"
            >
              <Link to="/contact">Get Free Strategy Session 🌿</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-jungle-black text-jungle-black hover:bg-jungle-black hover:text-jungle-yellow text-lg px-8 py-4"
            >
              <Link to="/portfolio">Download Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
