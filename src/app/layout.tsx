import type { Metadata } from "next";
import Header from "@/components/core/header";
import Footer from "@/components/core/footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monmouth County Diversity Alliance Inc.",
  description: `Monmouth County 
non profit organization 
cultural diversity
MCDA 
Juneteenth  celebration 
Mental Health 
Stigma free
Community Alliance `,
  authors: [{name: "Monmouth County Diversity Alliance Inc."}],
  generator: "Next.js",
  openGraph: {
    url: "https://mcdiversityalliance.com/",
    siteName: "Monmouth County Diversity Alliance Inc.",
    title: "Monmouth County Diversity Alliance Inc.",
    description: `Monmouth County 
non profit organization 
cultural diversity
MCDA 
Juneteenth  celebration 
Mental Health 
Stigma free
Community Alliance 
`,
    type: "website",
    images: [
      {
        url: "https://img1.wsimg.com/isteam/stock/uZVnloZzq5UYaGeoz"
      }
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Monmouth County Diversity Alliance Inc.",
    description: "The bridge of opportunity for all",
    images: {
      url: "https://img1.wsimg.com/isteam/stock/uZVnloZzq5UYaGeoz",
      alt: "Monmouth County Diversity Alliance Inc."
    }
  }
};

const socialMedia: Array<Object> = [
  {
    name: "Facebook",
    src: "",
  },
  {
    name: "Instagram",
    src: "",
  },
  {
    name: "VReel",
    src: "",
  },
  {
    name: "Email",
    src: "",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
