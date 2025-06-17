
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, User, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Digital Marketing Tips', 'SEO', 'Social Media', 'Branding Insights', 'PPC', 'Web Development'];

  const blogPosts = [
    {
      title: 'How to Stand Out in the Digital Jungle: 10 Branding Tips for 2024',
      excerpt: 'Discover the secrets to creating a memorable brand that roars above the competition in today\'s crowded digital landscape.',
      category: 'Branding Insights',
      author: 'Arjun Sharma',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      featured: true
    },
    {
      title: 'Top PPC Strategies for Mumbai Businesses in 2024',
      excerpt: 'Learn how local businesses in Mumbai can leverage PPC advertising to generate more leads and increase revenue.',
      category: 'PPC',
      author: 'Sneha Patel',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      title: 'SEO Trends That Will Dominate 2024: A Complete Guide',
      excerpt: 'Stay ahead of the SEO game with these emerging trends and strategies that will shape search rankings this year.',
      category: 'SEO',
      author: 'Karan Gupta',
      date: '2024-01-08',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop'
    },
    {
      title: 'Social Media Marketing: Building Your Pack in the Digital Wild',
      excerpt: 'Transform your social media presence from a lone wolf to a pack leader with these proven community-building strategies.',
      category: 'Social Media',
      author: 'Arjun Sharma',
      date: '2024-01-05',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop'
    },
    {
      title: 'The Mumbai Startup\'s Guide to Digital Marketing Success',
      excerpt: 'Essential digital marketing strategies for startups in Mumbai to compete with established brands on a limited budget.',
      category: 'Digital Marketing Tips',
      author: 'Sneha Patel',
      date: '2024-01-03',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop'
    },
    {
      title: 'Website Conversion Optimization: Turn Visitors into Customers',
      excerpt: 'Learn the art and science of conversion optimization to dramatically increase your website\'s performance.',
      category: 'Web Development',
      author: 'Karan Gupta',
      date: '2023-12-28',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Enhanced Hero Section with 3D Effects */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-jungle-green via-emerald-800 to-teal-900 text-white overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-jungle-yellow/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-jungle-yellow/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="jungle-pattern opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
              <BookOpen className="w-5 h-5 text-jungle-yellow" />
              <span className="text-sm font-medium">Digital Marketing Insights</span>
            </div>

            {/* Main Heading with Gradient Text */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Jungle 
              <span className="bg-gradient-to-r from-jungle-yellow via-amber-300 to-yellow-200 bg-clip-text text-transparent animate-glow">
                {' '}Wisdom
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-normal text-gray-200">Blog</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
              Navigate the digital jungle with expert insights, cutting-edge strategies, 
              and actionable tips from Mumbai's freshest digital marketing minds.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button 
                size="lg" 
                className="bg-jungle-yellow text-jungle-black hover:bg-jungle-yellow/90 font-semibold px-8 py-4 rounded-full btn-3d group"
              >
                Explore Latest Posts
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 rounded-full"
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Enhanced Search and Filter Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 card-3d">
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              {/* Enhanced Search */}
              <div className="w-full lg:w-96 relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 group-focus-within:text-jungle-green transition-colors" />
                </div>
                <Input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-jungle-green focus:ring-jungle-green/20 text-lg bg-white/50 backdrop-blur-sm transition-all duration-300"
                />
              </div>

              {/* Enhanced Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    className={`${
                      activeCategory === category 
                        ? 'bg-jungle-green hover:bg-jungle-green/90 text-white shadow-lg btn-3d' 
                        : 'border-2 border-jungle-green/30 text-jungle-green hover:bg-jungle-green hover:text-white bg-white/50 backdrop-blur-sm'
                    } px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Article */}
      {featuredPost && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-jungle-green/5 to-transparent rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-jungle-yellow/10 backdrop-blur-sm rounded-full px-6 py-3 mb-4">
                <TrendingUp className="w-5 h-5 text-jungle-green" />
                <span className="text-jungle-green font-semibold">Featured Article</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-jungle-black">
                Editor's Pick
              </h2>
            </div>

            <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl card-3d group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <Badge className="bg-jungle-green/10 text-jungle-green border-jungle-green/20 px-4 py-2 rounded-full">
                      {featuredPost.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-jungle-black mb-6 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-jungle-green/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-jungle-green" />
                      </div>
                      <div>
                        <p className="font-semibold text-jungle-black">{featuredPost.author}</p>
                        <p className="text-sm text-gray-500">Author</p>
                      </div>
                    </div>
                    
                    <Button 
                      asChild 
                      className="bg-jungle-green hover:bg-jungle-green/90 text-white px-8 py-3 rounded-full btn-3d group"
                    >
                      <Link to={`/blog/${featuredPost.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Read Article
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Enhanced Blog Grid */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-4">
              Latest <span className="text-jungle-green">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, strategies, and insights in digital marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card key={index} className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl card-3d">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 backdrop-blur-sm text-jungle-green border-0 shadow-lg">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-jungle-green text-xl leading-tight group-hover:text-jungle-green/80 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-jungle-green/10 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-jungle-green" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>
                    
                    <Button 
                      asChild 
                      variant="ghost" 
                      size="sm"
                      className="text-jungle-green hover:bg-jungle-green hover:text-white rounded-full px-4 py-2 group/btn"
                    >
                      <Link to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {regularPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No articles found</h3>
              <p className="text-gray-500 mb-8">Try adjusting your search or filter criteria</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                }}
                className="bg-jungle-green hover:bg-jungle-green/90 text-white px-8 py-3 rounded-full"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-jungle-green via-emerald-800 to-teal-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="jungle-pattern opacity-10"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-jungle-yellow/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <div className="w-16 h-16 bg-jungle-yellow/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <BookOpen className="w-8 h-8 text-jungle-yellow" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't Miss Out on 
              <span className="text-jungle-yellow"> Jungle Wisdom!</span>
            </h2>
            
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Subscribe to our newsletter and get the latest digital marketing insights, 
              expert tips, and exclusive strategies delivered straight to your inbox every week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 focus:border-jungle-yellow rounded-full px-6 py-4 text-lg backdrop-blur-sm"
              />
              <Button 
                className="bg-jungle-yellow text-jungle-black hover:bg-jungle-yellow/90 whitespace-nowrap px-8 py-4 rounded-full font-semibold btn-3d"
              >
                Subscribe Now 🚀
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-jungle-yellow rounded-full"></div>
                <span>1000+ subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-jungle-yellow rounded-full"></div>
                <span>Weekly insights</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-jungle-yellow rounded-full"></div>
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-4">
              Explore by 
              <span className="text-jungle-green">Category</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find exactly what you're looking for with our organized content categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.slice(1).map((category, index) => {
              const postCount = blogPosts.filter(post => post.category === category).length;
              const icons = {
                'SEO': '🌿',
                'Social Media': '🐅',
                'PPC': '🎯',
                'Branding Insights': '🦁',
                'Web Development': '🕸️',
                'Digital Marketing Tips': '💡'
              };
              
              return (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-xl transition-all duration-500 cursor-pointer card-3d group bg-white/80 backdrop-blur-sm border-0 rounded-2xl p-6"
                  onClick={() => setActiveCategory(category)}
                >
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-jungle-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-jungle-green/20 transition-colors">
                      <span className="text-3xl">{icons[category as keyof typeof icons]}</span>
                    </div>
                    <h3 className="font-bold text-jungle-green text-sm mb-2 group-hover:text-jungle-green/80 transition-colors">
                      {category}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {postCount} article{postCount !== 1 ? 's' : ''}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
