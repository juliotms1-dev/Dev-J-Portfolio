import React from 'react';
import Button from '../Button';

export default function HeroSection() {
  const whatsappNumber = "244928332396"; 
  const whatsappMessage = encodeURIComponent("Olá Dev J, vi seu portfólio e gostaria de conversar sobre um projeto!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  const emailUrl = "mailto:juliooootms1@gmail.com";

  return (
    <section id="sobre" className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 py-12 max-w-6xl mx-auto">
      <p className="text-brand-purple font-poppins font-medium tracking-widest text-sm uppercase mb-3 animate-pulse">
        Disponível para Projetos de Alto Impacto
      </p>
      
      <h1 className="font-montserrat font-extrabold text-4xl md:text-6xl text-brand-light leading-tight mb-6">
        Sou o <span className="text-brand-pink">Júlio Tomás</span>.<br />
        Construo ecossistemas digitais robustos e inteligentes.
      </h1>
      
      <p className="font-poppins text-base md:text-lg text-brand-light/70 max-w-2xl mb-8 leading-relaxed">
        Especialista Full-Stack com foco absoluto na combinação <strong className="text-brand-light">Laravel + React JS</strong>. 
        Faço parte da equipe que desenvolveu o <strong className="text-brand-purple">Angomanage</strong>, o primeiro software de gestão e faturação com Inteligência Artificial em Angola. Transformo regras de negócio complexas em produtos performáticos, escaláveis e prontos para o mercado.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <Button variant="whatsapp" href={whatsappUrl}>
          Fale Comigo no WhatsApp
        </Button>
        <Button variant="secondary" href={emailUrl}>
          Enviar Email Directo
        </Button>
        <Button variant="primary" href="/Júlio-Tomás-CV.pdf" className="bg-transparent text-brand-light hover:bg-brand-light/5 border border-brand-light/10">
          Descarregar CV (PDF)
        </Button>
      </div>
    </section>
  );
}
