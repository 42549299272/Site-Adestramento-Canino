import React, { useState, useEffect } from 'react';
import { Zap, ShieldCheck } from 'lucide-react';
import { PRICING_DETAILS } from '../data/guideData';

interface StickyMobileCtaProps {
  onOpenCheckout: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOpenCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3">
      {/* Price tag */}
      <div className="flex flex-col">
        <span className="text-[10px] text-neutral-400 line-through">De {PRICING_DETAILS.regularPrice}</span>
        <div className="flex items-baseline gap-1">
          <span className="text-base font-black text-amber-400 tracking-tight">
            {PRICING_DETAILS.currentPrice}
          </span>
          <span className="text-[10px] text-neutral-300 font-medium">à vista</span>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={onOpenCheckout}
        className="flex-1 py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-black text-xs uppercase tracking-wider rounded-lg shadow-md flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-95 transition-all"
      >
        <Zap className="w-3.5 h-3.5 fill-current shrink-0" />
        <span>Garantir por R$ 10</span>
      </button>
    </div>
  );
};
