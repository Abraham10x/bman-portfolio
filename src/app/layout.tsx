import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PrelineScript from "@/components/PrelineScript";

const defaultMeta = {
  title: "kingsley-o-mbilitem",
  siteName: "kingsley-o-mbilitem",
  description: "I can help you create stunning products and visuals.",
  url: "https://kingsley-o-mbilitem.netlify.app/",
  type: "website" as const,
  robots: "follow, index",
  image: "https://kingsley-o-mbilitem.netlify.app/logo.svg",
};

// Define the metadata inline
export const metadata: Metadata = {
  title: defaultMeta.siteName,
  description: defaultMeta.description,
  openGraph: {
    type: defaultMeta.type,
    siteName: defaultMeta.siteName,
    title: defaultMeta.siteName,
    description: defaultMeta.description,
    url: defaultMeta.url,
    images: [
      {
        url: defaultMeta.image,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: defaultMeta.siteName,
    title: defaultMeta.title,
    description: defaultMeta.description,
    images: [defaultMeta.image],
  },
  robots: defaultMeta.robots,
  authors: [{ name: "kingsley osita mbilitem" }, { name: "ameh abraham" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <PrelineScript />
    </html>
  );
}
