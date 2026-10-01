import React from 'react';
import { ShieldCheck, CheckCircle2, RotateCcw } from 'lucide-react';

interface GuaranteeSectionProps {
  onOpenCheckout: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="bg-[#f5f2eb] text-neutral-900 py-16 lg:py-20 border-b border-neutral-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white border-2 border-amber-300 rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8">
          {/* Badge Icon */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-amber-100 border-4 border-amber-400 flex flex-col items-center justify-center text-amber-900 shadow-inner">
              <ShieldCheck className="w-10 h-10 text-amber-600 mb-0.5" />
              <span className="text-[10px] font-black uppercase tracking-wider">7 DIAS</span>
            </div>
            <span className="text-xs font-black uppercase text-amber-900 tracking-wider mt-2">
              RISCO ZERO
            </span>
          </div>

          {/* Guarantee Content */}
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded">
              <span>GARANTIA INCONDICIONAL DE SATISFAÇÃO</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">
              Você Testa por 7 Dias. Se Não Ver Mudança, Devolvemos 100% do Seu Dinheiro.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
              Temos tanta certeza do poder da comunicação positiva que assumimos todo o risco financeiro. Acesse o guia, leia os módulos e comece os primeiros exercícios de atenção e guia frouxa.
            </p>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
              Se por qualquer motivo você achar que o método não serviu para o seu cão, basta nos enviar um único e-mail dentro do prazo de 7 dias e estornaremos 100% do valor pago. Sem perguntas incômodas, sem letras miúdas.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-bold text-neutral-800">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Reembolso em 1 clique
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <RotateCcw className="w-4 h-4 text-amber-600" />
                Segurança total ao consumidor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
