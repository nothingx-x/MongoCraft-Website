interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

function Button({children, variant, size, className = '', ...props}: ButtonProps) {
    const variants = {
        primary: 'bg-primary-500 hover:bg-primary-400 text-primary-100',
        secondary: 'bg-secondary-500 hover:bg-secondary-400 text-secondary-100',
        outline: 'border border-primary-500 text-primary-500 hover:bg-primary-50',
        highlight: 'bg-orange-500 hover:bg-orange-400 text-zinc-900 ring-orange-400 shadow-orange-500 drop-shadow-sm shadow-sm',
        ghost: 'bg-transparent hover:bg-primary-50 text-primary-500',
    }

    
     const sizes = {
        sm: 'px-4 py-1',
        md: 'px-6 py-2',
        lg: 'px-8 py-3 text-lg'
    };

    return (
    <button
      className={`${variant && variants[variant]} ${size && sizes[size]} rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button