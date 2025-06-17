
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import {??Trash2, Edit, Plus } from 'lucide-react';
import HtmlEditor from './HtmlEditor';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  service_category: string;
  client_name?: string;
  image_url?: string;
  pdf_url?: string;
  results?: string;
  created_at: string;
  updated_at: string;
}

const CaseStudyManager = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [editingCase, setEditingCase] = useState<CaseStudy | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    service_category: '',
    client_name: '',
    image_url: '',
    pdf_url: '',
    results: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCaseStudies(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch case studies",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingCase) {
        const { error } = await supabase
          .from('case_studies')
          .update(formData)
          .eq('id', editingCase.id);

        if (error) throw error;
        toast({ title: "Success", description: "Case study updated successfully!" });
      } else {
        const { error } = await supabase
          .from('case_studies')
          .insert([formData]);

        if (error) throw error;
        toast({ title: "Success", description: "Case study created successfully!" });
      }

      setFormData({
        title: '',
        description: '',
        service_category: '',
        client_name: '',
        image_url: '',
        pdf_url: '',
        results: ''
      });
      setEditingCase(null);
      fetchCaseStudies();
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

  const handleEdit = (caseStudy: CaseStudy) => {
    setEditingCase(caseStudy);
    setFormData({
      title: caseStudy.title,
      description: caseStudy.description,
      service_category: caseStudy.service_category,
      client_name: caseStudy.client_name || '',
      image_url: caseStudy.image_url || '',
      pdf_url: caseStudy.pdf_url || '',
      results: caseStudy.results || ''
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;

    try {
      const { error } = await supabase
        .from('case_studies')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Success", description: "Case study deleted successfully!" });
      fetchCaseStudies();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const cancelEdit = () => {
    setEditingCase(null);
    setFormData({
      title: '',
      description: '',
      service_category: '',
      client_name: '',
      image_url: '',
      pdf_url: '',
      results: ''
    });
  };

  return (
    <div className="space-y-6">
      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            {editingCase ? 'Edit Case Study' : 'Create New Case Study'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="service_category">Service Category</Label>
                <Input
                  id="service_category"
                  value={formData.service_category}
                  onChange={(e) => setFormData({ ...formData, service_category: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="client_name">Client Name</Label>
                <Input
                  id="client_name"
                  value={formData.client_name}
                  onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="image_url">Image URL</Label>
                <Input
                  id="image_url"
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="pdf_url">PDF URL</Label>
              <Input
                id="pdf_url"
                type="url"
                value={formData.pdf_url}
                onChange={(e) => setFormData({ ...formData, pdf_url: e.target.value })}
              />
            </div>
            <HtmlEditor
              label="Description"
              value={formData.description}
              onChange={(description) => setFormData({ ...formData, description })}
              placeholder="Describe the case study with HTML formatting..."
              rows={6}
            />
            <HtmlEditor
              label="Results"
              value={formData.results}
              onChange={(results) => setFormData({ ...formData, results })}
              placeholder="Document the results and outcomes with HTML formatting..."
              rows={4}
            />
            <div className="flex gap-2">
              <Button type="submit" disabled={loading} className="bg-jungle-green hover:bg-jungle-green/90">
                {loading ? 'Saving...' : editingCase ? 'Update Case Study' : 'Create Case Study'}
              </Button>
              {editingCase && (
                <Button type="button" variant="outline" onClick={cancelEdit}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Case Studies List */}
      <div className="grid gap-4">
        {caseStudies.map((caseStudy) => (
          <Card key={caseStudy.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{caseStudy.title}</h3>
                    <Badge variant="outline">{caseStudy.service_category}</Badge>
                    {caseStudy.client_name && (
                      <Badge variant="secondary">{caseStudy.client_name}</Badge>
                    )}
                  </div>
                  <div 
                    className="text-gray-600 text-sm mb-2 prose prose-sm max-w-none line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: caseStudy.description.substring(0, 200) + '...' }}
                  />
                  {caseStudy.results && (
                    <div 
                      className="text-green-600 text-sm mb-2 prose prose-sm max-w-none line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: 'Results: ' + caseStudy.results.substring(0, 100) + '...' }}
                    />
                  )}
                  <p className="text-xs text-gray-500">
                    Created: {new Date(caseStudy.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(caseStudy)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(caseStudy.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {caseStudies.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center text-gray-500">
              No case studies found. Create your first case study above!
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CaseStudyManager;
