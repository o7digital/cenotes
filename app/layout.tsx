import type { Metadata } from "next";
import { LanguageProvider } from "../src/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cenote Maravilla | Puerto Morelos",
  description: "Premium bilingual landing page for cenotes in Puerto Morelos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
