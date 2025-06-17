
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Layout from '@/components/Layout';
import BlogPostManager from '@/components/admin/BlogPostManager';
import CaseStudyManager from '@/components/admin/CaseStudyManager';
import ReviewManager from '@/components/admin/ReviewManager';
import FormSubmissionManager from '@/components/admin/FormSubmissionManager';
import { User } from '@supabase/supabase-js';

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
        return;
      }
      setUser(session.user);
      setLoading(false);
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/auth');
      } else {
        setUser(session.user);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Success",
        description: "Signed out successfully!",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Error",
        description: "Error signing out",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-jungle-green mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-jungle-green">Admin Dashboard</h1>
                <p className="text-gray-600 mt-2">
                  Welcome back, {user?.email} 
                  <Badge className="ml-2 bg-jungle-yellow text-jungle-black">Admin</Badge>
                </p>
              </div>
              <Button 
                onClick={handleSignOut}
                variant="outline"
                className="border-jungle-green text-jungle-green hover:bg-jungle-green hover:text-white"
              >
                Sign Out
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="blog" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="blog">Blog Posts</TabsTrigger>
              <TabsTrigger value="cases">Case Studies</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="submissions">Form Submissions</TabsTrigger>
            </TabsList>

            <TabsContent value="blog">
              <BlogPostManager />
            </TabsContent>

            <TabsContent value="cases">
              <CaseStudyManager />
            </TabsContent>

            <TabsContent value="reviews">
              <ReviewManager />
            </TabsContent>

            <TabsContent value="submissions">
              <FormSubmissionManager />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
