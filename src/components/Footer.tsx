import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail('');
  };

  return (
    <footer className="bg-jungle-green text-white relative overflow-hidden">
      {/* Jungle pattern overlay */}
      <div className="absolute inset-0 jungle-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/logo.jpeg"
                alt="The Brand Jungle Logo"
                className="h-12 w-auto"
                style={{ maxWidth: 48 }}
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              We Grow Your Brand in the digital jungle. A fresh, full-service digital marketing 
              and branding agency based in Mumbai, India.
            </p>
            <div className="text-sm text-gray-300">
              <p>📍 Mumbai, Maharashtra, India</p>
              <p>📧 hello@brandjunglenetwork.com</p>
              <p>📞 +91 98765 43210</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-jungle-yellow mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-gray-300 hover:text-jungle-yellow transition-colors">About Us</Link>
              <Link to="/services" className="text-gray-300 hover:text-jungle-yellow transition-colors">Services</Link>
              <Link to="/portfolio" className="text-gray-300 hover:text-jungle-yellow transition-colors">Portfolio</Link>
              <Link to="/blog" className="text-gray-300 hover:text-jungle-yellow transition-colors">Blog</Link>
              <Link to="/contact" className="text-gray-300 hover:text-jungle-yellow transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-jungle-yellow mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest digital marketing tips and insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-jungle-yellow text-jungle-black hover:bg-jungle-yellow/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              © 2024 The Brand Jungle Network. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-jungle-yellow transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-jungle-yellow transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
