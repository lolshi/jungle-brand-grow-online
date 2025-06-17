
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'SEO', 'PPC', 'Social Media', 'Branding', 'Web Development'];

  const caseStudies = [
    {
      title: 'TechStart E-commerce Growth',
      description: 'Transformed a struggling e-commerce startup into a market leader with 150% traffic increase and 80% conversion boost.',
      category: 'SEO',
      results: ['150% Traffic Increase', '80% Conversion Boost', '300% Revenue Growth'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      client: 'TechStart Solutions',
      industry: 'E-commerce Technology'
    },
    {
      title: 'Mumbai Restaurant Chain Branding',
      description: 'Built a complete brand identity that increased customer engagement by 200% and expanded to 5 new locations.',
      category: 'Branding',
      results: ['200% Engagement Increase', '5 New Locations', '45% More Bookings'],
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      client: 'Mumbai Eats',
      industry: 'Food & Beverage'
    },
    {
      title: 'Hospitality Group PPC Success',
      description: 'Generated 300+ qualified leads monthly through strategic PPC campaigns with 40% lower cost per acquisition.',
      category: 'PPC',
      results: ['300+ Monthly Leads', '40% Lower CPA', '25% Higher Booking Rate'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      client: 'Heritage Hotels',
      industry: 'Hospitality'
    },
    {
      title: 'Fashion Brand Social Media Explosion',
      description: 'Grew Instagram following from 5K to 100K+ with viral content strategy and influencer partnerships.',
      category: 'Social Media',
      results: ['95K+ New Followers', '500% Engagement Growth', '60% Sales Increase'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      client: 'Urban Style Co.',
      industry: 'Fashion & Retail'
    },
    {
      title: 'FinTech Startup Complete Website',
      description: 'Designed and developed a conversion-optimized website that increased user sign-ups by 120%.',
      category: 'Web Development',
      results: ['120% More Sign-ups', '65% Lower Bounce Rate', '90% Mobile Optimization'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      client: 'PayEasy Solutions',
      industry: 'Financial Technology'
    },
    {
      title: 'Healthcare SEO Transformation',
      description: 'Improved local search visibility for a healthcare clinic, resulting in 250% more appointment bookings.',
      category: 'SEO',
      results: ['250% More Bookings', '#1 Local Rankings', '180% Organic Traffic'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      client: 'LifeCare Clinic',
      industry: 'Healthcare'
    }
  ];

  const filteredCaseStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-jungle-green to-jungle-green/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 jungle-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-jungle-yellow text-jungle-black">
            🌿 Success Stories from the Jungle
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Portfolio of 
            <span className="text-jungle-yellow"> Wild Success</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Discover how we've helped businesses across 10+ industries grow their digital presence 
            with creative strategies and measurable results.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`${
                  activeFilter === filter 
                    ? 'bg-jungle-green hover:bg-jungle-green/90 text-white' 
                    : 'border-jungle-green text-jungle-green hover:bg-jungle-green hover:text-white'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{study.category}</Badge>
                    <Badge variant="outline">{study.industry}</Badge>
                  </div>
                  <CardTitle className="text-jungle-green text-xl">{study.title}</CardTitle>
                  <p className="text-sm text-gray-500">{study.client}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{study.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-jungle-black">Key Results:</h4>
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-jungle-green rounded-full"></div>
                        <span className="text-sm text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-jungle-green text-jungle-green hover:bg-jungle-green hover:text-white"
                  >
                    <a href="#" download>Download Case Study 📊</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20 bg-jungle-green text-white relative overflow-hidden">
        <div className="absolute inset-0 jungle-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Results That Speak Volumes
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our data-driven approach consistently delivers impressive results across all industries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150%+', label: 'Average Traffic Growth' },
              { number: '80%+', label: 'Average Conversion Increase' },
              { number: '300%+', label: 'Average Revenue Growth' },
              { number: '50+', label: 'Successful Projects' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-jungle-yellow mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-4">
              What Our Clients Say About Our 
              <span className="text-jungle-green">Wild Success</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The Brand Jungle Network didn't just increase our traffic by 150% - they transformed our entire digital presence. Our e-commerce sales have tripled!",
                author: "Priya Sharma",
                company: "TechStart Solutions",
                role: "CEO"
              },
              {
                quote: "Their branding work helped us expand from 1 to 6 locations in Mumbai. The new brand identity perfectly captures our restaurant's essence.",
                author: "Rahul Gupta",
                company: "Mumbai Eats",
                role: "Founder"
              },
              {
                quote: "300+ qualified leads monthly from their PPC campaigns. Their strategic approach has revolutionized our customer acquisition.",
                author: "Anita Patel",
                company: "Heritage Hotels",
                role: "Marketing Director"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg">
                <CardContent className="space-y-4">
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-jungle-green">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
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
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-jungle-black/80 mb-8">
            Let's discuss how we can achieve similar results for your brand. 
            Download our complete case study collection or book a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-jungle-green hover:bg-jungle-green/90 text-white text-lg px-8 py-4"
            >
              <Link to="/contact">Get Your Free Strategy Session 🌿</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-jungle-black text-jungle-black hover:bg-jungle-black hover:text-jungle-yellow text-lg px-8 py-4"
            >
              <a href="#" download>Download All Case Studies 📊</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
