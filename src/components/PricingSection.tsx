import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, Zap, Lock, CreditCard, Sparkles, Clock, QrCode } from 'lucide-react';
import { PRICING_DETAILS } from '../data/guideData';

interface PricingSectionProps {
  onOpenCheckout: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenCheckout }) => {
  // 15-minute countdown timer for urgency
  const [timeLeft, setTimeLeft] = useState<{ minutes: number; seconds: number }>({
    minutes: 14,
    seconds: 52,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="oferta" className="bg-[#060a0f] text-white py-16 lg:py-24 border-b border-neutral-800 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACESSO IMEDIATO · CONDIÇÃO EXCLUSIVA DE LANÇAMENTO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight text-balance">
            Tudo o que Você Precisa para Ter um Cão Educado e Calmo em 30 Dias
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 font-normal leading-relaxed text-balance">
            Economize centenas de reais em sessões de adestramento tradicional agressivo e tenha o método definitivo nas palmas das suas mãos.
          </p>
        </div>

        {/* Urgent Countdown Banner */}
        <div className="bg-neutral-900/90 border border-amber-500/40 rounded-xl p-3 sm:p-4 text-center max-w-xl mx-auto mb-8 flex items-center justify-center gap-3">
          <Clock className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold text-neutral-200">
            Esta condição especial de R$ 10 expira em:
          </span>
          <div className="flex items-center gap-1 font-mono font-black text-amber-400 text-sm sm:text-base tabular-nums">
            <span className="bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span>:</span>
            <span className="bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
              {formatNumber(timeLeft.seconds)}
            </span>
          </div>
        </div>

        {/* Main Pricing Box */}
        <div className="bg-neutral-900 border-2 border-amber-400/90 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          {/* Top highlight ribbon */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-neutral-950 text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
            PACOTE COMPLETO COM 90% DE DESCONTO
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: What's Included */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                O Que Você Recebe Imediatamente:
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      Guia de Adestramento Canino (Manual de 30 Dias)
                    </p>
                    <p className="text-xs text-neutral-400">Passo a passo com os 4 módulos estruturados</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      Bônus #1: Guia de Socialização Sem Reatividade
                    </p>
                    <p className="text-xs text-neutral-400">Apresentação sem estresse com pessoas e cães</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      Bônus #2: Checklist Diário de 10 Minutos (PDF Imprimível)
                    </p>
                    <p className="text-xs text-neutral-400">Treinos rápidos para quem tem vida corrida</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      Bônus #3: Manual SOS Anti-Ansiedade de Separação
                    </p>
                    <p className="text-xs text-neutral-400">Como sair de casa sem uivos ou destruição</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      Acesso Vitalício + Atualizações Gratuitas
                    </p>
                    <p className="text-xs text-neutral-400">Leia quando quiser no celular, tablet ou PC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Price box & Action CTA */}
            <div className="md:col-span-5 bg-neutral-950 p-6 sm:p-7 rounded-2xl border border-neutral-800 flex flex-col justify-between text-center">
              <div>
                <span className="text-xs text-neutral-400 block line-through font-semibold">
                  De {PRICING_DETAILS.regularPrice} por apenas:
                </span>
                <div className="my-2">
                  <span className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
                    {PRICING_DETAILS.currentPrice}
                  </span>
                </div>
                <p className="text-xs text-neutral-300 font-medium">
                  ou {PRICING_DETAILS.installments} no cartão
                </p>
                <div className="mt-2 inline-block bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
                  Aprovação Imediata no PIX ou Cartão
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  onClick={onOpenCheckout}
                  className="w-full py-4 px-6 text-sm font-black uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Zap className="w-4 h-4 fill-current shrink-0" />
                  <span>GARANTIR MEU ACESSO AGORA</span>
                </button>

                <div className="text-[11px] text-neutral-400 space-y-1">
                  <p className="flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    Pagamento 100% Seguro e Criptografado
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-amber-400" />
                    Garantia Incondicional de 7 Dias
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security and Payment Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5">
            <QrCode className="w-4 h-4 text-emerald-400" />
            PIX (Acesso Liberado em 3 Segundos)
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <CreditCard className="w-4 h-4 text-blue-400" />
            Cartões de Crédito em até 5x
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Plataforma Segura e Auditada
          </span>
        </div>
      </div>
    </section>
  );
};
