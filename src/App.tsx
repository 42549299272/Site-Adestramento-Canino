import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { MethodComparisonSection } from './components/MethodComparisonSection';
import { PromisesSection } from './components/PromisesSection';
import { ModulesRoadmapSection } from './components/ModulesRoadmapSection';
import { DogAssessmentQuiz } from './components/DogAssessmentQuiz';
import { BonusesSection } from './components/BonusesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { StickyMobileCta } from './components/StickyMobileCta';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-montserrat bg-[#0a0f14] text-neutral-900 selection:bg-amber-400 selection:text-neutral-950 w-full max-w-full overflow-x-hidden">
      {/* 1. Header & Announcement Bar */}
      <TopBar onOpenCheckout={handleOpenCheckout} />

      <main className="flex-grow">
        {/* 2. Hero Section (Fundo Escuro: #0A0F14 / #0D151C) */}
        <HeroSection onOpenCheckout={handleOpenCheckout} />

        {/* 3. O Método vs Punição Antiga (Fundo Claro: #FFFFFF) */}
        <MethodComparisonSection />

        {/* 4. As 6 Transformações Essenciais (Fundo Quente / Areia: #F6F4EE) */}
        <PromisesSection onOpenCheckout={handleOpenCheckout} />

        {/* 5. Cronograma Passo a Passo de 30 Dias (Fundo Escuro Azul Noturno: #0B121E) */}
        <ModulesRoadmapSection onOpenCheckout={handleOpenCheckout} />

        {/* 6. Diagnóstico Interativo do Cão (Fundo Claro: #FFFFFF) */}
        <DogAssessmentQuiz onOpenCheckout={handleOpenCheckout} />

        {/* 7. Bônus Exclusivos de Lançamento (Fundo Escuro Verde Floresta: #071712) */}
        <BonusesSection onOpenCheckout={handleOpenCheckout} />

        {/* 8. Depoimentos e Prova Social (Fundo Claro: #FFFFFF) */}
        <TestimonialsSection />

        {/* 9. Oferta Irrecusável e Checkout (Fundo Escuro Profundo: #060A0F) */}
        <PricingSection onOpenCheckout={handleOpenCheckout} />

        {/* 10. Garantia Incondicional de 7 Dias (Fundo Quente Suave: #F5F2EB) */}
        <GuaranteeSection onOpenCheckout={handleOpenCheckout} />

        {/* 11. Perguntas Frequentes (FAQ) (Fundo Claro: #FFFFFF) */}
        <FaqSection onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* 12. Rodapé Institucional (Fundo Escuro: #05070A) */}
      <Footer />

      {/* Sticky Mobile CTA Bar (apenas mobile, altura inferior a 15% viewport) */}
      <StickyMobileCta onOpenCheckout={handleOpenCheckout} />

      {/* Checkout Modal Interativo */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </div>
  );
}
