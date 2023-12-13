import type { Metadata } from "next";
import "../globals.css";
import "@/app/assets/scss/main.scss";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
