# Nibras Network (نبراس نتورك)

موقع ويب لشبكة **Nibras Network** — منصة تعليمية تركز على نور القرآن، والعلوم الشرعية الكلاسيكية، ومسارات تعلّم منظّمة (دراسات أساسية، بحث متقدّم، مجتمع تعلّم). الواجهة الحالية تضم الصفحة الرئيسية مع شريط تنقّل، قسم بطل، وقسم «ركائز التنوير».

## المتطلبات

- [Node.js](https://nodejs.org/) 20 أو أحدث (يُنصح بآخر إصدار LTS)
- مدير حزم: `npm` (أو `pnpm` / `yarn` / `bun`)

## البدء السريع

تثبيت الاعتماديات:

```bash
npm install
```

تشغيل بيئة التطوير:

```bash
npm run dev
```

ثم افتح المتصفح على [http://localhost:3000](http://localhost:3000).

## الأوامر المتاحة

| الأمر | الوصف |
|--------|--------|
| `npm run dev` | خادم التطوير مع إعادة التحميل السريعة |
| `npm run build` | بناء الإنتاج |
| `npm run start` | تشغيل نسخة الإنتاج بعد `build` |
| `npm run lint` | فحص الكود باستخدام ESLint |

## هيكل المشروع ( مختصر )

- `app/` — تطبيق Next.js (App Router): `layout.tsx`, `page.tsx`, `globals.css`
- `components/` — مكوّنات الواجهة: `Navbar`, `HeroSection`, `PillarsSection`
- `public/images/` — أصول ثابتة (مثل `hero.jpeg`, `logo.png`)

## التقنيات

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4

## ملاحظات للمطورين

- روابط في الواجهة تشير إلى مسارات مثل `/services`, `/courses`, `/contact` وغيرها؛ تأكد من إضافة الصفحات أو إعادة توجيهها حسب خطة المنتج.
- يُفضّل مواءمة `metadata` في `app/layout.tsx` (العنوان والوصف) مع هوية Nibras Network عند الاستعداد للنشر.

## النشر

يمكن نشر التطبيق على [Vercel](https://vercel.com/) أو أي منصة تدعم تطبيقات Node.js لـ Next.js. راجع [توثيق نشر Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

---

مرخّص كمشروع خاص (`private` في `package.json`) ما لم يُحدَّد غير ذلك.
