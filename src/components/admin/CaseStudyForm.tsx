
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import HtmlEditor from './HtmlEditor';
import { CaseStudy, CaseStudyFormData } from './types/CaseStudy';

interface CaseStudyFormProps {
  formData: CaseStudyFormData;
  setFormData: (data: CaseStudyFormData) => void;
  editingCase: CaseStudy | null;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

const CaseStudyForm = ({ 
  formData, 
  setFormData, 
  editingCase, 
  loading, 
  onSubmit, 
  onCancel 
}: CaseStudyFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          {editingCase ? 'Edit Case Study' : 'Create New Case Study'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
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
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CaseStudyForm;
