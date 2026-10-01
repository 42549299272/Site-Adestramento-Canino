import React, { useState } from 'react';
import { Check, Calendar, Clock, Trophy, ArrowRight, Eye, Footprints, Home, ShieldAlert } from 'lucide-react';
import { MODULES_30_DAYS } from '../data/guideData';

interface ModulesRoadmapSectionProps {
  onOpenCheckout: () => void;
}

export const ModulesRoadmapSection: React.FC<ModulesRoadmapSectionProps> = ({ onOpenCheckout }) => {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const currentModule = MODULES_30_DAYS.find((m) => m.week === selectedWeek) || MODULES_30_DAYS[0];

  const weekIcons = [
    <Eye className="w-4 h-4" />,
    <Footprints className="w-4 h-4" />,
    <Home className="w-4 h-4" />,
    <Trophy className="w-4 h-4" />,
  ];

  const moduleImages: Record<number, { src: string; caption: string }> = {
    1: {
      src: '/src/assets/images/dog_eye_contact_reward_1790826151788.jpg',
      caption: 'Foco imediato: conexão visual e resposta rápida ao nome na primeira tentativa.',
    },
    2: {
      src: '/src/assets/images/dog_loose_leash_walk_1790826141200.jpg',
      caption: 'Passeio com guia frouxa: caminhadas relaxadas e sincronizadas sem puxões.',
    },
    3: {
      src: '/src/assets/images/dog_calm_bed_resting_1790826162594.jpg',
      caption: 'Modo desligar: relaxamento na caminha e silêncio absoluto ao soar a campainha.',
    },
    4: {
      src: '/src/assets/images/dog_loose_leash_walk_1790826141200.jpg',
      caption: 'Chamado vital e autocontrole: resposta instantânea mesmo sob forte distração.',
    },
  };

  return (
    <section id="cronograma" className="bg-[#0b121e] text-white py-16 lg:py-24 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Calendar className="w-4 h-4" />
            <span>CRONOGRAMA ESTRUTURADO DE 30 DIAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight text-balance">
            O Passo a Passo Diário Para a Mudança Comportamental Completa
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal text-balance">
            Você não precisa adivinhar o que fazer. O guia te entrega um roteiro claro semana a semana, dividindo os exercícios em pequenas doses fáceis de aplicar.
          </p>
        </div>

        {/* 4-Week Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-4xl mx-auto">
          {MODULES_30_DAYS.map((mod, idx) => {
            const isSelected = selectedWeek === mod.week;
            return (
              <button
                key={mod.week}
                onClick={() => setSelectedWeek(mod.week)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-400 text-neutral-950 border-amber-300 shadow-lg shadow-amber-400/10'
                    : 'bg-neutral-900/80 text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-black uppercase tracking-wider ${isSelected ? 'text-neutral-900' : 'text-amber-400'}`}>
                    Semana 0{mod.week}
                  </span>
                  <div className={`p-1 rounded ${isSelected ? 'bg-neutral-950/10 text-neutral-950' : 'bg-neutral-800 text-neutral-400'}`}>
                    {weekIcons[idx]}
                  </div>
                </div>
                <p className="text-xs font-bold line-clamp-1 leading-snug">
                  {mod.title.split(':')[1]?.trim() || mod.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Module Details Card */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Module Content & Topics */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3 text-xs text-amber-400 font-semibold mb-2">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Tempo sugerido: {currentModule.exerciseTime}
                  </span>
                  <span>·</span>
                  <span>Módulo {currentModule.week} de 4</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {currentModule.title}
                </h3>
                <p className="text-sm text-neutral-300 mt-2 leading-relaxed font-normal">
                  {currentModule.description}
                </p>
              </div>

              {/* Topics Included */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                  O que você vai aplicar nesta etapa:
                </span>
                <div className="space-y-2.5">
                  {currentModule.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-200 leading-snug">
                        {topic}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Outcome Highlight */}
              <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-4 flex items-start gap-3">
                <Trophy className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    Resultado Esperado ao Final desta Semana:
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    {currentModule.keyOutcome}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual Proof for this Module */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800 border border-neutral-700/80 relative shadow-lg">
                <img
                  src={moduleImages[selectedWeek]?.src}
                  alt={currentModule.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-neutral-200 bg-neutral-950/80 backdrop-blur-sm p-2 rounded-lg border border-neutral-700/60">
                  <p className="font-medium text-[11px] leading-snug">
                    {moduleImages[selectedWeek]?.caption}
                  </p>
                </div>
              </div>

              <div className="mt-6 w-full">
                <button
                  onClick={onOpenCheckout}
                  className="w-full py-3 px-5 text-xs font-black uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>LIBERAR TODOS OS 7 MÓDULOS AGORA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
