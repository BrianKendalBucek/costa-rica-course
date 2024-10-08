import type { Metadata } from "next";
import "./globals.scss";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata: Metadata = {
  title: "Costa Rica Course",
  description: "A platform dedicated to providing comprehensive information on Costa Rica.",
  icons: {
    icon: "/images/tabIcon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}