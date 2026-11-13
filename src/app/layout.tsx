import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GENEWORLD — Biotechnology · Research · Manufacturing",
  description:
    "Công nghệ sinh học — từ nghiên cứu đến ứng dụng. Nền tảng kết nối khoa học, công nghệ sinh học và sản xuất giải pháp ứng dụng.",
  openGraph: {
    title: "GENEWORLD — Biotechnology · Research · Manufacturing",
    description:
      "Công nghệ sinh học — từ nghiên cứu đến ứng dụng. Nền tảng kết nối khoa học, công nghệ sinh học và sản xuất giải pháp ứng dụng.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${montserrat.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#F5F8F6] text-gw-charcoal font-sans antialiased selection:bg-gw-teal/20 selection:text-gw-deep">
        {children}
      </body>
    </html>
  );
}
