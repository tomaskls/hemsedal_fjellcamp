import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import React from "react";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import Header from "@/components/navbar";

export const metadata: Metadata = {
  title: "Hemsedal Fjellcamp",
  description: "Hemsedal Fjellcamp - Camping and accommodation",
  icons: "/favicon.ico",
  openGraph: {
    title: 'Hemsedal Fjellcamp',
    description: 'Hemsedal Fjellcamp - Camping and accommodation', 
    url: 'https://hemsedal-fjellcamp.vercel.app/',
    siteName: 'Neringos Siuvimo Studija',
    type: 'website',
    images: [
      {
        url: 'https://hemsedal-fjellcamp.vercel.app/images/223.png',
        width: 900,
        height: 506,
      },
    ]
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className=" flex flex-col h-screen">
              <Header />
            <main className=" container mx-auto max-w-7xl pt-6 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
