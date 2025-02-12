import "./globals.css";
import Header from "@/components/Header";
import { StrictMode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flipdish",
  description: "Great food, great prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StrictMode>
          <Header />
          {children}
        </StrictMode>
      </body>
    </html>
  );
}
