import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/guideData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="bg-white text-neutral-900 py-16 lg:py-24 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full mb-3">
            <ThumbsUp className="w-3.5 h-3.5 text-amber-600" />
            <span>RESULTADOS COMPROVADOS EM DIVERSAS RAÇAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 tracking-tight text-balance">
            Veja o que Acontece Quando Você Aplica o Reforço Positivo na Prática
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal text-balance">
            Histórias reais de tutores comuns que achavam que seus cães eram "impossíveis" de educar sem broncas pesadas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-50/80 border border-neutral-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-300 transition-all shadow-sm"
            >
              <div>
                {/* 5 Stars Rating + Days to result tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-md">
                    Resultado em {item.daysToResult}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium mb-6 italic">
                  "{item.quote}"
                </p>

                {/* Before & After Micro-Case */}
                <div className="space-y-2 mb-6 bg-white p-3.5 rounded-xl border border-neutral-200/70 text-xs">
                  <div>
                    <span className="font-bold text-red-700 uppercase tracking-wider text-[10px] block">
                      Antes do Guia:
                    </span>
                    <p className="text-neutral-600 mt-0.5 leading-snug">
                      {item.beforeProblem}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-neutral-100">
                    <span className="font-bold text-emerald-700 uppercase tracking-wider text-[10px] block">
                      Depois de 30 Dias:
                    </span>
                    <p className="text-neutral-900 font-semibold mt-0.5 leading-snug">
                      {item.afterResult}
                    </p>
                  </div>
                </div>
              </div>

              {/* Author & Dog Profile */}
              <div className="pt-4 border-t border-neutral-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-neutral-950">
                    {item.author}
                  </h4>
                  <p className="text-xs text-neutral-500 font-medium">
                    {item.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-amber-900">
                    {item.dogName}
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    {item.dogBreed} · {item.dogAge}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center text-xs text-neutral-500 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5 font-semibold text-neutral-700">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            Depoimentos 100% verídicos de alunos
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5 font-semibold text-neutral-700">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            Avaliação média de 4.9 de 5.0 estrelas
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5 font-semibold text-neutral-700">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            +4.800 lares transformados
          </span>
        </div>
      </div>
    </section>
  );
};
