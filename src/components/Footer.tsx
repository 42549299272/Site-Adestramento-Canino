import React from 'react';
import { ShieldCheck, Mail, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070a] text-neutral-400 py-12 border-t border-neutral-900 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-neutral-900">
          {/* Brand & mission */}
          <div className="md:col-span-6 space-y-3">
            <span className="text-base font-black text-white tracking-tight uppercase block">
              GUIA DE ADESTRAMENTO CANINO
            </span>
            <p className="text-neutral-400 max-w-md leading-relaxed font-normal">
              Manual prático focado na transformação comportamental de cães através do reforço positivo e da comunicação clara (gestual e verbal), sem o uso de punições físicas, força bruta ou coleiras de estrangulamento.
            </p>
            <div className="flex items-center gap-2 text-neutral-400 pt-1">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Suporte ao aluno: suporte@guiadeadestramentocanino.com.br</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-white block mb-2">
              Navegação
            </span>
            <ul className="space-y-1.5 font-medium">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-amber-400 transition-colors">
                  O Método Positivo
                </a>
              </li>
              <li>
                <a href="#transformacoes" className="hover:text-amber-400 transition-colors">
                  As 6 Transformações
                </a>
              </li>
              <li>
                <a href="#cronograma" className="hover:text-amber-400 transition-colors">
                  Cronograma 30 Dias
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-amber-400 transition-colors">
                  Depoimentos de Tutores
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Security & Guarantees */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block mb-2">
              Segurança e Acesso
            </span>
            <div className="space-y-2 text-neutral-400">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Checkout 100% Criptografado</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Garantia Legal de 7 Dias</span>
              </div>
              <div className="pt-2">
                <span className="text-[11px] text-neutral-500 block">
                  Envio automático imediato no e-mail cadastrado.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-[11px] text-neutral-400 leading-relaxed text-center sm:text-left">
          <p>
            <strong>Aviso Legal Importante:</strong> Os resultados podem variar de acordo com a consistência, dedicação do tutor e histórico comportamental específico do cão. Este produto é um material educacional voltado à tutores e não substitui consultas médico-veterinárias em caso de sintomas clínicos ou dores físicas no animal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-neutral-900 text-neutral-400">
            <p>© {new Date().getFullYear()} Guia de Adestramento Canino. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4 text-neutral-400">
              <span className="hover:text-neutral-300 cursor-pointer">Termos de Uso</span>
              <span>·</span>
              <span className="hover:text-neutral-300 cursor-pointer">Política de Privacidade</span>
              <span>·</span>
              <span className="hover:text-neutral-300 cursor-pointer">Aviso de Isenção</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
