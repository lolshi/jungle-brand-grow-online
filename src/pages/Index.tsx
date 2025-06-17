
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Index = () => {
  const services = [
    {
      title: 'SEO & Content',
      description: 'Grow organically in the search jungle with expert SEO strategies.',
      icon: '🌿'
    },
    {
      title: 'Social Media',
      description: 'Roar on social platforms with engaging content and community building.',
      icon: '🐅'
    },
    {
      title: 'PPC Advertising',
      description: 'Hunt for leads with precision-targeted advertising campaigns.',
      icon: '🎯'
    },
    {
      title: 'Brand Identity',
      description: 'Create a unique brand that stands tall in the digital wilderness.',
      icon: '🦁'
    },
    {
      title: 'Web Development',
      description: 'Build digital territories that convert visitors into customers.',
      icon: '🕸️'
    },
    {
      title: 'Creative Design',
      description: 'Unleash creative visuals that capture your wild brand essence.',
      icon: '🎨'
    }
  ];

  const portfolioItems = [
    {
      title: 'TechStart E-commerce',
      description: 'Drove 150% more traffic and 80% increase in conversions',
      category: 'SEO & Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop'
    },
    {
      title: 'Mumbai Restaurant Chain',
      description: 'Built brand identity that increased customer engagement by 200%',
      category: 'Branding & Social Media',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop'
    },
    {
      title: 'Hospitality Group',
      description: 'PPC campaigns that generated 300+ qualified leads monthly',
      category: 'PPC & Performance Marketing',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      company: 'TechStart Solutions',
      quote: 'The Brand Jungle Network transformed our online presence completely. Our traffic increased by 150% in just 3 months!'
    },
    {
      name: 'Rahul Gupta',
      company: 'Mumbai Eats',
      quote: 'Their creative approach to branding helped us stand out in Mumbai\'s competitive restaurant scene.'
    },
    {
      name: 'Anita Patel',
      company: 'Heritage Hotels',
      quote: 'Professional, creative, and results-driven. They truly understand how to grow brands in the digital jungle.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-jungle-green via-jungle-green/90 to-jungle-green/80 text-white overflow-hidden">
        <div className="absolute inset-0 jungle-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-jungle-yellow text-jungle-black hover:bg-jungle-yellow/90">
              🌿 Fresh & Growing Fast in Mumbai
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Thrive in the 
              <span className="text-jungle-yellow"> Digital Jungle</span>
              <br />with Expert Marketing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              We Grow Your Brand with tailored digital marketing strategies that deliver measurable results. 
              From startups to enterprises, we help businesses of all sizes dominate their digital territory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-jungle-yellow text-jungle-black hover:bg-jungle-yellow/90 text-lg px-8 py-4"
              >
                <Link to="/contact">Get Free Consultation 🚀</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-jungle-green text-lg px-8 py-4"
              >
                <Link to="/portfolio">Download Case Study 📊</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-4">
              Services That Make You 
              <span className="text-jungle-green"> Roar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From SEO to social media, we offer comprehensive digital marketing solutions 
              tailored to help your brand thrive in the competitive digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4 animate-float">{service.icon}</div>
                  <CardTitle className="text-jungle-green">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">{service.description}</p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-jungle-green text-jungle-green hover:bg-jungle-green hover:text-white"
                  >
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-4">
              Success Stories from the 
              <span className="text-jungle-green">Jungle</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses across 10+ industries grow their digital presence 
              with creative strategies and measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-jungle-green/20 to-jungle-yellow/20 flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                  <h3 className="font-bold text-jungle-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-jungle-green hover:bg-jungle-green/90 text-white"
            >
              <Link to="/portfolio">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-jungle-green text-white relative overflow-hidden">
        <div className="absolute inset-0 jungle-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Pack Says About Us
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the brands we've helped grow in the digital jungle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="font-semibold text-jungle-yellow">{testimonial.name}</p>
                    <p className="text-sm text-gray-300">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-jungle-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-6">
            Ready to Grow Your Brand in the Digital Jungle?
          </h2>
          <p className="text-xl text-jungle-black/80 mb-8">
            Let's discuss how we can help your business thrive with tailored digital marketing strategies. 
            Book your free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-jungle-green hover:bg-jungle-green/90 text-white text-lg px-8 py-4"
            >
              <Link to="/contact">Start Your Journey 🌿</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-jungle-black text-jungle-black hover:bg-jungle-black hover:text-jungle-yellow text-lg px-8 py-4"
            >
              <Link to="/portfolio">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
