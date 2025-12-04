import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Video Editor Portfolio",
  description: "Cinematic video editing portfolio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}


