import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { AppToaster } from "@/components/AppToaster";
import { LocaleProvider } from "@/components/LocaleProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nibras Network | Online Quran & Arabic Classes",
  description: "Learn Quran, Arabic, and Islamic Studies online with expert certified tutors at Nibras Network. Start your spiritual journey today with customized 1-on-1 classes.",
  keywords: ["Online Quran", "Learn Arabic Online", "Islamic Studies", "Quran for Kids", "Tajweed Classes", "Nibras Network", "Learn Quran online", "Quran memorization"],
  openGraph: {
    title: "Nibras Network | Online Quran & Arabic Academy",
    description: "Learn Quran, Arabic, and Islamic Studies online with expert certified tutors.",
    url: "https://nibras-network.com",
    siteName: "Nibras Network",
    images: [
      {
        url: "/images/icon.png",
        width: 800,
        height: 600,
        alt: "Nibras Network Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nibras Network",
    description: "Learn Quran, Arabic, and Islamic Studies online.",
    images: ["/images/icon.png"],
  },
  icons: {
    icon: "/images/icone.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${notoArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocaleProvider>{children}</LocaleProvider>
        <AppToaster />
      </body>
    </html>
  );
}
