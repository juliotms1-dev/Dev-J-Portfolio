// portfolio/src/components/TechStack.jsx
import React from 'react';

export default function TechStack() {
  const mainStacks = [
    { name: 'Laravel', role: 'Backend de Alta Performance', desc: 'Arquiteturas robustas, APIs seguras e ecossistema moderno (Reverb, Multitenancy).' },
    { name: 'React JS', role: 'Front-end Dinâmico', desc: 'Interfaces SPA limpas, performáticas e focadas na experiência do usuário final.' },
  ];

  const secondaryStacks = [
    { name: 'React Native + Expo', type: 'Mobile' },
    { name: 'MySQL', type: 'Base de Dados' },
    { name: 'C#', type: 'Desktop / Sistemas' },
    { name: 'Python', type: 'Automação / IA' },
    { name: 'Tailwind CSS', type: 'Estilização UI' }
  ];

  return (
    <section id="stacks" className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-t border-brand-light/5">
      <div className="grid md:grid-cols-3 gap-12">
        
        {/* Lado Esquerdo - Chamada Persuasiva */}
        <div className="md:col-span-1">
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-brand-light mb-4">
            Stack Técnica Planeada para <span className="text-brand-purple">Escalar</span>
          </h2>
          <p className="font-poppins text-sm text-brand-light/60 leading-relaxed">
            Não escolho tecnologias por moda, mas sim pela capacidade de resolver problemas reais de negócio com segurança, velocidade e manutenibilidade.
          </p>
        </div>

        {/* Lado Direito - As Tecnologias */}
        <div className="md:col-span-2 space-y-8">
          {/* Main Stacks */}
          <div className="grid sm:grid-cols-2 gap-4">
            {mainStacks.map((stack) => (
              <div key={stack.name} className="p-6 rounded-xl bg-brand-light/[0.02] border border-brand-light/5 hover:border-brand-pink/20 transition-all">
                <span className="text-xs font-poppins font-bold uppercase text-brand-pink tracking-wider">{stack.role}</span>
                <h3 className="font-montserrat font-bold text-xl text-brand-light mt-1 mb-2">{stack.name}</h3>
                <p className="font-poppins text-xs text-brand-light/60">{stack.desc}</p>
              </div>
            ))}
          </div>

          {/* Outras Competências */}
          <div>
            <h4 className="font-poppins text-xs font-bold uppercase text-brand-light/40 tracking-wider mb-4">Outras Ferramentas do meu Ecossistema:</h4>
            <div className="flex flex-wrap gap-2">
              {secondaryStacks.map((stack) => (
                <span key={stack.name} className="px-3 py-1.5 rounded-md bg-brand-dark border border-brand-light/10 font-poppins text-xs text-brand-light/80 hover:border-brand-purple/40 transition-colors">
                  {stack.name} <path className="text-brand-light/30">({stack.type})</path>
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}