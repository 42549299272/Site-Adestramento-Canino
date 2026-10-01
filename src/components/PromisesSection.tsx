import React, { useState } from 'react';
import { Eye, Compass, BellRing, ShieldCheck, Home, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SECONDARY_PROMISES } from '../data/guideData';

interface PromisesSectionProps {
  onOpenCheckout: () => void;
}

export const PromisesSection: React.FC<PromisesSectionProps> = ({ onOpenCheckout }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const iconsMap: Record<string, React.ReactNode> = {
    'obediencia-sem-repeticao': <Eye className="w-5 h-5 text-amber-600" />,
    'passeios-sem-estresse': <Compass className="w-5 h-5 text-amber-600" />,
    'visitas-sem-constrangimento': <BellRing className="w-5 h-5 text-amber-600" />,
    'seguranca-e-liberdade': <ShieldCheck className="w-5 h-5 text-amber-600" />,
    'paz-e-sossego': <Home className="w-5 h-5 text-amber-600" />,
    'metodo-pratico-rapido': <Zap className="w-5 h-5 text-amber-600" />,
  };

  const filteredPromises =
    activeTab === 'all'
      ? SECONDARY_PROMISES
      : SECONDARY_PROMISES.filter((p) => p.id === activeTab);

  return (
    <section id="transformacoes" className="bg-[#f6f4ee] text-neutral-900 py-16 lg:py-24 border-b border-neutral-300/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Dores Reais × Soluções Definitivas
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 tracking-tight mt-2 text-balance">
            As 6 Transformações Essenciais que Você Terá no Seu Dia a Dia
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal text-balance">
            Você não precisa aceitar o estresse diário como parte da convivência. Cada capítulo do guia foi desenhado cirurgicamente para substituir um vício por um hábito de harmonia.
          </p>
        </div>

        {/* Filter Tabs for Interactive UX */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-neutral-900 text-white shadow-sm'
                : 'bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400'
            }`}
          >
            Todas as 6 Soluções
          </button>
          {SECONDARY_PROMISES.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === item.id
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* The 6 Promises Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPromises.map((promise, index) => (
            <div
              key={promise.id}
              className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow relative group"
            >
              <div>
                {/* Header of card with editorial index and icon */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-100/70 flex items-center justify-center shrink-0">
                      {iconsMap[promise.id]}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                      {promise.badge}
                    </span>
                  </div>
                  <span className="text-xs font-extrabold text-neutral-400 tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-neutral-950 mb-3 tracking-tight">
                  {promise.title}
                </h3>

                {/* Main Promessa Quote - User Exact Text */}
                <div className="bg-amber-50/70 border-l-3 border-amber-500 p-3.5 rounded-r-lg mb-5">
                  <p className="text-xs sm:text-sm font-semibold text-neutral-800 leading-snug italic">
                    "{promise.promiseQuote}"
                  </p>
                </div>

                {/* Pain vs Solution Breakdown */}
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 block mb-0.5">
                      A Dor Atual:
                    </span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {promise.pain}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-0.5">
                      A Solução no Guia:
                    </span>
                    <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                      {promise.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Result Anchor */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-800">
                <span className="flex items-center gap-1.5 font-bold text-neutral-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  {promise.actionSummary}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA within this block */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-800 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Quero essas 6 transformações no meu cão</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-neutral-600 mt-2">
            Acesso imediato ao método passo a passo · Sem mensalidades
          </p>
        </div>
      </div>
    </section>
  );
};
