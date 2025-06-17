
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

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
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-jungle-green to-jungle-green/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 jungle-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-jungle-yellow text-jungle-black">
            🌿 Digital Marketing Insights
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Jungle 
            <span className="text-jungle-yellow"> Wisdom</span> Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Navigate the digital jungle with expert insights, tips, and strategies 
            from Mumbai's freshest digital marketing minds.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="w-full md:w-96">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="focus:ring-jungle-green focus:border-jungle-green"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  className={`${
                    activeCategory === category 
                      ? 'bg-jungle-green hover:bg-jungle-green/90 text-white' 
                      : 'border-jungle-green text-jungle-green hover:bg-jungle-green hover:text-white'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Badge className="bg-jungle-yellow text-jungle-black">
                🌟 Featured Article
              </Badge>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video overflow-hidden rounded-2xl">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-jungle-black">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-gray-600">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>By {featuredPost.author}</span>
                  <span>•</span>
                  <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                </div>
                <Button 
                  asChild 
                  className="bg-jungle-green hover:bg-jungle-green/90 text-white"
                >
                  <Link to={`/blog/${featuredPost.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Read Full Article 📖
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-jungle-green text-xl leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <p>By {post.author}</p>
                      <p>{new Date(post.date).toLocaleDateString()}</p>
                    </div>
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      className="border-jungle-green text-jungle-green hover:bg-jungle-green hover:text-white"
                    >
                      <Link to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-jungle-green text-white relative overflow-hidden">
        <div className="absolute inset-0 jungle-pattern opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Miss Out on Jungle Wisdom! 🌿
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Subscribe to our newsletter and get the latest digital marketing insights, 
            tips, and strategies delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20"
            />
            <Button 
              className="bg-jungle-yellow text-jungle-black hover:bg-jungle-yellow/90 whitespace-nowrap"
            >
              Subscribe Now 📧
            </Button>
          </div>
          <p className="text-sm text-gray-300 mt-4">
            Join 1000+ marketers who trust our insights. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-black mb-4">
              Explore by 
              <span className="text-jungle-green">Category</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find exactly what you're looking for with our organized content
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((category, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
                onClick={() => setActiveCategory(category)}
              >
                <CardContent className="p-6">
                  <div className="text-2xl mb-2">
                    {category === 'SEO' ? '🌿' : 
                     category === 'Social Media' ? '🐅' :
                     category === 'PPC' ? '🎯' :
                     category === 'Branding Insights' ? '🦁' :
                     category === 'Web Development' ? '🕸️' : '💡'}
                  </div>
                  <h3 className="font-semibold text-jungle-green text-sm">
                    {category}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {blogPosts.filter(post => post.category === category).length} articles
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
