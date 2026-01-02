import React from 'react';

/**
 * Button Component - Silent Structure
 * Confident without being loud
 */
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-250 ease-elegant focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-neutral-200 focus:ring-neutral-500 active:bg-neutral-300',
    secondary: 'bg-neutral-900 text-white border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 focus:ring-neutral-500 active:bg-neutral-950',
    ghost: 'bg-transparent text-neutral-300 hover:bg-neutral-900 hover:text-white focus:ring-neutral-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 active:bg-red-800',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-md',
    lg: 'px-6 py-3 text-lg rounded-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Card Component - Refined surface
 */
export const Card = ({ 
  children, 
  elevated = false,
  interactive = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'bg-neutral-950 rounded-lg border border-neutral-800 transition-colors duration-300';
  const elevatedStyles = elevated ? 'shadow-md' : 'shadow-sm';
  const interactiveStyles = interactive ? 'cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250' : '';
  
  return (
    <div 
      className={`${baseStyles} ${elevatedStyles} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Input Component - Clean and functional
 */
export const Input = React.forwardRef(({ 
  label,
  error,
  helperText,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-300 mb-1.5">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`
          w-full px-3.5 py-2 
          bg-neutral-900 border rounded-md
          text-white placeholder-neutral-600
          transition-all duration-250
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-neutral-700 hover:border-neutral-600'}
          ${className}
        `}
        {...props}
      />
      {(error || helperText) && (
        <p className={`mt-1.5 text-sm ${error ? 'text-red-400' : 'text-neutral-400'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

/**
 * Badge Component - Subtle indication
 */
export const Badge = ({ 
  children, 
  variant = 'neutral',
  size = 'md',
  className = '' 
}) => {
  const variants = {
    neutral: 'bg-neutral-800 text-neutral-200 border-neutral-700',
    primary: 'bg-blue-900/30 text-blue-300 border-blue-800',
    success: 'bg-green-900/30 text-green-300 border-green-800',
    warning: 'bg-yellow-900/30 text-yellow-300 border-yellow-800',
    error: 'bg-red-900/30 text-red-300 border-red-800',
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };
  
  return (
    <span className={`inline-flex items-center font-medium rounded border ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

/**
 * Divider Component - Subtle separation
 */
export const Divider = ({ orientation = 'horizontal', className = '' }) => {
  return (
    <div 
      className={`
        bg-neutral-700
        ${orientation === 'horizontal' ? 'h-px w-full' : 'w-px h-full'}
        ${className}
      `}
    />
  );
};

/**
 * Container Component - Proper spacing
 */
export const Container = ({ 
  children, 
  size = 'default',
  className = '' 
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    default: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  };
  
  return (
    <div className={`${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Stack Component - Consistent spacing
 */
export const Stack = ({ 
  children, 
  direction = 'vertical',
  spacing = '4',
  align = 'start',
  className = '' 
}) => {
  const directions = {
    vertical: 'flex-col',
    horizontal: 'flex-row',
  };
  
  const alignments = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };
  
  return (
    <div className={`flex ${directions[direction]} ${alignments[align]} gap-${spacing} ${className}`}>
      {children}
    </div>
  );
};

/**
 * Text Component - Typography hierarchy
 */
export const Text = ({ 
  children, 
  variant = 'body',
  weight = 'normal',
  className = '' 
}) => {
  const variants = {
    h1: 'text-4xl font-semibold text-white tracking-tight',
    h2: 'text-3xl font-semibold text-white tracking-tight',
    h3: 'text-2xl font-semibold text-white tracking-tight',
    h4: 'text-xl font-semibold text-white tracking-tight',
    body: 'text-base text-neutral-300',
    small: 'text-sm text-neutral-400',
    caption: 'text-xs text-neutral-500',
  };
  
  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };
  
  const Tag = variant.startsWith('h') ? variant : 'p';
  
  return (
    <Tag className={`${variants[variant]} ${weights[weight]} ${className}`}>
      {children}
    </Tag>
  );
};

/**
 * IconButton Component - Minimal interaction
 */
export const IconButton = ({ 
  children, 
  variant = 'ghost',
  size = 'md',
  className = '',
  ...props 
}) => {
  const variants = {
    ghost: 'hover:bg-neutral-900 text-neutral-400 hover:text-white',
    subtle: 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300',
    solid: 'bg-white hover:bg-neutral-200 text-black',
  };
  
  const sizes = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3',
  };
  
  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-md
        transition-all duration-250 ease-elegant
        focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
