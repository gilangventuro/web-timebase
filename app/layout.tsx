import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Software Monitoring Karyawan WFA | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Software monitoring karyawan WFA dari Time Base: platform monitoring karyawan real-time, harga IDR transparan untuk tim WFA Indonesia.",
  keywords: [
    "software monitoring karyawan WFA",
    "platform monitoring karyawan real-time",
    "accountability kerja WFA",
    "aplikasi monitoring karyawan Indonesia",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  icons: {
    icon: "/assets/logo-timebase-icon-gradient.png",
    shortcut: "/assets/logo-timebase-icon-gradient.png",
    apple: "/assets/logo-timebase-icon-gradient.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `Software Monitoring Karyawan WFA | ${SITE_NAME}`,
    description:
      "Platform monitoring aktivitas kerja karyawan real-time untuk perusahaan dengan skema Work From Anywhere (WFA).",
    images: [
      {
        url: "/assets/logo-timebase-wordmark-gradient-tagline.png",
        width: 1200,
        height: 630,
        alt: `Logo ${SITE_NAME} - ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Software Monitoring Karyawan WFA | ${SITE_NAME}`,
    description:
      "Platform monitoring aktivitas kerja karyawan real-time untuk perusahaan dengan skema Work From Anywhere (WFA).",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('timebase-theme');
    var theme = stored === 'dark' || stored === 'light'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script id="timebase-theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
