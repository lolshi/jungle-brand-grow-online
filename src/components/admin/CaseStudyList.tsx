
import { Card, CardContent } from '@/components/ui/card';
import CaseStudyCard from './CaseStudyCard';
import { CaseStudy } from './types/CaseStudy';

interface CaseStudyListProps {
  caseStudies: CaseStudy[];
  onEdit: (caseStudy: CaseStudy) => void;
  onDelete: (id: string) => void;
}

const CaseStudyList = ({ caseStudies, onEdit, onDelete }: CaseStudyListProps) => {
  return (
    <div className="grid gap-4">
      {caseStudies.map((caseStudy) => (
        <CaseStudyCard
          key={caseStudy.id}
          caseStudy={caseStudy}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
      {caseStudies.length === 0 && (
        <Card>
          <CardContent className="p-6 text-center text-gray-500">
            No case studies found. Create your first case study above!
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CaseStudyList;
