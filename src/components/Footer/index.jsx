import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-8 text-center border-t border-brand-light/5 mt-20 font-poppins text-xs text-brand-light/40">
      <p>© {currentYear} Júlio Tomás (Dev J). Todos os direitos reservados.</p>
      <p className="mt-1 text-brand-purple/60">Transformando !.</p>
    </footer>
  );
}