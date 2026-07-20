"use client";

import Image from "next/image";
import {
  Award,
  BadgeCheck,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  Compass,
  Gift,
  HeartHandshake,
  MessageSquareQuote,
  Scale,
  Sparkles,
  Target,
  ThumbsDown,
  ThumbsUp,
  UserRound,
  Users,
  XCircle,
} from "lucide-react";

/* ─────────────────────────────────────────
   GOLD DIVIDER
───────────────────────────────────────── */
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C79B3B]/60" />
      <span className="text-[#C79B3B] text-lg select-none" aria-hidden>⸻</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C79B3B]/60" />
    </div>
  );
}

/* ─────────────────────────────────────────
   SECTION BADGE
───────────────────────────────────────── */
function SectionBadge({ icon: Icon, label }: { icon: typeof Sparkles; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#C79B3B]/35 bg-[#FFF8EA] px-4 py-2 text-[11px] font-semibold uppercase tracking-[.13em] text-[#A2761D]">
      <Icon className="h-4 w-4" aria-hidden />
      {label}
    </div>
  );
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const honestCant = [
  "We're not the largest Islamic academy online",
  "We don't have hundreds of teachers",
  "We don't have celebrity scholars",
  "We can't teach you Arabic in 30 days",
];

const honestCan = [
  "Personal attention — we know our students by name",
  "Qualified teachers — every single one personally vetted",
  "Honest communication — realistic timelines and expectations",
  "Fair pricing — affordable rates with no hidden fees",
  "Genuine care — your success matters to us personally",
  "Quality teaching — focused on your actual learning",
];

const eightReasons: {
  n: string;
  title: string;
  icon: typeof Sparkles;
  blocks: { type: "p" | "ul"; text?: string; items?: string[] }[];
}[] = [
  {
    n: "1", title: "You're Not Just a Number", icon: Users,
    blocks: [{ type: "p", text: "We know you, remember your progress, and genuinely celebrate your achievements. When you email us, you often hear from the founder directly." }],
  },
  {
    n: "2", title: "Every Teacher is Personally Vetted", icon: BadgeCheck,
    blocks: [
      { type: "p", text: "What we require:" },
      { type: "ul", items: ["Proper Islamic qualification (degree or Ijazah)", "Minimum 3-5 years teaching experience", "Actual teaching demonstration", "Background verification", "Personal interview about approach and character", "Trial period with monitored lessons"] },
    ],
  },
  {
    n: "3", title: "Honest Pricing, No Games", icon: Scale,
    blocks: [
      { type: "ul", items: ["Price per hour clearly stated", "All materials included free", "No registration fees", "No mandatory minimum months", "No cancellation penalties", "No \"premium access\" upsells"] },
      { type: "p", text: "What you see is exactly what you pay." },
    ],
  },
  {
    n: "4", title: "Free Support for New Muslims", icon: Gift,
    blocks: [
      { type: "p", text: "If you're a revert:" },
      { type: "ul", items: ["First month completely free (no card required)", "Extended support as you need it", "Patient teachers who understand your journey", "Help with basic questions about Islam", "No pressure, no rush, no judgment"] },
      { type: "p", text: "Why? Because welcoming new Muslims is part of our faith, not a marketing strategy." },
    ],
  },
  {
    n: "5", title: "Realistic Timelines", icon: CalendarClock,
    blocks: [
      { type: "p", text: "We tell you the truth:" },
      { type: "ul", items: ["Noorani Qaida: 6-10 weeks (not \"2 weeks\")", "Basic Quran reading: 3-4 months (not \"1 month\")", "Juz Amma memorization: 6-8 months (not \"3 months\")", "Full Quran memorization: 24-36 months (not \"6 months\")"] },
      { type: "p", text: "We respect your intelligence and set proper expectations." },
    ],
  },
  {
    n: "6", title: "Flexible and Understanding", icon: HeartHandshake,
    blocks: [
      { type: "p", text: "Life happens. We understand:" },
      { type: "ul", items: ["Need to reschedule? Free and easy", "Sick child? We'll wait", "Traveling? We adjust", "Difficult week? No pressure", "Need a break? Come back when ready"] },
    ],
  },
  {
    n: "7", title: "Quality Over Quantity", icon: Compass,
    blocks: [{ type: "p", text: "We're not trying to become the biggest or teach 10,000 students. We focus on teaching each student properly, building real relationships, and ensuring genuine learning happens." }],
  },
  {
    n: "8", title: "We Practice What We Preach", icon: CheckCircle2,
    blocks: [
      { type: "ul", items: ["We actually give scholarships to those in need", "We actually respond to emails within hours", "We actually know our students' names", "We actually care about your feedback", "We actually pray for our students' success"] },
      { type: "p", text: "This is service to Allah first, business second." },
    ],
  },
];

const appreciateStats = [
  { label: "Affordable pricing for quality teaching", pct: 92 },
  { label: "The patience of my teacher",              pct: 89 },
  { label: "They actually care if I succeed",         pct: 87 },
  { label: "Feeling comfortable to ask questions",    pct: 84 },
  { label: "Honest progress reports",                 pct: 78 },
];

const voices: { nameLine: string; quote: string }[] = [
  { nameLine: "Sarah, USA (New Muslim, 6 months with us)", quote: "I took my Shahadah last year but felt completely lost. Nibras gave me a clear path and a patient teacher who never made me feel stupid for asking basic questions. I can now read Quran in Arabic and understand what I'm reading." },
  { nameLine: "Ahmed, UK (Parent of 2 children)", quote: "The personal online lessons made Quran learning actually enjoyable for my kids. The teacher knows them by name, remembers what they struggled with, and celebrates every small achievement. You can tell they genuinely care." },
  { nameLine: "Fatima, Canada (Professional, Adult learner)", quote: "I appreciated the honesty from the start. They told me exactly how long it would take and never pressured me into expensive packages. Six months in, I'm exactly where they said I'd be." },
  { nameLine: "Harris, Australia (Revert, 1 year with us)", quote: "When they don't know an answer, they say 'Let me research that' instead of making something up. That honesty builds so much trust. I know I'm learning authentic Islam." },
];

const perfectLove = [
  "Value personal attention over big brand names",
  "Want authentic Islamic knowledge, not cultural traditions",
  "Appreciate honesty over sales tactics",
  "Prefer a supportive learning environment",
  "Need flexibility in scheduling",
  "Want to feel like family, not a customer number",
];

const perfectNot = [
  "Only trust the biggest, most famous platforms",
  "Want instant results without consistent effort",
  "Prefer group classes over one-on-one attention",
];

const ourPromiseGive = [
  { emoji: "🤝", label: "Honesty",        desc: "We'll tell you the truth, even when it's not what you want to hear" },
  { emoji: "✨", label: "Quality",         desc: "Every lesson prepared and delivered professionally" },
  { emoji: "🕰️", label: "Respect",        desc: "For your time, your money, and your trust" },
  { emoji: "💬", label: "Support",         desc: "When you need help, we're here" },
  { emoji: "📖", label: "Authenticity",    desc: "Real Islam from qualified teachers" },
  { emoji: "📈", label: "Improvement",     desc: "We listen to feedback and constantly get better" },
];

const ourPromiseAsk = [
  { emoji: "⏳", label: "Patience",    desc: "With us as we grow and improve" },
  { emoji: "💡", label: "Honesty",     desc: "In your feedback" },
  { emoji: "🎯", label: "Commitment",  desc: "To your own learning journey" },
];

const ctaBullets = [
  "One complete trial lesson free",
  "Meet your potential teacher",
  "Experience our teaching style",
  "Ask all your questions",
  "No pressure to continue",
];

/* ═══════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════ */
export default function AboutWhyUsPageContent() {
  return (
    <div className="overflow-x-hidden bg-[#F7F5F0]" dir="ltr">
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-7px); }
        }
        @keyframes shimmer {
          0%   { opacity: 0.55; }
          50%  { opacity: 1; }
          100% { opacity: 0.55; }
        }
        @keyframes fillBar {
          from { width: 0%; }
          to   { width: var(--bar-w); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }

        .fade-in    { opacity: 0; animation: fadeUp 720ms ease forwards; }
        .delay-1    { animation-delay: 0.12s; }
        .delay-2    { animation-delay: 0.28s; }
        .delay-3    { animation-delay: 0.44s; }
        .delay-4    { animation-delay: 0.60s; }
        .float-soft { animation: float 3.2s ease-in-out infinite; }
        .shimmer    { animation: shimmer 3s ease-in-out infinite; }
        .scroll-cue { animation: bounce 1.8s ease-in-out infinite; }

        .hero-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 18px; border-radius: 9999px;
          border: 1px solid rgba(199,155,59,.45);
          background: rgba(199,155,59,.13);
          font-size: 10px; font-weight: 700; letter-spacing: .18em;
          text-transform: uppercase; color: #e3c98f;
        }

        .reason-card {
          transition: transform 0.32s ease, box-shadow 0.32s ease;
        }
        .reason-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(28,58,46,.12);
        }

        .stat-bar-fill {
          height: 100%;
          border-radius: 9999px;
          background: linear-gradient(90deg, #1F463B, #C79B3B);
          animation: fillBar 1.1s cubic-bezier(.22,1,.36,1) forwards;
          animation-delay: 0.2s;
          width: 0%;
        }

        .promise-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .promise-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(28,58,46,.1);
        }
      `}</style>

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/why.png" alt="Why Choose Nibras Network" fill priority sizes="100vw"
            className="object-cover object-[center_25%] blur-[1.5px] scale-110" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0D2920]/35 via-[#0D2920]/22 to-[#0D2920]/78" />
        <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(13,41,32,.55)_100%)]" />

        <div className="relative flex min-h-[100svh] flex-col items-center justify-between px-4 pb-8 pt-[calc(70px+1.5rem)] text-center sm:px-6 sm:pb-10 sm:pt-28">
          <div className="fade-in self-center">
            <span className="hero-pill shimmer inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#E3C98F]" aria-hidden />
              WHY CHOOSE US
            </span>
          </div>

          <div className="mx-auto max-w-3xl flex flex-col items-center gap-5 py-10">
            <h1 className="fade-in delay-1 font-serif text-[1.65rem] font-bold leading-[1.2] text-[#F7F1E3] min-[400px]:text-3xl sm:text-5xl md:text-6xl drop-shadow-sm">
              Why Choose Nibras Network?
            </h1>
            <GoldDivider />
            <p className="fade-in delay-2 max-w-xl text-[15px] leading-8 text-[#CFE1D9]">
              The honest reasons students choose us — and stay with us
            </p>
            <div className="fade-in delay-3 mt-2 flex flex-col items-center gap-2 text-[#A8C9BC]">
              <span className="text-xs tracking-widest uppercase">Discover more</span>
              <svg className="scroll-cue h-5 w-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>

          <div className="fade-in delay-4 flex flex-wrap justify-center gap-3 self-end">
            {[{ Icon: Award, label: "Personal" }, { Icon: BadgeCheck, label: "Vetted" }, { Icon: HeartHandshake, label: "Genuine care" }]
              .map(({ Icon, label }) => (
                <div key={label} className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-center backdrop-blur-sm">
                  <Icon className="mx-auto mb-1 h-6 w-6 text-[#E3C98F]" aria-hidden />
                  <span className="text-xs font-semibold text-[#F5E6BF]">{label}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">

        {/* ══════════════ THE HONEST TRUTH ══════════════ */}
        <section className="mb-12">
          <div className="mb-8 flex justify-center">
            <SectionBadge icon={Scale} label="The Honest Truth" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* CAN'T column */}
            <div className="rounded-3xl border border-red-100 bg-gradient-to-br from-red-50 to-orange-50 p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100">
                  <XCircle className="h-5 w-5 text-red-400" />
                </span>
                <h3 className="font-serif text-lg font-bold text-red-700">What we can&apos;t promise</h3>
              </div>
              <ul className="space-y-3">
                {honestCant.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[13.5px] leading-6 text-red-800/80">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-red-100 flex items-center justify-center text-[10px] font-bold text-red-500">✕</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            {/* CAN column */}
            <div className="rounded-3xl border border-[#C8E6C9] bg-gradient-to-br from-[#F1FAF2] to-[#E8F5E9] p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C8E6C9]">
                  <CheckCircle2 className="h-5 w-5 text-[#2E7D32]" />
                </span>
                <h3 className="font-serif text-lg font-bold text-[#1B5E20]">What we CAN promise</h3>
              </div>
              <ul className="space-y-3">
                {honestCan.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[13.5px] leading-6 text-[#2E5B35]">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-[#A5D6A7] flex items-center justify-center text-[10px] font-bold text-[#1B5E20]">✓</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ══════════════ 8 REAL REASONS ══════════════ */}
        <section className="mb-12">
          <div className="mb-8 flex justify-center">
            <SectionBadge icon={Target} label="8 Real Reasons to Choose Us" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {eightReasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <article key={reason.n}
                  className="reason-card group flex flex-col rounded-3xl border border-[#E5D9C1] bg-white overflow-hidden"
                  style={{ animationDelay: `${idx * 60}ms` }}>
                  {/* Top accent header */}
                  <div className="relative flex items-center gap-3 bg-[#1F463B] px-5 py-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C79B3B]/20 font-serif text-lg font-bold text-[#C79B3B]">
                      {reason.n}
                    </span>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="float-soft h-[18px] w-[18px] text-[#E3C98F]" strokeWidth={1.6} aria-hidden />
                    </div>
                    {/* Decorative gradient line at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C79B3B] via-[#E3C98F] to-transparent" />
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="mb-3 font-serif text-[16px] font-bold leading-snug text-[#17342C]">
                      {reason.title}
                    </h2>
                    <div className="space-y-2.5 text-[12.5px] leading-[1.7] text-[#455B50]">
                      {reason.blocks.map((block, i) => {
                        if (block.type === "p" && block.text) return <p key={i}>{block.text}</p>;
                        if (block.type === "ul" && block.items) {
                          return (
                            <ul key={i} className="space-y-1.5">
                              {block.items.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C79B3B]" />
                                  <span>{item.replace(/^\* /, "")}</span>
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ══════════════ WHAT STUDENTS APPRECIATE ══════════════ */}
        <section className="mb-12 rounded-3xl border border-[#E5D9C1] bg-white p-7 shadow-[0_8px_30px_rgba(28,58,46,.07)] md:p-10">
          <div className="mb-2 flex justify-center">
            <SectionBadge icon={BarChart3} label="What Students Appreciate Most" />
          </div>
          <p className="mb-8 text-center text-[13px] text-[#7A8C83]">From our actual feedback surveys</p>

          <div className="space-y-5">
            {appreciateStats.map(({ label, pct }) => (
              <div key={label}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-[13.5px] font-medium text-[#2C4B3D]">{label}</span>
                  <span className="shrink-0 rounded-full bg-[#1F463B] px-3 py-0.5 text-[12px] font-bold text-[#E3C98F]">
                    {pct}%
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-[#F0EDE4] overflow-hidden">
                  <div
                    className="stat-bar-fill"
                    style={{ "--bar-w": `${pct}%` } as React.CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════ STUDENT VOICES ══════════════ */}
        <section className="mb-12">
          <div className="mb-6 flex justify-center">
            <SectionBadge icon={MessageSquareQuote} label="Student Voices" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {voices.map((v) => (
              <blockquote key={v.nameLine}
                className="relative overflow-hidden rounded-3xl border border-[#E5D9C1] bg-white p-6 shadow-sm md:p-7">
                <span className="pointer-events-none absolute -top-2 -right-2 select-none font-serif text-[72px] font-bold leading-none text-[#F0EDE4] sm:text-[120px]" aria-hidden>
                  &ldquo;
                </span>
                <MessageSquareQuote className="relative mb-3 h-7 w-7 text-[#C79B3B]/70" aria-hidden />
                <p className="relative mb-3 text-[11px] font-semibold uppercase tracking-widest text-[#8F6A1A]">{v.nameLine}</p>
                <p className="relative text-[13.5px] leading-7 text-[#455B50]">&quot;{v.quote}&quot;</p>
              </blockquote>
            ))}
          </div>
        </section>

        {/* ══════════════ WHO WE'RE PERFECT FOR ══════════════ */}
        <section className="mb-12">
          <div className="mb-8 flex justify-center">
            <SectionBadge icon={Target} label="Who We're Perfect For" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Love card */}
            <div className="rounded-3xl border border-[#C8E6C9] bg-gradient-to-br from-[#F1FAF2] to-white p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#A5D6A7]/50">
                  <ThumbsUp className="h-5 w-5 text-[#2E7D32]" />
                </span>
                <h3 className="font-serif text-lg font-bold text-[#1B5E20]">You&apos;ll love Nibras if you…</h3>
              </div>
              <ul className="space-y-3">
                {perfectLove.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[13.5px] leading-6 text-[#2E5B35]">
                    <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-[#C8E6C9] flex items-center justify-center text-[10px] font-bold text-[#1B5E20]">✓</span>
                    {line.replace(/^\* /, "")}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for you card */}
            <div className="rounded-3xl border border-[#FFE0B2] bg-gradient-to-br from-[#FFF8F0] to-white p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFE0B2]/70">
                  <ThumbsDown className="h-5 w-5 text-[#E65100]" />
                </span>
                <h3 className="font-serif text-lg font-bold text-[#BF360C]">We might not be for you if…</h3>
              </div>
              <ul className="space-y-3 mb-5">
                {perfectNot.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[13.5px] leading-6 text-[#7B3A1A]">
                    <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-[#FFE0B2] flex items-center justify-center text-[10px] font-bold text-[#E65100]">✕</span>
                    {line.replace(/^\* /, "")}
                  </li>
                ))}
              </ul>
              <p className="rounded-xl bg-[#FFF3E0] px-4 py-3 text-[12.5px] leading-6 text-[#7B3A1A] italic">
                And that&apos;s okay — we&apos;d rather be the right fit for some than everything to everyone.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════ OUR PROMISE ══════════════ */}
        <section className="mb-12">
          <div className="mb-8 flex justify-center">
            <SectionBadge icon={HeartHandshake} label="Our Promise" />
          </div>

          <p className="mb-4 text-center font-serif text-[17px] font-bold text-[#17342C]">We promise you</p>
          <div className="mb-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {ourPromiseGive.map(({ emoji, label, desc }) => (
              <div key={label} className="promise-card rounded-2xl border border-[#E5D9C1] bg-white p-5 shadow-sm">
                <span className="mb-3 block text-2xl">{emoji}</span>
                <p className="mb-1 font-semibold text-[13.5px] text-[#17342C]">{label}</p>
                <p className="text-[12.5px] leading-6 text-[#6B7B72]">{desc}</p>
              </div>
            ))}
          </div>

          <p className="mb-4 text-center font-serif text-[17px] font-bold text-[#17342C]">We ask of you</p>
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {ourPromiseAsk.map(({ emoji, label, desc }) => (
              <div key={label} className="promise-card rounded-2xl border border-[#C79B3B]/30 bg-[#FFF8EA] p-5">
                <span className="mb-3 block text-2xl">{emoji}</span>
                <p className="mb-1 font-semibold text-[13.5px] text-[#7A5A10]">{label}</p>
                <p className="text-[12.5px] leading-6 text-[#8C7040]">{desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-[#1F463B] px-6 py-6 text-center shadow-inner">
            <p className="font-serif text-[15px] leading-8 text-[#E3DCC8]">
              Together, we can make your Islamic learning journey beautiful, meaningful, and successful.
            </p>
          </div>
        </section>

        {/* ══════════════ FOUNDER NOTE ══════════════ */}
        <section className="mb-12 overflow-hidden rounded-3xl border border-[#E5D9C1] bg-gradient-to-br from-[#FFFEF9] to-[#F0EDE4] p-7 shadow-[0_8px_30px_rgba(28,58,46,.08)] md:p-10">
          <div className="mb-6 flex justify-center">
            <SectionBadge icon={UserRound} label="A Personal Note from the Founder" />
          </div>
          <blockquote className="space-y-4 border-s-4 border-[#C79B3B] ps-5 text-[15px] leading-8 text-[#355647]">
            <p>&quot;Nibras Network started because I saw a need and wanted to help. It&apos;s growing because students trust us and recommend us to others. Every single student matters to me personally.</p>
            <p>I&apos;m not promising you the fanciest platform or the fastest results. I&apos;m promising you sincere service, qualified teaching, and genuine care.</p>
            <p>May Allah accept this effort and make it beneficial for you and your family.&quot;</p>
          </blockquote>
          <GoldDivider />
          <p className="text-center font-serif text-[15px] font-semibold text-[#17342C]">— Founder, Nibras Network</p>
        </section>

        {/* ══════════════ CTA ══════════════ */}
        <section className="rounded-3xl border-2 border-[#C79B3B]/40 bg-[#1F463B] px-5 py-10 text-center shadow-[0_16px_48px_rgba(28,58,46,.2)] sm:px-7 sm:py-12 md:px-12">
          <Sparkles className="mx-auto mb-4 h-10 w-10 text-[#E3C98F]" aria-hidden />
          <h2 className="mb-6 font-serif text-2xl font-bold text-[#F7F1E3] md:text-3xl">
            READY TO EXPERIENCE THE DIFFERENCE?
          </h2>
          <ul className="mx-auto mb-0 max-w-sm grid gap-3 text-left">
            {ctaBullets.map((line) => (
              <li key={line} className="flex items-center gap-3 text-[14px] text-[#CFE1D9]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C79B3B]/30 text-[11px] text-[#E3C98F]">✓</span>
                {line}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}