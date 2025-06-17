
-- Create table for clients
CREATE TABLE public.clients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  logo_url TEXT,
  description TEXT NOT NULL,
  contact_email TEXT,
  project_status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS) for clients table
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to manage clients
CREATE POLICY "Authenticated users can manage clients" 
  ON public.clients 
  FOR ALL 
  USING (auth.role() = 'authenticated');

-- Create trigger to automatically update the updated_at column
CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON public.clients 
FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
