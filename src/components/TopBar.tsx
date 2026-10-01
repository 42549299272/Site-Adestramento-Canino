import React from 'react';

interface TopBarProps {
  onOpenCheckout: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenCheckout }) => {
  return (
    <>
      {/* Subtle top announcement bar */}
      <div className="bg-amber-500 text-neutral-950 text-[11px] sm:text-xs font-semibold py-1.5 px-3 text-center tracking-wide flex items-center justify-center gap-1.5 sm:gap-2 leading-tight w-full overflow-hidden">
        <span className="font-extrabold uppercase tracking-wider whitespace-nowrap">Oferta Especial:</span>
        <span className="font-medium hidden md:inline">Desconto de 90% liberado por tempo limitado</span>
        <button
          onClick={onOpenCheckout}
          className="font-bold underline cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap bg-transparent border-0 p-0 text-neutral-950 text-[11px] sm:text-xs"
        >
          Garantir por R$ 10
        </button>
      </div>

      {/* Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav links) — Zone 3 (Primary Action) */}
      <header className="sticky top-0 z-40 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 transition-all w-full">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            className="text-xs sm:text-base md:text-lg font-black tracking-tight text-white hover:text-amber-400 transition-colors shrink truncate min-w-0"
          >
            GUIA DE ADESTRAMENTO
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-semibold uppercase tracking-wider text-neutral-300 shrink-0">
            <a href="#metodo" className="hover:text-amber-400 transition-colors">
              O Método
            </a>
            <a href="#transformacoes" className="hover:text-amber-400 transition-colors">
              6 Promessas
            </a>
            <a href="#cronograma" className="hover:text-amber-400 transition-colors">
              Cronograma 30 Dias
            </a>
            <a href="#depoimentos" className="hover:text-amber-400 transition-colors">
              Resultados
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center shrink-0">
            <button
              onClick={onOpenCheckout}
              className="px-3 sm:px-5 py-1.5 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md shadow-sm transition-all transform active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <span className="sm:hidden">Garantir (R$ 10)</span>
              <span className="hidden sm:inline">Garantir Meu Acesso</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
