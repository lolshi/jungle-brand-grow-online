
export interface CaseStudy {
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

export interface CaseStudyFormData {
  title: string;
  description: string;
  service_category: string;
  client_name: string;
  image_url: string;
  pdf_url: string;
  results: string;
}
