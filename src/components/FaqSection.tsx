import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/guideData';

interface FaqSectionProps {
  onOpenCheckout: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenCheckout }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-white text-neutral-900 py-16 lg:py-24 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>TIRA-DÚVIDAS FREQUENTES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 tracking-tight text-balance">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 font-normal">
            Ainda tem alguma dúvida? Veja as respostas diretas para as principais perguntas dos tutores.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-neutral-200 rounded-xl overflow-hidden transition-all bg-neutral-50/50 hover:border-neutral-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-neutral-950">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-neutral-200/80 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-200 text-amber-900' : 'text-neutral-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal border-t border-neutral-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final CTA inside FAQ */}
        <div className="mt-12 text-center bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 sm:p-8">
          <h4 className="text-base sm:text-lg font-black text-neutral-950 mb-2">
            Pronto para ver a transformação do seu cão nos próximos 30 dias?
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto mb-5 font-normal">
            Aproveite a condição especial de lançamento com 90% de desconto e receba os 3 bônus exclusivos.
          </p>
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
          >
            <span>Quero Começar Agora por R$ 10</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
