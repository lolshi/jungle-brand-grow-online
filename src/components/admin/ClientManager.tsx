
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Trash2, Edit, Plus, Upload } from 'lucide-react';

interface Client {
  id: string;
  company_name: string;
  logo_url?: string;
  description: string;
  contact_email?: string;
  project_status: string;
  created_at: string;
  updated_at: string;
}

const ClientManager = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [formData, setFormData] = useState({
    company_name: '',
    logo_url: '',
    description: '',
    contact_email: '',
    project_status: 'active'
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setClients(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch clients",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingClient) {
        const { error } = await supabase
          .from('clients')
          .update(formData)
          .eq('id', editingClient.id);

        if (error) throw error;
        toast({ title: "Success", description: "Client updated successfully!" });
      } else {
        const { error } = await supabase
          .from('clients')
          .insert([formData]);

        if (error) throw error;
        toast({ title: "Success", description: "Client created successfully!" });
      }

      setFormData({
        company_name: '',
        logo_url: '',
        description: '',
        contact_email: '',
        project_status: 'active'
      });
      setEditingClient(null);
      fetchClients();
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

  const handleEdit = (client: Client) => {
    setEditingClient(client);
    setFormData({
      company_name: client.company_name,
      logo_url: client.logo_url || '',
      description: client.description,
      contact_email: client.contact_email || '',
      project_status: client.project_status
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this client?')) return;

    try {
      const { error } = await supabase
        .from('clients')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Success", description: "Client deleted successfully!" });
      fetchClients();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const cancelEdit = () => {
    setEditingClient(null);
    setFormData({
      company_name: '',
      logo_url: '',
      description: '',
      contact_email: '',
      project_status: 'active'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'on-hold': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            {editingClient ? 'Edit Client' : 'Add New Client'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company_name">Company Name</Label>
                <Input
                  id="company_name"
                  value={formData.company_name}
                  onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="contact_email">Contact Email</Label>
                <Input
                  id="contact_email"
                  type="email"
                  value={formData.contact_email}
                  onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="logo_url">Logo URL</Label>
                <Input
                  id="logo_url"
                  type="url"
                  value={formData.logo_url}
                  onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="project_status">Project Status</Label>
                <select
                  id="project_status"
                  value={formData.project_status}
                  onChange={(e) => setFormData({ ...formData, project_status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jungle-green"
                >
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="on-hold">On Hold</option>
                </select>
              </div>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                placeholder="Client description, project details, or notes..."
                required
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit" disabled={loading} className="bg-jungle-green hover:bg-jungle-green/90">
                {loading ? 'Saving...' : editingClient ? 'Update Client' : 'Add Client'}
              </Button>
              {editingClient && (
                <Button type="button" variant="outline" onClick={cancelEdit}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Clients List */}
      <div className="grid gap-4">
        {clients.map((client) => (
          <Card key={client.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {client.logo_url && (
                      <img
                        src={client.logo_url}
                        alt={`${client.company_name} logo`}
                        className="w-12 h-12 object-contain rounded"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold">{client.company_name}</h3>
                      {client.contact_email && (
                        <p className="text-sm text-gray-600">{client.contact_email}</p>
                      )}
                    </div>
                    <Badge className={getStatusColor(client.project_status)}>
                      {client.project_status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{client.description}</p>
                  <p className="text-xs text-gray-500">
                    Created: {new Date(client.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(client)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(client.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {clients.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center text-gray-500">
              No clients found. Add your first client above!
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ClientManager;
