import React from 'react';
import { Gift, Check, Sparkles, ArrowRight } from 'lucide-react';
import { EXCLUSIVE_BONUSES } from '../data/guideData';

interface BonusesSectionProps {
  onOpenCheckout: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="bg-[#071712] text-white py-16 lg:py-24 border-b border-emerald-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
            <Gift className="w-4 h-4" />
            <span>EXCLUSIVIDADE PARA QUEM COMPRAR HOJE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight text-balance">
            Você Leva Mais 3 Bônus Especiais Gratuitamente
          </h2>
          <p className="mt-3 text-base sm:text-lg text-emerald-100/80 leading-relaxed font-normal text-balance">
            Se comprados separadamente, esses materiais adicionais custariam mais de <strong className="text-white">R$ 191,00</strong>. Garantindo o seu guia nesta página, eles são seus sem custo extra.
          </p>
        </div>

        {/* 3 Bonuses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {EXCLUSIVE_BONUSES.map((bonus, index) => (
            <div
              key={bonus.id}
              className="bg-neutral-900/90 border border-emerald-800/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500/50 transition-all shadow-xl relative"
            >
              <div>
                {/* Header with tag and original price */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/50">
                    {bonus.tag}
                  </span>
                  <div className="text-right">
                    <span className="text-[11px] text-neutral-400 line-through block">
                      {bonus.originalPrice}
                    </span>
                    <span className="text-xs font-black text-emerald-400 uppercase">
                      GRÁTIS HOJE
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-white mb-2 leading-snug">
                  {bonus.title}
                </h3>

                <p className="text-xs font-semibold text-emerald-200/90 mb-4">
                  {bonus.subtitle}
                </p>

                <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                  {bonus.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs font-bold text-emerald-400">
                <Check className="w-4 h-4 shrink-0" />
                <span>Incluso no seu download imediato</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Value Banner */}
        <div className="mt-12 bg-emerald-950/50 border border-emerald-800/50 rounded-2xl p-6 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
              Pacote Completo de Transformação
            </span>
            <p className="text-sm sm:text-base font-extrabold text-white mt-0.5">
              Guia Principal + 3 Bônus Exclusivos + Suporte
            </p>
          </div>
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            Quero Todos os Bônus Gratuitos
          </button>
        </div>
      </div>
    </section>
  );
};
