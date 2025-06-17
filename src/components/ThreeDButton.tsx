
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ThreeDButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  asChild?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const ThreeDButton: React.FC<ThreeDButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  onClick,
  asChild,
  type,
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-jungle-green hover:bg-jungle-green/90 text-white';
      case 'secondary':
        return 'bg-jungle-yellow hover:bg-jungle-yellow/90 text-jungle-black';
      case 'outline':
        return 'border-2 border-jungle-green text-jungle-green hover:bg-jungle-green hover:text-white bg-transparent';
      default:
        return 'bg-jungle-green hover:bg-jungle-green/90 text-white';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <Button
      asChild={asChild}
      onClick={onClick}
      type={type}
      className={cn(
        'btn-3d font-semibold rounded-lg transition-all duration-200 transform-gpu',
        'relative overflow-hidden',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
        'before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500',
        getVariantClasses(),
        getSizeClasses(),
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Button>
  );
};

export default ThreeDButton;
