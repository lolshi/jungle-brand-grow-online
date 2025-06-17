
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  hover3D?: boolean;
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({
  children,
  className,
  title,
  icon,
  hover3D = true,
  ...props
}) => {
  return (
    <Card
      className={cn(
        'border-0 shadow-lg backdrop-blur-sm',
        hover3D && 'card-3d cursor-pointer',
        'bg-white/95 hover:bg-white',
        className
      )}
      {...props}
    >
      {(title || icon) && (
        <CardHeader className="text-center pb-4">
          {icon && (
            <div className="text-4xl mb-4 animate-float">{icon}</div>
          )}
          {title && (
            <CardTitle className="text-jungle-green text-xl">{title}</CardTitle>
          )}
        </CardHeader>
      )}
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default ThreeDCard;
