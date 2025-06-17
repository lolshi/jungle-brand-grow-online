
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import ParallaxSection from '@/components/ParallaxSection';
import ThreeDButton from '@/components/ThreeDButton';
import ThreeDCard from '@/components/ThreeDCard';

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
      {/* Hero Section with Parallax */}
      <ParallaxSection 
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-jungle-green via-jungle-green/90 to-jungle-green/80 text-white overflow-hidden"
        speed={0.5}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-jungle-yellow text-jungle-black hover:bg-jungle-yellow/90 shadow-lg">
              🌿 Fresh & Growing Fast in Mumbai
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
              Thrive in the 
              <span className="text-jungle-yellow block md:inline"> Digital Jungle</span>
              <br />with Expert Marketing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              We Grow Your Brand with tailored digital marketing strategies that deliver measurable results. 
              From startups to enterprises, we help businesses of all sizes dominate their digital territory.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <ThreeDButton 
                variant="secondary" 
                size="lg"
                asChild
              >
                <Link to="/contact">Get Free Consultation 🚀</Link>
              </ThreeDButton>
              <ThreeDButton 
                variant="outline" 
                size="lg"
                asChild
              >
                <Link to="/portfolio">Download Case Study 📊</Link>
              </ThreeDButton>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-jungle-yellow rounded-full flex justify-center shadow-lg">
            <div className="w-1 h-3 bg-jungle-yellow rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Floating jungle elements */}
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">🌿</div>
        <div className="absolute top-40 right-20 text-4xl animate-float opacity-30" style={{animationDelay: '1s'}}>🦎</div>
        <div className="absolute bottom-32 left-20 text-5xl animate-float opacity-25" style={{animationDelay: '2s'}}>🍃</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-float opacity-20" style={{animationDelay: '0.5s'}}>🐸</div>
      </ParallaxSection>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="leaf-divider absolute top-0 left-0 right-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-4">
              Services That Make You 
              <span className="text-jungle-green"> Roar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From SEO to social media, we offer comprehensive digital marketing solutions 
              tailored to help your brand thrive in the competitive digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ThreeDCard 
                key={index}
                title={service.title}
                icon={service.icon}
                className="bg-white/95 hover:bg-white border-0"
              >
                <p className="text-gray-600 text-center mb-4">{service.description}</p>
                <ThreeDButton 
                  variant="outline" 
                  className="w-full"
                  asChild
                >
                  <Link to="/services">Learn More</Link>
                </ThreeDButton>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-20 bg-white relative">
        <div className="leaf-divider absolute top-0 left-0 right-0 transform rotate-180"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-4">
              Success Stories from the 
              <span className="text-jungle-green">Jungle</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how we've helped businesses across 10+ industries grow their digital presence 
              with creative strategies and measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <ThreeDCard key={index} className="overflow-hidden bg-white">
                <div className="aspect-video bg-gradient-to-br from-jungle-green/20 to-jungle-yellow/20 flex items-center justify-center mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                <h3 className="font-bold text-jungle-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </ThreeDCard>
            ))}
          </div>
          <div className="text-center">
            <ThreeDButton 
              variant="primary" 
              size="lg"
              asChild
            >
              <Link to="/portfolio">View All Case Studies</Link>
            </ThreeDButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <ParallaxSection 
        className="py-20 bg-jungle-green text-white relative overflow-hidden"
        speed={0.3}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow">
              What Our Pack Says About Us
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from the brands we've helped grow in the digital jungle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ThreeDCard 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15"
                hover3D={true}
              >
                <p className="text-lg mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-semibold text-jungle-yellow">{testimonial.name}</p>
                  <p className="text-sm text-gray-300">{testimonial.company}</p>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
        
        {/* Floating testimonial elements */}
        <div className="absolute top-10 right-10 text-4xl animate-float opacity-10">💬</div>
        <div className="absolute bottom-10 left-10 text-3xl animate-float opacity-15" style={{animationDelay: '1.5s'}}>⭐</div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-20 bg-jungle-yellow relative overflow-hidden">
        <div className="jungle-pattern absolute inset-0 opacity-5"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-6">
            Ready to Grow Your Brand in the Digital Jungle?
          </h2>
          <p className="text-xl text-jungle-black/80 mb-8 leading-relaxed">
            Let's discuss how we can help your business thrive with tailored digital marketing strategies. 
            Book your free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <ThreeDButton 
              variant="primary" 
              size="lg"
              asChild
            >
              <Link to="/contact">Start Your Journey 🌿</Link>
            </ThreeDButton>
            <ThreeDButton 
              variant="outline" 
              size="lg"
              className="border-jungle-black text-jungle-black hover:bg-jungle-black hover:text-jungle-yellow"
              asChild
            >
              <Link to="/portfolio">See Our Work</Link>
            </ThreeDButton>
          </div>
        </div>
        
        {/* Floating CTA elements */}
        <div className="absolute top-20 left-10 text-5xl animate-float opacity-20">🚀</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-float opacity-25" style={{animationDelay: '1s'}}>📈</div>
      </section>
    </Layout>
  );
};

export default Index;
