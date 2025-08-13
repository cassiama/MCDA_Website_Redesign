import type { Metadata } from "next";
import Image from "next/image";
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
        <header>
          {/* push this code below into a separate header component */}
          <Image
            src="https://img1.wsimg.com/isteam/ip/6fb63dab-7ce1-478b-b851-57b3c376f37f/Monmouth%20County%20Diversity%20Alliance-Logo.jpg/:/rs=h:92,cg:true,m/qt=q:95"
            alt="Monmouth County Diversity Alliance Inc."
            width="244"
            height="100"
          />
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/events">Events</a>
          <a href="/sponsors">Our Sponsors</a>
          <a href="/blog">Recent Stories</a>
          <a href="/volunteer">Volunteer</a>
          <a href="/contact">Contact Us</a>
          <a href="/donate">Donate</a>
        </header>
        {children}
        <footer>
          {/* push this code below into a separate footer component */}
          <div className="quick-links">
            <a href="/about">About</a>
            <a href="/events">Events</a>
            <a href="/sponsors">Sponsors</a>
            <a href="/contact">Contact</a>
            <a href="/donate">Donate</a>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/mcdiversityalliance/">Facebook</a>
            <a href="https://www.instagram.com/mcdiversityalliance/">Instagram</a>
            <a href="https://www.vreel.page/mcdiversityalliance">VReel</a>
            <a href="mailto:Mcdiversityalliance@gmail.com">Email</a>
          </div>
          <div className="newsletter-subscribe">
            <span>Subscribe to Our Newsletter:</span>
            <div className="input-group">
              <input placeholder="Enter your email here" />
              <button>Subscribe</button>
            </div>
          </div>
          <div>©{new Date().getFullYear()} Monmouth County Diversity Alliance</div>
        </footer>
      </body>
    </html>
  );
}
