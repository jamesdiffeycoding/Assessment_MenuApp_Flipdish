import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flipdish Food Menu",
  description: "Great food great prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="custom-flipdish-client-font">{children}</body>
    </html>
  );
}
