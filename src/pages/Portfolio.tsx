
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import ThreeDCard from '@/components/ThreeDCard';
import ThreeDButton from '@/components/ThreeDButton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Download, ExternalLink, TrendingUp, Award, Users, Target } from 'lucide-react';

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
      industry: 'E-commerce Technology',
      duration: '6 months',
      testimonial: 'The Brand Jungle Network transformed our digital presence completely!'
    },
    {
      title: 'Mumbai Restaurant Chain Branding',
      description: 'Built a complete brand identity that increased customer engagement by 200% and expanded to 5 new locations.',
      category: 'Branding',
      results: ['200% Engagement Increase', '5 New Locations', '45% More Bookings'],
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      client: 'Mumbai Eats',
      industry: 'Food & Beverage',
      duration: '4 months',
      testimonial: 'Our brand identity perfectly captures our restaurant essence now.'
    },
    {
      title: 'Hospitality Group PPC Success',
      description: 'Generated 300+ qualified leads monthly through strategic PPC campaigns with 40% lower cost per acquisition.',
      category: 'PPC',
      results: ['300+ Monthly Leads', '40% Lower CPA', '25% Higher Booking Rate'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      client: 'Heritage Hotels',
      industry: 'Hospitality',
      duration: '8 months',
      testimonial: 'Their PPC strategy revolutionized our customer acquisition.'
    },
    {
      title: 'Fashion Brand Social Media Explosion',
      description: 'Grew Instagram following from 5K to 100K+ with viral content strategy and influencer partnerships.',
      category: 'Social Media',
      results: ['95K+ New Followers', '500% Engagement Growth', '60% Sales Increase'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      client: 'Urban Style Co.',
      industry: 'Fashion & Retail',
      duration: '5 months',
      testimonial: 'From 5K to 100K followers - absolutely incredible results!'
    },
    {
      title: 'FinTech Startup Complete Website',
      description: 'Designed and developed a conversion-optimized website that increased user sign-ups by 120%.',
      category: 'Web Development',
      results: ['120% More Sign-ups', '65% Lower Bounce Rate', '90% Mobile Optimization'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      client: 'PayEasy Solutions',
      industry: 'Financial Technology',
      duration: '3 months',
      testimonial: 'The website exceeded all our expectations and goals.'
    },
    {
      title: 'Healthcare SEO Transformation',
      description: 'Improved local search visibility for a healthcare clinic, resulting in 250% more appointment bookings.',
      category: 'SEO',
      results: ['250% More Bookings', '#1 Local Rankings', '180% Organic Traffic'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      client: 'LifeCare Clinic',
      industry: 'Healthcare',
      duration: '7 months',
      testimonial: 'We are now the top healthcare provider in local search!'
    }
  ];

  const filteredCaseStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  const achievements = [
    { icon: TrendingUp, number: '150%+', label: 'Average Traffic Growth', color: 'text-green-500' },
    { icon: Award, number: '80%+', label: 'Average Conversion Increase', color: 'text-blue-500' },
    { icon: Users, number: '50+', label: 'Happy Clients', color: 'text-purple-500' },
    { icon: Target, number: '300%+', label: 'Average Revenue Growth', color: 'text-orange-500' }
  ];

  return (
    <Layout>
      {/* Hero Section with 3D Effects */}
      <section className="relative py-32 bg-gradient-to-br from-jungle-green via-jungle-green/95 to-jungle-green/90 text-white overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-jungle-yellow/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-jungle-yellow/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-jungle-yellow/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-jungle-yellow/30">
            <Award className="w-5 h-5 text-jungle-yellow animate-pulse" />
            <span className="text-jungle-yellow font-semibold">Award-Winning Digital Success Stories</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Our Portfolio of 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-jungle-yellow via-yellow-300 to-jungle-yellow animate-glow">
              Wild Success
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover how we've helped businesses across 10+ industries grow their digital presence 
            with creative strategies and measurable results that speak volumes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <ThreeDButton variant="secondary" size="lg" className="text-lg px-8 py-4">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Live Projects
            </ThreeDButton>
            <ThreeDButton variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-white/30 text-white hover:bg-white hover:text-jungle-green">
              <Download className="w-5 h-5 mr-2" />
              Download Case Studies
            </ThreeDButton>
          </div>
        </div>
      </section>

      {/* Interactive Filter Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-jungle-black mb-4">Filter by Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our diverse range of successful projects across different digital marketing disciplines</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <ThreeDButton
                key={filter}
                variant={activeFilter === filter ? "primary" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'shadow-lg shadow-jungle-green/30' 
                    : 'hover:shadow-md hover:shadow-jungle-green/20'
                }`}
              >
                {filter}
                {activeFilter === filter && (
                  <div className="ml-2 w-2 h-2 bg-jungle-yellow rounded-full animate-pulse"></div>
                )}
              </ThreeDButton>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Case Studies Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-jungle-green/10 text-jungle-green border-jungle-green/20">
              {filteredCaseStudies.length} Success Stories
            </Badge>
            <h2 className="text-4xl font-bold text-jungle-black mb-4">
              Real Results, Real Impact
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <ThreeDCard key={index} hover3D={true} className="group">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-jungle-black backdrop-blur-sm">
                      {study.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{study.duration}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-jungle-green mb-2 group-hover:text-jungle-green/80 transition-colors">
                        {study.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge variant="outline" className="text-xs">{study.client}</Badge>
                        <Badge variant="outline" className="text-xs">{study.industry}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">{study.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-jungle-black flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-jungle-green" />
                      Key Results:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-3 p-2 bg-gradient-to-r from-jungle-green/5 to-transparent rounded-lg">
                          <div className="w-2 h-2 bg-jungle-green rounded-full animate-pulse"></div>
                          <span className="text-sm text-gray-700 font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-jungle-yellow">
                    <p className="text-sm italic text-gray-600">"{study.testimonial}"</p>
                    <p className="text-xs text-jungle-green font-semibold mt-2">- {study.client}</p>
                  </div>
                  
                  <ThreeDButton 
                    variant="outline" 
                    className="w-full group-hover:bg-jungle-green group-hover:text-white group-hover:border-jungle-green transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Case Study
                  </ThreeDButton>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Results Overview with 3D Cards */}
      <section className="py-24 bg-gradient-to-br from-jungle-green via-jungle-green/95 to-jungle-green text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-jungle-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-jungle-yellow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-jungle-yellow/20 text-jungle-yellow border-jungle-yellow/30 backdrop-blur-sm">
              📊 Data-Driven Success
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Results That Speak
              <span className="text-jungle-yellow block">Volumes</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Our strategic approach consistently delivers impressive results across all industries and project types
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <ThreeDCard key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center group">
                <div className={`${achievement.color} mb-4 flex justify-center`}>
                  <achievement.icon className="w-12 h-12 animate-float" style={{ animationDelay: `${index * 0.5}s` }} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-jungle-yellow mb-3 group-hover:scale-110 transition-transform duration-300">
                  {achievement.number}
                </div>
                <div className="text-gray-200 font-medium text-sm md:text-base">
                  {achievement.label}
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Client Testimonials Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-jungle-green/10 text-jungle-green border-jungle-green/20">
              💬 Client Love
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-jungle-black mb-6">
              What Our Clients Say About Our 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-jungle-green to-jungle-green/70">
                Wild Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear directly from the businesses we've transformed
            </p>
          </div>
          
          <Carousel className="max-w-6xl mx-auto">
            <CarouselContent>
              {[
                {
                  quote: "The Brand Jungle Network didn't just increase our traffic by 150% - they transformed our entire digital presence. Our e-commerce sales have tripled and we couldn't be happier!",
                  author: "Priya Sharma",
                  company: "TechStart Solutions",
                  role: "CEO",
                  avatar: "🚀"
                },
                {
                  quote: "Their branding work helped us expand from 1 to 6 locations in Mumbai. The new brand identity perfectly captures our restaurant's essence and attracts exactly the right customers.",
                  author: "Rahul Gupta",
                  company: "Mumbai Eats",
                  role: "Founder",
                  avatar: "🍽️"
                },
                {
                  quote: "300+ qualified leads monthly from their PPC campaigns. Their strategic approach has revolutionized our customer acquisition and dramatically improved our ROI.",
                  author: "Anita Patel",
                  company: "Heritage Hotels",
                  role: "Marketing Director",
                  avatar: "🏨"
                }
              ].map((testimonial, index) => (
                <CarouselItem key={index}>
                  <ThreeDCard className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gray-50 to-white border-0 shadow-xl">
                    <div className="text-6xl mb-6">{testimonial.avatar}</div>
                    <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-jungle-green to-jungle-green/80 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-jungle-green text-lg">{testimonial.author}</p>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </ThreeDCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-jungle-green text-jungle-green hover:bg-jungle-green hover:text-white" />
            <CarouselNext className="border-jungle-green text-jungle-green hover:bg-jungle-green hover:text-white" />
          </Carousel>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-jungle-yellow via-jungle-yellow/95 to-jungle-yellow relative overflow-hidden">
        <div className="absolute inset-0 jungle-pattern opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-jungle-green/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-jungle-green/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-jungle-green/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            <Target className="w-5 h-5 text-jungle-green" />
            <span className="text-jungle-green font-semibold">Ready to Join Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-jungle-black mb-8 leading-tight">
            Ready to Become Our 
            <span className="text-jungle-green">Next Success Story?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-jungle-black/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Let's discuss how we can achieve similar results for your brand. 
            Download our complete case study collection or book a free consultation to get started.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <ThreeDButton 
              asChild 
              variant="primary"
              size="lg" 
              className="text-lg px-10 py-6 shadow-xl shadow-jungle-green/30"
            >
              <Link to="/contact" className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Get Your Free Strategy Session
              </Link>
            </ThreeDButton>
            
            <ThreeDButton 
              asChild 
              variant="outline"
              size="lg" 
              className="text-lg px-10 py-6 border-2 border-jungle-black text-jungle-black hover:bg-jungle-black hover:text-jungle-yellow"
            >
              <a href="#" download className="flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download All Case Studies
              </a>
            </ThreeDButton>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-jungle-black/60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-jungle-green rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-jungle-green rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-sm font-medium">No Long-term Contracts</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-jungle-green rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-sm font-medium">Results Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
