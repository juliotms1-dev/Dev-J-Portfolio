// portfolio/src/components/Button.jsx
import React from 'react';

export default function Button({ children, onClick, href, variant = 'primary', className = '' }) {
  const baseStyles = "px-6 py-3 rounded-lg font-poppins font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 text-center inline-block";
  
  const variants = {
    primary: "bg-brand-pink text-brand-light hover:bg-opacity-90 shadow-lg shadow-brand-pink/20",
    secondary: "bg-transparent border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-brand-light",
    whatsapp: "bg-[#25D366] text-white hover:bg-opacity-90 shadow-lg shadow-green-500/20"
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}