import React from 'react';

export default function Header() {
  return (
    <header className="w-full py-5 px-6 md:px-12 flex justify-between items-center bg-brand-dark/90 backdrop-blur-md sticky top-0 z-50 border-b border-brand-light/5">
      <div className="font-montserrat font-bold text-xl text-brand-light tracking-wider">
        DEV<span className="text-brand-pink">.J</span>
      </div>
      <nav className="hidden md:flex space-x-8 font-poppins text-sm text-brand-light/80">
        <a href="#sobre" className="hover:text-brand-pink transition-colors">Sobre</a>
        <a href="#stacks" className="hover:text-brand-purple transition-colors">Tecnologias</a>
        <a href="#experiencia" className="hover:text-brand-pink transition-colors">Experiência</a>
      </nav>
      <div>
        {/* O link do WhatsApp global pode ser mapeado aqui também se necessário */}
        <a href="#contacto" className="font-poppins text-sm font-medium text-brand-pink border border-brand-pink/30 px-4 py-2 rounded-md hover:bg-brand-pink hover:text-brand-light transition-all">
          Bora Conversar?
        </a>
      </div>
    </header>
  );
}