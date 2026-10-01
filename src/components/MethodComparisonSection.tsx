import React from 'react';
import { X, Check, AlertTriangle, HeartHandshake, ShieldAlert, Sparkles } from 'lucide-react';

export const MethodComparisonSection: React.FC = () => {
  return (
    <section id="metodo" className="bg-white text-neutral-900 py-16 lg:py-24 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">
            <span>A CIÊNCIA DO COMPORTAMENTO CANINO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 tracking-tight text-balance">
            Por que gritos, força bruta e enforcadores estão piorando o comportamento do seu cão
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal text-balance">
            A maioria dos donos tenta corrigir comportamentos indesejados através da punição. Mas a neurociência comportamental prova que a força bruta apenas gera medo, estresse crônico e reatividade agressiva.
          </p>
        </div>

        {/* Comparison Grid: Old Harsh Way vs Positive Reinforcement Way */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Card 1: Old Punitive Way (Negative) */}
          <div className="bg-red-50/50 border-2 border-red-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-red-950">Métodos Antigos e Punitivos</h3>
                  <p className="text-xs font-semibold text-red-700">Enforcador, trancos, gritos e intimidação</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-red-200/70 text-red-700 shrink-0 mt-0.5">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <p className="text-sm text-neutral-800 leading-relaxed">
                    <strong className="text-red-950 font-bold">Obediência por medo:</strong> O cão não obedece porque entendeu, mas para evitar a dor física ou o susto.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-red-200/70 text-red-700 shrink-0 mt-0.5">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <p className="text-sm text-neutral-800 leading-relaxed">
                    <strong className="text-red-950 font-bold">Gera reatividade e agressividade:</strong> A dor na coleira ensina o cão a associar outros cães e pessoas à dor no pescoço.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-red-200/70 text-red-700 shrink-0 mt-0.5">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <p className="text-sm text-neutral-800 leading-relaxed">
                    <strong className="text-red-950 font-bold">Destrói a confiança com o tutor:</strong> O cão passa a desviar o olhar e se afastar, tornando o chamado impossível quando ele está solto.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-red-200/70 text-red-700 shrink-0 mt-0.5">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <p className="text-sm text-neutral-800 leading-relaxed">
                    <strong className="text-red-950 font-bold">Efeito sanfona:</strong> O cão só finge obedecer quando a coleira de metal está no pescoço ou quando você grita.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-red-200/80 text-xs font-semibold text-red-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Resultado: cão ansioso, desconfiado e imprevisível.</span>
            </div>
          </div>

          {/* Card 2: Positive Reinforcement (Our Method) */}
          <div className="bg-emerald-50/50 border-2 border-emerald-400 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative">
            <div className="absolute -top-3 right-6 bg-emerald-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-sm">
              O Método do Guia
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-emerald-950">Reforço Positivo & Comunicação Clara</h3>
                  <p className="text-xs font-semibold text-emerald-700">Comandos verbais e gestuais sem punição</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-200 text-emerald-800 shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <p className="text-sm text-neutral-800 leading-relaxed">
                    <strong className="text-emerald-950 font-bold">Obediência voluntária e entusiástica:</strong> O cão colabora com alegria porque sabe exatamente como ganhar a recompensa.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-200 text-emerald-800 shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <p className="text-sm text-neutral-800 leading-relaxed">
                    <strong className="text-emerald-950 font-bold">Passeios tranquilos sem esforço:</strong> A guia frouxa se torna um hábito natural sem sufocamento ou dor cervical.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-200 text-emerald-800 shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <p className="text-sm text-neutral-800 leading-relaxed">
                    <strong className="text-emerald-950 font-bold">Vínculo inabalável de parceria:</strong> O cão olha para você buscando orientação constante, mesmo em ambientes cheios de estímulos.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-200 text-emerald-800 shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <p className="text-sm text-neutral-800 leading-relaxed">
                    <strong className="text-emerald-950 font-bold">Comportamento consolidado para a vida:</strong> Os comandos são gravados na memória de longo prazo do cão.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-200 text-xs font-semibold text-emerald-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Resultado: cão equilibrado, feliz, atento e obediente em qualquer situação.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
