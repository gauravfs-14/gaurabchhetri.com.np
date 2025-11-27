import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaurab Chhetri - Building things that make a difference.",
  description:
    "Gaurab Chhetri is a Software Engineer and Student Researcher building innovative web applications and tools, on a constant quest of learning new tech.",
  keywords: [
    "Gaurab Chhetri",
    "Software Engineer",
    "Student Researcher",
    "Building things that make a difference.",
    "Software Engineering",
    "Student Researcher",
    "Building things that make a difference.",
  ],
  openGraph: {
    title: "Gaurab Chhetri - Building things that make a difference.",
    description:
      "Gaurab Chhetri is a Software Engineer and Student Researcher building innovative web applications and tools, on a constant quest of learning new tech.",
    images: "/og.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          easterEggObj={{
            secretWord: process.env.WORD_EASTER_EGG_TRIGGER!,
            message: process.env.WORD_EASTER_EGG_MESSAGE!,
            subMessage: process.env.WORD_EASTER_EGG_SUB_MESSAGE!,
          }}
        >
          <NavBar />
          {children}
          <Footer />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
