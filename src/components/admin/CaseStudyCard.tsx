
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2 } from 'lucide-react';
import { CaseStudy } from './types/CaseStudy';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onEdit: (caseStudy: CaseStudy) => void;
  onDelete: (id: string) => void;
}

const CaseStudyCard = ({ caseStudy, onEdit, onDelete }: CaseStudyCardProps) => {
  return (
    <Card>
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
              onClick={() => onEdit(caseStudy)}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onDelete(caseStudy.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;
