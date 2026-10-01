import React, { useState } from 'react';
import { X, Check, Lock, ShieldCheck, QrCode, CreditCard, Sparkles, Copy, CheckCheck, ArrowRight, Download } from 'lucide-react';
import { PRICING_DETAILS } from '../data/guideData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [copiedPix, setCopiedPix] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const simulatedPixCode =
    '00020126580014br.gov.bcb.pix0136guia-adestramento-f157c40c@pagamento.com.br520400005303986540510.005802BR5925GUIA ADESTRAMENTO LTDA6009SAO PAULO62070503***6304E8A2';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(simulatedPixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !email.includes('@')) {
      setFormError('Por favor, informe seu nome e um e-mail válido para receber o guia.');
      return;
    }
    setFormError('');
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-neutral-900 border border-neutral-700 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl text-white relative my-8">
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-lg bg-neutral-800/80 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Header */}
            <div className="bg-neutral-950 p-6 border-b border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CHECKOUT SEGURO COM 90% DE DESCONTO</span>
              </div>
              <h3 className="text-xl font-black text-white tracking-tight">
                Garantir Guia de Adestramento Canino
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Acesso imediato no e-mail com todos os 3 bônus exclusivos inclusos.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {formError && (
                <div className="p-3 bg-red-950/80 border border-red-800 rounded-lg text-xs text-red-200">
                  {formError}
                </div>
              )}

              {/* Personal Info */}
              <div className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 block mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João da Silva"
                    className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 block mb-1">
                    Seu Melhor E-mail (Onde o guia será enviado) *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ex: seuemail@gmail.com"
                    className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 block mb-1">
                    WhatsApp para Suporte (Opcional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                  Forma de Pagamento
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'bg-amber-400/10 border-amber-400 text-white'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">PIX (Imediato)</p>
                      <p className="text-[10px] text-emerald-400 font-semibold">Liberação em 3s</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-amber-400/10 border-amber-400 text-white'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Cartão de Crédito</p>
                      <p className="text-[10px] text-neutral-400">Até 2x de R$ 5,35</p>
                    </div>
                  </button>
                </div>
              </div>

              {paymentMethod === 'pix' && (
                <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Chave PIX Copia e Cola:</span>
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      {copiedPix ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedPix ? 'Copiado!' : 'Copiar Chave'}
                    </button>
                  </div>
                  <p className="font-mono text-[10px] text-neutral-400 truncate bg-neutral-900 p-2 rounded">
                    {simulatedPixCode}
                  </p>
                </div>
              )}

              {/* Summary of Price */}
              <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-neutral-400 block">Total a pagar:</span>
                  <span className="text-xl font-black text-amber-400 tracking-tight">
                    {PRICING_DETAILS.currentPrice}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-emerald-400 font-bold block">
                    ✓ 3 Bônus Inclusos (R$ 0)
                  </span>
                  <span className="text-[10px] text-neutral-400">
                    Garantia incondicional de 7 dias
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 disabled:bg-neutral-700 text-neutral-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-amber-500/10 cursor-pointer flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <span>Processando e Liberando Acesso...</span>
                ) : (
                  <>
                    <span>Confirmar e Liberar Download Imediato</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>Ambiente Seguro com Criptografia de 256 bits</span>
              </div>
            </form>
          </div>
        ) : (
          /* Order Confirmation / Success View */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                PEDIDO CONFIRMADO COM SUCESSO!
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Parabéns, {name.split(' ')[0]}!
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-sm mx-auto leading-relaxed">
                Seu acesso completo ao <strong className="text-white">Guia de Adestramento Canino</strong> e aos 3 bônus exclusivos foi enviado para o e-mail:
              </p>
              <div className="mt-2 inline-block px-3 py-1 bg-neutral-950 border border-neutral-700 rounded-lg text-xs font-mono font-bold text-amber-400">
                {email}
              </div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 text-left text-xs space-y-2">
              <p className="font-bold text-neutral-200">Próximos passos imediatos:</p>
              <ul className="space-y-1.5 text-neutral-400 list-disc list-inside">
                <li>Abra sua caixa de entrada e procure pelo e-mail com o assunto "Seu Acesso ao Guia de Adestramento".</li>
                <li>Baixe o PDF no celular ou tablet para começar os exercícios da Semana 1 hoje mesmo.</li>
                <li>Qualquer dúvida, conte com nosso suporte direto.</li>
              </ul>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="#cronograma"
                onClick={handleReset}
                className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Acessar Cronograma e Começar</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full py-2 text-xs text-neutral-400 hover:text-white transition-colors"
              >
                Fechar Janela
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
