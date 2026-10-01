import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, Sparkles, BookOpen, Clock } from 'lucide-react';
import { MAIN_HEADLINE, MAIN_SUBTITLE, PRICING_DETAILS } from '../data/guideData';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroImageSrc = '/src/assets/images/hero_dog_guide_mockup_1790826130140.jpg';

  return (
    <section id="hero" className="relative bg-neutral-950 text-white pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-neutral-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Kicker badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-semibold text-amber-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>METODOLOGIA CIENTÍFICA BASEADA EM REFORÇO POSITIVO</span>
          </div>
        </div>

        {/* Central Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-tight tracking-tight text-balance">
            {MAIN_HEADLINE}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 text-center max-w-3xl mx-auto font-normal leading-relaxed mb-10 text-balance">
          {MAIN_SUBTITLE}
        </p>

        {/* Hero Visual Mockup + Direct Value Proposition Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
          {/* Left Column: Image Mockup with fallback */}
          <div className="lg:col-span-6 relative group">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800 border border-neutral-700/80 shadow-2xl">
              <img
                src={heroImageSrc}
                alt="Mockup do Guia de Adestramento Canino em tablet e livro"
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-90'
                }`}
                onLoad={() => setImageLoaded(true)}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-200 bg-neutral-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/60">
                <span className="font-semibold text-amber-300">Manual Digital + Checklist</span>
                <span className="text-neutral-400">PDF de Alta Resolução</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key transformation summary & Direct CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-sm sm:text-base text-neutral-200">
                  <strong className="text-white font-bold">100% Livre de Violência:</strong> Sem gritos, trancos, choques ou punições que traumatizam o cão.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-sm sm:text-base text-neutral-200">
                  <strong className="text-white font-bold">Apenas 10 a 15 Minutos/Dia:</strong> Micro-sessões práticas que cabem facilmente na sua rotina.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-sm sm:text-base text-neutral-200">
                  <strong className="text-white font-bold">Comunicação Gestual e Verbal:</strong> O cão finalmente entende o que você espera dele de forma clara.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-sm sm:text-base text-neutral-200">
                  <strong className="text-white font-bold">Funciona para Qualquer Idade:</strong> De filhotes agitados a cães adultos com hábitos antigos.
                </p>
              </div>
            </div>

            {/* Price Highlight */}
            <div className="pt-2 border-t border-neutral-800">
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-neutral-400 line-through">De {PRICING_DETAILS.regularPrice}</span>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Por apenas</span>
              </div>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">{PRICING_DETAILS.currentPrice}</span>
                <span className="text-xs sm:text-sm text-neutral-300 font-medium">à vista ou {PRICING_DETAILS.installments}</span>
              </div>
            </div>

            {/* Primary CTA Button */}
            <div>
              <button
                onClick={onOpenCheckout}
                className="w-full py-4 px-6 text-sm sm:text-base font-extrabold uppercase tracking-wide text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-5 h-5 fill-current shrink-0" />
                <span>QUERO TRANSFORMAR MEU CÃO AGORA</span>
              </button>
              <div className="flex items-center justify-center gap-4 mt-3 text-xs text-neutral-400 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Garantia de 7 Dias
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  Acesso Imediato
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  + 3 Bônus Inclusos
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Social Proof Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-neutral-800/80 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-black text-white tracking-tight tabular-nums">+4.800</p>
            <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">Cães Transformados</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight tabular-nums">4.9 / 5.0</p>
            <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">Avaliação dos Tutores</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-white tracking-tight tabular-nums">30 Dias</p>
            <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">Cronograma Guiado</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight tabular-nums">100%</p>
            <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">Reforço Positivo</p>
          </div>
        </div>
      </div>
    </section>
  );
};
