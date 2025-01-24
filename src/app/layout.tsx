import type { Metadata } from "next";
import "./globals.css";
import { MenuWrapper } from "@/context/MenuContext";

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
      <body className="custom-flipdish-client-font">
        <MenuWrapper>{children}</MenuWrapper>
      </body>
    </html>
  );
}
