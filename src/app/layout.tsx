// type imports
import type { Metadata } from "next";
// library imports
import { Work_Sans } from "next/font/google";
// custom component imports
import Header from "@/components/nav/header";
import Footer from "@/components/nav/footer";
// CSS imports
import "./globals.css";

const workSans = Work_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-work-sans',
    /**
      400 = regular
      500 = medium
      600 = semibold 
      700 = bold
    */
    weight: ['400', '500', '600', '700'],
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
    authors: [{ name: "Monmouth County Diversity Alliance Inc." }],
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
                className={`${workSans.variable} antialiased`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
