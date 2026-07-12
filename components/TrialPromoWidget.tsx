"use client";

import { useState, useEffect } from "react";
import { X, Percent } from "lucide-react";
import { useI18n } from "@/components/LocaleProvider";

export default function TrialPromoWidget() {
  const { locale } = useI18n();
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Small delay before triggering the entrance animation
    const timer = setTimeout(() => setIsMounted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const isAr = locale === "ar";
  const title = isAr ? "خصم ٣٠٪" : "30% OFF";
  const subtitle = isAr ? "على أول ٣ شهور" : "For the first 3 months";
  const badge = isAr ? "عرض خاص" : "SPECIAL OFFER";

  return (
    <div 
      className={`fixed z-[90] bottom-[88px] left-1/2 md:bottom-auto md:left-auto md:top-1/2 
        ${isAr ? "md:left-4 xl:left-8" : "md:right-4 xl:right-8"}
        w-max max-w-[calc(100vw-32px)] md:max-w-xs
        bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(28,122,69,0.3)] 
        border border-[#eaf4ed] overflow-hidden 
        transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${!isMounted 
          ? "opacity-0 translate-y-16 scale-90 md:translate-y-[-50%] " + (isAr ? "md:-translate-x-16" : "md:translate-x-16") 
          : "opacity-100 translate-y-0 scale-100 -translate-x-1/2 md:translate-x-0 md:translate-y-[-50%]"
        }`}
    >
      {/* Decorative top border */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#1c7a45] to-[#2E5042]" />

      <button 
        onClick={() => setIsVisible(false)}
        className={`absolute top-2.5 ${isAr ? "left-2.5" : "right-2.5"} p-1.5 rounded-full hover:bg-[#f4f7f5] text-[#9ca3af] hover:text-[#1c7a45] transition-colors`}
        aria-label="Close"
      >
        <X size={16} />
      </button>
      
      <div className="p-4 sm:p-5 flex items-center md:items-start gap-3 sm:gap-4">
        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#f4f8f1] rounded-xl flex items-center justify-center text-[#1c7a45] shadow-sm border border-[#eaf4ed] rotate-3">
          <Percent size={20} strokeWidth={2.5} className="-rotate-3" />
        </div>

        <div className="flex-none pt-0.5 pr-4 rtl:pr-0 rtl:pl-4">
          <div className="inline-block px-2 py-0.5 bg-[#fdf8eb] text-[#b45309] text-[10px] font-bold rounded mb-1 sm:mb-1.5">
            {badge}
          </div>
          <h4 className="font-extrabold text-[#1C3A2E] text-[18px] sm:text-[20px] leading-none mb-1 sm:mb-1.5 tracking-tight">{title}</h4>
          <p className="text-[#5a7a6e] text-[12px] sm:text-[13px] font-bold leading-snug">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
