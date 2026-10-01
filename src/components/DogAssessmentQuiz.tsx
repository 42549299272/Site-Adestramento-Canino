import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';

interface DogAssessmentQuizProps {
  onOpenCheckout: () => void;
}

export const DogAssessmentQuiz: React.FC<DogAssessmentQuizProps> = ({ onOpenCheckout }) => {
  const [ageGroup, setAgeGroup] = useState<string>('adult');
  const [mainIssue, setMainIssue] = useState<string>('leash');
  const [timeAvailable, setTimeAvailable] = useState<string>('10min');
  const [showResult, setShowResult] = useState<boolean>(false);

  const getDiagnosis = () => {
    switch (mainIssue) {
      case 'leash':
        return {
          title: 'Foco Principal: Módulo 2 (Passeios Sem Puxões)',
          description:
            'O hábito de puxar na coleira é o mais rápido de corrigir com o método da "Guia Frouxa Natural". Seu cão começará a sincronizar o ritmo nos primeiros 4 a 7 dias.',
          quickTip: 'Exercício prioritário: Treino da Guia em U dentro de casa por 8 minutos diários.',
        };
      case 'visits':
        return {
          title: 'Foco Principal: Módulo 3 (Boas Maneiras & Campainha)',
          description:
            'Pular e latir na porta decorrem de excitação e falta de um comportamento alternativo recompensador. O protocolo "Comando Lugar" condiciona o cão a correr para a caminha ao ouvir a campainha.',
          quickTip: 'Exercício prioritário: Dessensibilização de campainha com petisco de alto valor.',
        };
      case 'recall':
        return {
          title: 'Foco Principal: Módulos 1 e 4 (Atenção & Chamado Vital)',
          description:
            'A falta de resposta ao nome decorre de repetição vazia (o cão aprendeu a ignorar). O Marcador Positivo resgata o reflexo imediato de olhar para você.',
          quickTip: 'Exercício prioritário: O jogo do foco visual magnético em menos de 1 segundo.',
        };
      default:
        return {
          title: 'Foco Principal: Módulos 1 e 3 (Autocontrole & Modo Desligar)',
          description:
            'Hiperatividade e destruição são sinais de energia mental acumulada. Os exercícios práticos do guia cansam a mente do cão de forma saudável.',
          quickTip: 'Exercício prioritário: Atividades de enriquecimento mental e comando de descanso.',
        };
    }
  };

  return (
    <section className="bg-white text-neutral-900 py-16 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-amber-50/70 via-neutral-50 to-amber-50/40 border border-amber-200/80 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TESTE RÁPIDO DE 30 SEGUNDOS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">
              Descubra o Plano Ideal para o Seu Cão
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Selecione o perfil do seu cão e veja exatamente como o método resolverá o problema.
            </p>
          </div>

          {!showResult ? (
            <div className="space-y-6">
              {/* Question 1: Age */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-800 block mb-2">
                  1. Qual é a idade aproximada do seu cão?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'puppy', label: 'Filhote (< 6 meses)' },
                    { id: 'young', label: 'Jovem (6m a 2 anos)' },
                    { id: 'adult', label: 'Adulto (2 a 7 anos)' },
                    { id: 'senior', label: 'Sênior (7+ anos)' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAgeGroup(item.id)}
                      className={`p-3 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                        ageGroup === item.id
                          ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                          : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Main Issue */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-800 block mb-2">
                  2. Qual é o comportamento que mais te incomoda hoje?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'leash', label: 'Puxa muito a guia durante os passeios' },
                    { id: 'visits', label: 'Pula nas visitas ou enlouquece com a campainha' },
                    { id: 'recall', label: 'Ignora quando chamado ou não atende o nome' },
                    { id: 'hyper', label: 'Hiperativo, ansioso ou destrói coisas' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setMainIssue(item.id)}
                      className={`p-3 rounded-xl text-xs font-bold text-left border transition-all cursor-pointer ${
                        mainIssue === item.id
                          ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                          : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Time Available */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-800 block mb-2">
                  3. Quanto tempo você tem para praticar por dia?
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: '10min', label: 'Apenas 10 min/dia' },
                    { id: '15min', label: '15 a 20 min/dia' },
                    { id: '30min', label: '30 min ou mais' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTimeAvailable(item.id)}
                      className={`p-3 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                        timeAvailable === item.id
                          ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                          : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-center">
                <button
                  type="button"
                  onClick={() => setShowResult(true)}
                  className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 mx-auto"
                >
                  <span>Gerar Diagnóstico Personalizado</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-6 border border-neutral-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Comportamento 100% Corrigível em 30 Dias
                  </span>
                </div>
                <button
                  onClick={() => setShowResult(false)}
                  className="text-xs text-neutral-500 hover:text-neutral-900 flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  Refazer
                </button>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-black text-neutral-950">
                  {getDiagnosis().title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 mt-1 leading-relaxed">
                  {getDiagnosis().description}
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-xs text-amber-900 font-semibold">
                💡 {getDiagnosis().quickTip}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <span className="text-xs text-neutral-600">
                  Você receberá as instruções completas no Guia de Adestramento Canino.
                </span>
                <button
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto px-6 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shrink-0 cursor-pointer"
                >
                  Acessar Minha Solução por R$ 10
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
