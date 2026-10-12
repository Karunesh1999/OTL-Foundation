import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'neutral' | 'accent' | 'pulse';
  className?: string;
  hasPulseDot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'secondary',
  className = '',
  hasPulseDot = false,
}) => {
  const variantStyles = {
    primary: 'bg-primary-container text-on-primary',
    secondary: 'bg-secondary-fixed text-on-secondary-fixed',
    neutral: 'bg-surface-container-high text-on-surface',
    accent: 'bg-tertiary-fixed text-on-tertiary-fixed',
    pulse: 'bg-secondary-fixed text-on-secondary-fixed',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-badge-caps text-badge-caps uppercase tracking-wider ${variantStyles[variant]} ${className}`}
    >
      {hasPulseDot && (
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" />
      )}
      <span>{children}</span>
    </div>
  );
};
