"use client";

import { useState, useEffect } from "react";
import { Gift, X, BadgePercent } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/components/LocaleProvider";

export default function OfferBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { locale } = useI18n();
  const isRtl = locale === "ar";

  useEffect(() => {
    // Show banner after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 100 : -100, y: "-50%" }}
          animate={{ opacity: 1, x: 0, y: "-50%" }}
          exit={{ opacity: 0, x: isRtl ? 100 : -100, y: "-50%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`fixed top-[85%] z-50 w-full max-w-[calc(100vw-2rem)] md:max-w-2xl ${isRtl ? 'right-4 md:right-8 origin-right' : 'left-4 md:left-8 origin-left'}`}
        >
          <div className="relative flex flex-col md:flex-row items-center bg-[#f7faeb] border border-[#e2e8d5] shadow-2xl rounded-2xl p-4 md:p-6 overflow-hidden">
            {/* Background elements (sparkles) */}
            <div className="absolute top-4 left-[20%] text-yellow-300 opacity-50">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5L12 0z" />
              </svg>
            </div>
            <div className="absolute bottom-4 left-6 text-yellow-300 opacity-50">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5L12 0z" />
              </svg>
            </div>

            {/* Left section: Gift Icon */}
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#eef3db] rounded-full border-2 border-white mb-4 md:mb-0 md:mr-6 z-10">
              <Gift className="w-8 h-8 md:w-10 md:h-10 text-[#305546]" />
            </div>

            {/* Center section: Offer text */}
            <div className="flex-grow text-center md:text-start z-10 mb-4 md:mb-0">
              <h4 className="text-[#1a382d] font-bold text-base md:text-lg mb-1">
                {isRtl ? "عرض لفترة محدودة" : "Limited Time Offer"}
              </h4>
              <div className="flex flex-col md:flex-row md:items-baseline items-center gap-1 md:gap-2">
                <span className="text-4xl md:text-5xl font-extrabold text-[#d79d34] drop-shadow-sm">
                  {isRtl ? "خصم 30%" : "30% OFF"}
                </span>
                <span className="text-[#214336] font-semibold text-sm md:text-base">
                  {isRtl ? "لأول 3 أشهر" : "for the first 3 months"}
                </span>
              </div>
            </div>

            {/* Vertical Divider (desktop only) */}
            <div className="hidden md:block w-[1px] h-16 bg-[#214336] opacity-10 mx-6 z-10"></div>

            {/* Right section: Action/Info */}
            <div className="flex items-center gap-3 z-10 md:max-w-[200px] text-center md:text-start">
              <BadgePercent className="w-6 h-6 md:w-8 md:h-8 text-[#305546] hidden md:block flex-shrink-0" />
              <p className="text-[#3b5d50] text-xs md:text-sm font-medium">
                {isRtl ? "ابدأ رحلة التعلم اليوم ووفر أكثر!" : "Start your learning journey today and save more!"}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 rtl:left-2 ltr:right-2 md:top-3 md:rtl:left-3 md:ltr:right-3 p-1.5 bg-white/50 hover:bg-white rounded-full text-[#305546] transition-colors"
              aria-label={isRtl ? "إغلاق العرض" : "Close offer"}
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
