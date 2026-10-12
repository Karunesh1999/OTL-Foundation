import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  size?: number | string;
  filled?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = '',
  size,
  filled = false,
}) => {
  const style: React.CSSProperties = {
    ...(size ? { fontSize: typeof size === 'number' ? `${size}px` : size } : {}),
    ...(filled ? { fontVariationSettings: "'FILL' 1" } : {}),
  };

  return (
    <span
      className={`material-symbols-outlined select-none inline-flex items-center justify-center leading-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      {name}
    </span>
  );
};
