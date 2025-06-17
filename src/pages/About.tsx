
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'Arjun Sharma',
      role: 'Founder & Creative Director',
      bio: 'With 8+ years in digital marketing, Arjun leads our creative vision and strategy development.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Sneha Patel',
      role: 'Head of Performance Marketing',
      bio: 'Sneha specializes in PPC and performance marketing, delivering measurable ROI for our clients.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c0763c69?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Karan Gupta',
      role: 'Lead Developer & SEO Specialist',
      bio: 'Karan combines technical expertise with SEO knowledge to build high-performing digital experiences.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    }
  ];

  const stats = [
    { number: '10+', label: 'Industries Served' },
    { number: '50+', label: 'Projects Completed' },
    { number: '200%', label: 'Average Growth' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-jungle-green to-jungle-green/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 jungle-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-jungle-yellow text-jungle-black">
            🌿 Based in Mumbai, Growing Globally
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We're The Brand Jungle Network
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            A fresh, full-service digital marketing and branding agency born in the heart of Mumbai. 
            We specialize in helping businesses of all sizes thrive in the competitive digital landscape 
            with creativity, strategy, and measurable results.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-6">
                Our Story: Born in the 
                <span className="text-jungle-green"> Mumbai Jungle</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The Brand Jungle Network was founded with a simple yet powerful vision: to help businesses 
                  navigate and thrive in the ever-evolving digital jungle. Based in Mumbai, the commercial 
                  capital of India, we understand the pulse of business and the challenges brands face in 
                  standing out online.
                </p>
                <p>
                  Our team combines creative passion with data-driven strategies, ensuring every campaign 
                  we create not only looks great but delivers measurable results. We believe that in the 
                  digital jungle, only the most adaptable and creative brands survive and thrive.
                </p>
                <p>
                  From startups taking their first steps into the digital world to established enterprises 
                  looking to expand their reach, we provide tailored solutions that grow with your business. 
                  We don't just create campaigns; we build digital ecosystems where your brand can flourish.
                </p>
              </div>
              <div className="mt-8">
                <Button 
                  asChild 
                  className="bg-jungle-green hover:bg-jungle-green/90 text-white"
                >
                  <Link to="/contact">Join Our Journey</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-jungle-green/20 to-jungle-yellow/20 rounded-2xl flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop" 
                  alt="Mumbai cityscape" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-jungle-yellow p-6 rounded-2xl shadow-lg">
                <p className="font-bold text-jungle-black text-2xl">Mumbai</p>
                <p className="text-jungle-black/80">Our Home Base</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-4">
              Fresh & Ready to 
              <span className="text-jungle-green">Grow</span>
            </h2>
            <p className="text-xl text-gray-600">
              We may be new, but we're already making a big impact
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-jungle-green mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-4">
              Meet Our 
              <span className="text-jungle-green">Pack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together expertise in marketing, design, technology, 
              and strategy to deliver exceptional results for your brand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-jungle-green">{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-jungle-green text-white relative overflow-hidden">
        <div className="absolute inset-0 jungle-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle className="text-jungle-yellow">Results-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                Every strategy we create is designed to deliver measurable results and ROI for your business.
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="text-4xl mb-4">💡</div>
                <CardTitle className="text-jungle-yellow">Creative Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                We blend creativity with technology to create unique solutions that make your brand stand out.
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="text-4xl mb-4">🤝</div>
                <CardTitle className="text-jungle-yellow">Partnership Approach</CardTitle>
              </CardHeader>
              <CardContent>
                We don't just work for you; we work with you as partners in your brand's growth journey.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-jungle-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-6">
            Ready to Grow Together?
          </h2>
          <p className="text-xl text-jungle-black/80 mb-8">
            Let's discuss how our fresh perspective and proven strategies can help your brand thrive 
            in the digital jungle.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-jungle-green hover:bg-jungle-green/90 text-white text-lg px-8 py-4"
          >
            <Link to="/contact">Let's Talk Growth 🌱</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
