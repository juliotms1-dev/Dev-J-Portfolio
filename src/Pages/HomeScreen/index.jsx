// portfolio/src/Pages/HomeScreen.jsx
import React from 'react';
import Header from '../../components/Header';
// import HeroSection from '../components/HeroSection';
// import TechStack from '../components/TechStack';
// import Footer from '../components/Footer';

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light selection:bg-brand-pink selection:text-brand-light overflow-x-hidden">
      {/* Componente de Navegação */}
      <Header />
      
      {/* Conteúdo Principal com Storytelling e CTAs */}
      <main>
        {/* <HeroSection /> */}
        {/* <TechStack /> */}
        {/* Futuramente as secções de Blog e Portfólio dinâmico entrarão aqui */}
      </main>

      {/* Componente de Rodapé */}
      {/* <Footer /> */}
    </div>
  );
}