import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cenotes in Puerto Morelos",
  description: "Premium bilingual landing page for cenotes in Puerto Morelos."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
