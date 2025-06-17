
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Trash2, Edit, Plus, Star } from 'lucide-react';

interface ClientReview {
  id: string;
  client_name: string;
  company?: string;
  review_text: string;
  rating: number;
  logo_url?: string;
  published: boolean;
  created_at: string;
}

const ReviewManager = () => {
  const [reviews, setReviews] = useState<ClientReview[]>([]);
  const [editingReview, setEditingReview] = useState<ClientReview | null>(null);
  const [formData, setFormData] = useState({
    client_name: '',
    company: '',
    review_text: '',
    rating: 5,
    logo_url: '',
    published: false
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('client_reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch reviews",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingReview) {
        const { error } = await supabase
          .from('client_reviews')
          .update(formData)
          .eq('id', editingReview.id);

        if (error) throw error;
        toast({ title: "Success", description: "Review updated successfully!" });
      } else {
        const { error } = await supabase
          .from('client_reviews')
          .insert([formData]);

        if (error) throw error;
        toast({ title: "Success", description: "Review created successfully!" });
      }

      setFormData({
        client_name: '',
        company: '',
        review_text: '',
        rating: 5,
        logo_url: '',
        published: false
      });
      setEditingReview(null);
      fetchReviews();
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

  const handleEdit = (review: ClientReview) => {
    setEditingReview(review);
    setFormData({
      client_name: review.client_name,
      company: review.company || '',
      review_text: review.review_text,
      rating: review.rating,
      logo_url: review.logo_url || '',
      published: review.published
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this review?')) return;

    try {
      const { error } = await supabase
        .from('client_reviews')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Success", description: "Review deleted successfully!" });
      fetchReviews();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const cancelEdit = () => {
    setEditingReview(null);
    setFormData({
      client_name: '',
      company: '',
      review_text: '',
      rating: 5,
      logo_url: '',
      published: false
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            {editingReview ? 'Edit Client Review' : 'Create New Client Review'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="client_name">Client Name</Label>
                <Input
                  id="client_name"
                  value={formData.client_name}
                  onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="rating">Rating</Label>
                <Input
                  id="rating"
                  type="number"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="logo_url">Logo URL</Label>
                <Input
                  id="logo_url"
                  type="url"
                  value={formData.logo_url}
                  onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="review_text">Review Text</Label>
              <Textarea
                id="review_text"
                value={formData.review_text}
                onChange={(e) => setFormData({ ...formData, review_text: e.target.value })}
                rows={4}
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="published"
                checked={formData.published}
                onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
              />
              <Label htmlFor="published">Published</Label>
            </div>
            <div className="flex gap-2">
              <Button type="submit" disabled={loading} className="bg-jungle-green hover:bg-jungle-green/90">
                {loading ? 'Saving...' : editingReview ? 'Update Review' : 'Create Review'}
              </Button>
              {editingReview && (
                <Button type="button" variant="outline" onClick={cancelEdit}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Reviews List */}
      <div className="grid gap-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{review.client_name}</h3>
                    {review.company && (
                      <Badge variant="outline">{review.company}</Badge>
                    )}
                    <div className="flex">{renderStars(review.rating)}</div>
                    <Badge variant={review.published ? "default" : "secondary"}>
                      {review.published ? 'Published' : 'Draft'}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">"{review.review_text}"</p>
                  <p className="text-xs text-gray-500">
                    Created: {new Date(review.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(review)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(review.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {reviews.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center text-gray-500">
              No reviews found. Create your first review above!
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ReviewManager;
