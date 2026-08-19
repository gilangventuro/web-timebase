import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME } from "@/lib/site";

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
    default: `${SITE_NAME} — Monitoring Aktivitas Karyawan Real-Time`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Solusi monitoring aktivitas dan produktivitas karyawan real-time, transparan & berbasis consent. Timebase: accountability tool, bukan alat pengintaian.",
  keywords: [
    "monitoring aktivitas karyawan",
    "accountability tool karyawan",
    "tracking produktivitas karyawan real-time",
    "compliance UU PDP monitoring karyawan",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  icons: {
    icon: "/assets/logo-timebase-icon-gauge.png",
    shortcut: "/assets/logo-timebase-icon-gauge.png",
    apple: "/assets/logo-timebase-icon-gauge.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Monitoring Aktivitas Karyawan Real-Time`,
    description:
      "Solusi monitoring aktivitas dan produktivitas karyawan real-time, transparan & berbasis consent. Timebase: accountability tool, bukan alat pengintaian.",
    images: [
      {
        url: "/assets/dashboard-laptop-mockup.png",
        width: 1448,
        height: 1086,
        alt: `Dashboard ${SITE_NAME} menampilkan aktivitas karyawan real-time di laptop`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Monitoring Aktivitas Karyawan Real-Time`,
    description:
      "Solusi monitoring aktivitas dan produktivitas karyawan real-time, transparan & berbasis consent. Timebase: accountability tool, bukan alat pengintaian.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body>
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
