
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Calendar, Building, Briefcase } from 'lucide-react';

interface FormSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  service_interest?: string;
  message: string;
  status: string;
  created_at: string;
}

interface NewsletterSubscription {
  id: string;
  email: string;
  subscribed_at: string;
}

const FormSubmissionManager = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [newsletters, setNewsletters] = useState<NewsletterSubscription[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSubmissions();
    fetchNewsletterSubscriptions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('form_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch form submissions",
        variant: "destructive",
      });
    }
  };

  const fetchNewsletterSubscriptions = async () => {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .select('*')
        .order('subscribed_at', { ascending: false });

      if (error) throw error;
      setNewsletters(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch newsletter subscriptions",
        variant: "destructive",
      });
    }
  };

  const updateSubmissionStatus = async (id: string, status: string) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('form_submissions')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Success", description: "Status updated successfully!" });
      fetchSubmissions();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Contact Form Submissions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact Form Submissions ({submissions.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {submissions.map((submission) => (
              <Card key={submission.id} className="border-l-4 border-l-jungle-green">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">{submission.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {submission.email}
                        </span>
                        {submission.company && (
                          <span className="flex items-center gap-1">
                            <Building className="h-3 w-3" />
                            {submission.company}
                          </span>
                        )}
                        {submission.service_interest && (
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                            {submission.service_interest}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(submission.status)}>
                        {submission.status}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        {new Date(submission.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "{submission.message}"
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateSubmissionStatus(submission.id, 'contacted')}
                      disabled={loading || submission.status === 'contacted'}
                      className="text-yellow-600 border-yellow-600 hover:bg-yellow-50"
                    >
                      Mark as Contacted
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateSubmissionStatus(submission.id, 'completed')}
                      disabled={loading || submission.status === 'completed'}
                      className="text-green-600 border-green-600 hover:bg-green-50"
                    >
                      Mark as Completed
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {submissions.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                No form submissions yet.
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Subscriptions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Newsletter Subscriptions ({newsletters.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {newsletters.map((subscription) => (
              <div key={subscription.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">{subscription.email}</span>
                <span className="text-sm text-gray-500">
                  {new Date(subscription.subscribed_at).toLocaleDateString()}
                </span>
              </div>
            ))}
            {newsletters.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                No newsletter subscriptions yet.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormSubmissionManager;
