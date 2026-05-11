"use client";

import Link from "next/link";
import { useI18n } from "@/components/LocaleProvider";

export default function SiteFooter() {
  const { t } = useI18n();

  const quick = [
    { labelKey: "footer.quick.home", href: "/" },
    { labelKey: "footer.quick.about", href: "/about" },
    { labelKey: "footer.quick.pricing", href: "/pricing" },
    { labelKey: "footer.quick.contact", href: "/contact" },
  ];

  const courses = [
    { labelKey: "footer.course1", href: "/courses/hifz" },
    { labelKey: "footer.course2", href: "/courses/tajweed" },
    { labelKey: "footer.course3", href: "/courses/arabic" },
    { labelKey: "footer.course4", href: "/courses/islamic" },
  ];

  return (
    <footer className="bg-[#13281f] text-[#e8efe9] pt-16 pb-10 px-4 sm:px-6 border-t border-[#B8860B]/25">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
        <div className="lg:col-span-1 space-y-4">
          <p className="font-serif text-xl font-bold text-[#F2D58C] tracking-tight">
            Nibras Network
          </p>
          <p className="text-sm text-[#b8c9bf] leading-relaxed max-w-xs">
            {t("footer.blurb")}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A017] mb-4">
            {t("footer.quickLinks")}
          </h3>
          <ul className="space-y-2.5">
            {quick.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-[#dce8df] hover:text-[#F2D58C] transition-colors"
                >
                  {t(l.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A017] mb-4">
            {t("footer.courses")}
          </h3>
          <ul className="space-y-2.5">
            {courses.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-[#dce8df] hover:text-[#F2D58C] transition-colors"
                >
                  {t(l.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A017] mb-4">
            {t("footer.contact")}
          </h3>
          <ul className="space-y-3 text-sm text-[#dce8df]">
            <li>
              <a
                href="mailto:info@nibras.network"
                className="hover:text-[#F2D58C] transition-colors"
              >
                info@nibras.network
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/201099493640"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#F2D58C] transition-colors"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                {t("footer.whatsAppLine")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-white/10 text-center text-xs text-[#8fa396]">
        <p>
          © {new Date().getFullYear()} Nibras Network. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
