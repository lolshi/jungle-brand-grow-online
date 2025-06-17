
import { useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import CaseStudyForm from './CaseStudyForm';
import CaseStudyList from './CaseStudyList';
import { CaseStudy, CaseStudyFormData } from './types/CaseStudy';

const CaseStudyManager = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [editingCase, setEditingCase] = useState<CaseStudy | null>(null);
  const [formData, setFormData] = useState<CaseStudyFormData>({
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

      resetForm();
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

  const resetForm = () => {
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
      <CaseStudyForm
        formData={formData}
        setFormData={setFormData}
        editingCase={editingCase}
        loading={loading}
        onSubmit={handleSubmit}
        onCancel={resetForm}
      />
      <CaseStudyList
        caseStudies={caseStudies}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CaseStudyManager;
