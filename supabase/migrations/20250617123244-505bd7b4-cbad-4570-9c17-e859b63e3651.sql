
-- Create table for blog posts
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for case studies
CREATE TABLE public.case_studies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  service_category TEXT NOT NULL,
  client_name TEXT,
  image_url TEXT,
  pdf_url TEXT,
  results TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for client reviews
CREATE TABLE public.client_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  company TEXT,
  review_text TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  logo_url TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for form submissions
CREATE TABLE public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service_interest TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for newsletter subscriptions
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS) for all tables
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to published content
CREATE POLICY "Public can view published blog posts" 
  ON public.blog_posts 
  FOR SELECT 
  USING (published = true);

CREATE POLICY "Public can view published case studies" 
  ON public.case_studies 
  FOR SELECT 
  USING (true);

CREATE POLICY "Public can view published client reviews" 
  ON public.client_reviews 
  FOR SELECT 
  USING (published = true);

-- Create policies for authenticated users (admin) to manage all content
CREATE POLICY "Authenticated users can manage blog posts" 
  ON public.blog_posts 
  FOR ALL 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage case studies" 
  ON public.case_studies 
  FOR ALL 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage client reviews" 
  ON public.client_reviews 
  FOR ALL 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can view form submissions" 
  ON public.form_submissions 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Anyone can submit forms" 
  ON public.form_submissions 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can subscribe to newsletter" 
  ON public.newsletter_subscriptions 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view newsletter subscriptions" 
  ON public.newsletter_subscriptions 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Create function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update the updated_at column
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts 
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_case_studies_updated_at BEFORE UPDATE ON public.case_studies 
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
