
import Layout from '@/components/Layout';
import ThreeDCard from '@/components/ThreeDCard';
import ThreeDButton from '@/components/ThreeDButton';
import ParallaxSection from '@/components/ParallaxSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Globe, Target, Zap, Users, TrendingUp, Award, MapPin, Phone, Calendar } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Aniket',
      role: 'Founder & CEO',
      bio: 'The visionary misfit who escaped agency life to build a collective that actually delivers. Expert in strategic growth and global scaling.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      emoji: '🦁',
      skills: ['Strategic Growth', 'Global Scaling', 'Business Development', 'Team Leadership']
    },
    {
      name: 'Shivam',
      role: 'Head of Performance Marketing',
      bio: 'ROAS-obsessed performance nerd who turns ad spend into profit machines. Specializes in scaling campaigns globally.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      emoji: '🎯',
      skills: ['Performance Marketing', 'PPC Campaigns', 'ROAS Optimization', 'Analytics']
    },
    {
      name: 'Keshav',
      role: 'SEO & UGC Specialist',
      bio: 'Content killer and SEO wizard who makes brands go viral and rank #1. Master of organic growth and viral content creation.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
      emoji: '📱',
      skills: ['SEO Strategy', 'UGC Creation', 'Content Marketing', 'Viral Campaigns']
    }
  ];

  const stats = [
    { icon: Globe, number: 'Global', label: 'Reach Worldwide', color: 'text-jungle-green' },
    { icon: Users, number: '2-10', label: 'Expert Team', color: 'text-jungle-green' },
    { icon: TrendingUp, number: '400%+', label: 'Average ROAS', color: 'text-jungle-green' },
    { icon: Calendar, number: '2025', label: 'Founded', color: 'text-jungle-green' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Results-Driven',
      description: 'Every strategy we create is designed to deliver measurable results and ROI for your business.',
      gradient: 'from-jungle-green to-jungle-green/80'
    },
    {
      icon: '💡',
      title: 'Creative Innovation',
      description: 'We blend creativity with technology to create unique solutions that make your brand stand out.',
      gradient: 'from-jungle-yellow to-jungle-yellow/80'
    },
    {
      icon: '🤝',
      title: 'Partnership Approach',
      description: 'We don\'t just work for you; we work with you as partners in your brand\'s growth journey.',
      gradient: 'from-jungle-green to-jungle-yellow'
    },
    {
      icon: '⚡',
      title: 'Fast & Agile',
      description: 'No bloated retainers or snail-paced approvals. We move fast and deliver sharp results.',
      gradient: 'from-jungle-yellow to-jungle-green'
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Enhanced 3D Elements */}
      <ParallaxSection className="py-32 bg-gradient-to-br from-jungle-green via-jungle-green/90 to-jungle-green/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-30"></div>
        <div className="absolute top-10 left-10 animate-float">
          <div className="text-6xl">🌿</div>
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{animationDelay: '1s'}}>
          <div className="text-5xl">🦁</div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{animationDelay: '2s'}}>
          <div className="text-4xl">🎯</div>
        </div>
        <div className="absolute bottom-10 right-1/3 animate-float" style={{animationDelay: '1.5s'}}>
          <div className="text-5xl">📱</div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-jungle-yellow text-jungle-black animate-glow">
            🌍 Global Collective • Based in Delhi, India
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            We're The Brand Jungle
            <span className="text-jungle-yellow block animate-float"> Network</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 animate-fade-in">
            A collective of ex-agency misfits, performance nerds, and retention obsessives 
            who got tired of bloated retainers and snail-paced approvals. So we built something better.
          </p>
          <div className="flex items-center justify-center gap-6 text-lg animate-slide-in">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-jungle-yellow" />
              <span>Delhi, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-jungle-yellow" />
              <span>+91 88003 62887</span>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Enhanced Stats Section with 3D Cards */}
      <section className="py-20 bg-jungle-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="jungle-leaves-pattern"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-jungle-black mb-4">
              Built for 
              <span className="text-jungle-green"> Global Impact</span>
            </h2>
            <p className="text-xl text-jungle-black/80">
              From Delhi to the world, we're making brands roar
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ThreeDCard key={index} className="bg-white/95 hover:bg-white hover:scale-110 transition-all duration-300 text-center">
                <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4 animate-float`} />
                <div className="text-4xl font-bold text-jungle-green mb-2">{stat.number}</div>
                <div className="text-jungle-black font-medium">{stat.label}</div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section with 3D Elements */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jungle-green/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-jungle-yellow/10 rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-jungle-green text-white">
                🚀 Our Origin Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-jungle-black mb-6">
                Born in the 
                <span className="text-jungle-green"> Delhi Ecosystem</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  The Brand Jungle Network was founded in 2025 with a rebellion against the traditional agency model. 
                  Based in Delhi, the heart of India's digital revolution, we understand what it takes to make brands 
                  roar in the global marketplace.
                </p>
                <p>
                  We're not your typical company. We're a collective of ex-agency misfits who got tired of bloated 
                  retainers and snail-paced approvals. From viral UGC to ROAS-breaking ad funnels, we create marketing 
                  that's fast, sharp, and built to convert.
                </p>
                <p>
                  Whether you're a scrappy DTC startup or a scaling enterprise, we plug into your ecosystem and move 
                  like we're on your payroll (without the BS). We're a global team serving clients worldwide.
                </p>
              </div>
              <div className="mt-8">
                <ThreeDButton size="lg" className="hover:scale-105 transition-transform">
                  <Link to="/contact">Join Our Jungle 🦁</Link>
                </ThreeDButton>
              </div>
            </div>
            <div className="relative">
              <ThreeDCard className="aspect-square bg-gradient-to-br from-jungle-green/20 to-jungle-yellow/20 flex items-center justify-center hover:scale-105 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop" 
                  alt="Delhi cityscape representing our headquarters" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </ThreeDCard>
              <div className="absolute -bottom-6 -right-6 bg-jungle-yellow p-6 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
                <p className="font-bold text-jungle-black text-2xl">Delhi</p>
                <p className="text-jungle-black/80">Our Global HQ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Enhanced 3D Cards */}
      <ParallaxSection className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-jungle-green/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-jungle-yellow text-jungle-black">
              🎯 Meet The Misfits
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-jungle-black mb-6">
              The Collective Behind 
              <span className="text-jungle-green">Your Growth</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ex-agency experts who escaped corporate bureaucracy to build something that actually works. 
              Fast, sharp, and built for results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ThreeDCard 
                key={index} 
                className="h-full bg-white/95 hover:bg-white hover:scale-105 hover:rotate-1 transition-all duration-500 group"
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-jungle-green/20 group-hover:ring-jungle-green/50 transition-all duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 text-4xl animate-float group-hover:scale-125 transition-transform duration-300">
                      {member.emoji}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-jungle-green mb-2">{member.name}</h3>
                  <Badge className="mb-4 bg-jungle-yellow text-jungle-black">{member.role}</Badge>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="space-y-2">
                    {member.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-jungle-green">
                        <span className="mr-2">🌿</span> {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Values Section with Enhanced 3D Design */}
      <section className="py-20 bg-jungle-green text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-jungle-pattern opacity-20"></div>
        <div className="absolute top-10 right-10 animate-float">🌿</div>
        <div className="absolute bottom-10 left-10 animate-float" style={{animationDelay: '1.5s'}}>⚡</div>
        <div className="absolute top-1/2 left-1/4 animate-float" style={{animationDelay: '2.5s'}}>🎯</div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-jungle-yellow text-jungle-black">
              💡 Our Core Values
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We're not just another agency. We're a collective built on principles that actually matter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ThreeDCard 
                key={index} 
                className={`bg-gradient-to-br ${value.gradient} hover:scale-110 hover:-rotate-2 transition-all duration-500 group text-white border-0`}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 animate-float group-hover:scale-125 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{value.description}</p>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with 3D Elements */}
      <ParallaxSection className="py-20 bg-jungle-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="jungle-leaves-pattern"></div>
        </div>
        <div className="absolute top-10 left-10 animate-float">🦁</div>
        <div className="absolute top-20 right-20 animate-float" style={{animationDelay: '1s'}}>🌍</div>
        <div className="absolute bottom-10 left-1/3 animate-float" style={{animationDelay: '2s'}}>⚡</div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-jungle-black mb-6">
            Ready to Join the 
            <span className="text-jungle-green block animate-float">Jungle Revolution?</span>
          </h2>
          <p className="text-xl text-jungle-black/80 mb-8">
            Let's plug into your ecosystem and create marketing that converts. 
            Fast, sharp, and built for global scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ThreeDButton 
              size="lg" 
              className="text-lg px-8 py-4 hover:scale-110 transition-transform duration-300"
            >
              <Link to="/contact">Start Your Growth Journey 🚀</Link>
            </ThreeDButton>
            <ThreeDButton 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 hover:scale-110 transition-transform duration-300"
            >
              <a href="tel:+918800362887">Call: +91 88003 62887</a>
            </ThreeDButton>
          </div>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default About;
