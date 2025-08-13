import type { Metadata } from "next";
import "./globals.css";

import { Montserrat} from 'next/font/google'

const font = Montserrat({
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Gamer Store",
  description: "Complete Version of the Gamer Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
