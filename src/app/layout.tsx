import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import "./globals.css";

// const _geist = Geist({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voltech HR - Nepal's Most Trusted Manpower Provider",
  description:
    "Voltech Human Resource Pvt. Ltd. connects qualified Nepali workers with reputable employers worldwide. Quality recruitment and workforce solutions.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased min-h-screen bg-background text-foreground `}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
