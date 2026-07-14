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
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`fixed bottom-4 md:bottom-8 z-50 w-full max-w-[calc(100vw-2rem)] md:max-w-2xl ${isRtl ? 'right-4 md:right-8' : 'left-4 md:left-8'}`}
        >
          <div className="relative flex flex-row items-center bg-[#f7faeb] border border-[#e2e8d5] shadow-2xl rounded-2xl p-3 md:p-6 overflow-hidden pr-8 md:pr-6">
            {/* Background elements (sparkles) */}
            <div className="absolute top-2 left-[20%] text-yellow-300 opacity-50">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5L12 0z" />
              </svg>
            </div>
            <div className="absolute bottom-2 left-6 text-yellow-300 opacity-50">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5L12 0z" />
              </svg>
            </div>

            {/* Left section: Gift Icon */}
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-20 md:h-20 bg-[#eef3db] rounded-full border-2 border-white rtl:ml-3 ltr:mr-3 md:rtl:ml-6 md:ltr:mr-6 z-10">
              <Gift className="w-6 h-6 md:w-10 md:h-10 text-[#305546]" />
            </div>

            {/* Center section: Offer text */}
            <div className="flex-grow z-10 text-start">
              <h4 className="text-[#1a382d] font-bold text-xs md:text-lg mb-0.5 md:mb-1">
                {isRtl ? "عرض لفترة محدودة" : "Limited Time Offer"}
              </h4>
              <div className="flex flex-col md:flex-row md:items-baseline items-start md:gap-2">
                <span className="text-xl md:text-5xl font-extrabold text-[#d79d34] drop-shadow-sm leading-tight">
                  {isRtl ? "خصم 30%" : "30% OFF"}
                </span>
                <span className="text-[#214336] font-semibold text-[10px] md:text-base">
                  {isRtl ? "لأول 3 أشهر" : "for the first 3 months"}
                </span>
              </div>
            </div>

            {/* Vertical Divider (desktop only) */}
            <div className="hidden md:block w-[1px] h-16 bg-[#214336] opacity-10 mx-6 z-10"></div>

            {/* Right section: Action/Info */}
            <div className="hidden md:flex items-center gap-3 z-10 max-w-[200px] text-start">
              <BadgePercent className="w-8 h-8 text-[#305546] flex-shrink-0" />
              <p className="text-[#3b5d50] text-sm font-medium">
                {isRtl ? "ابدأ رحلة التعلم اليوم ووفر أكثر!" : "Start your learning journey today and save more!"}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 rtl:left-2 ltr:right-2 p-1 bg-white/50 hover:bg-white rounded-full text-[#305546] transition-colors z-20"
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
