"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/images/MCDA_Logo.webp";

type NavLink = {
    href: string,
    label: string,
    cta?: boolean
}

const NAV: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Our Sponsors" },
  { href: "/blog", label: "Recent Stories" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact Us" },
  { href: "/donate", label: "Donate", cta: true}
];


export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href: string) => href === "/" ? pathname === "/" : pathname?.startsWith(href);

    return (
        <header
            className="sticky:md top-0 z-50 bg-white shadow-sm py-3"
        >
            {/* top row - used for both desktop & mobile */}
            <div className="mx-auto flex justify-between items-center gap-4 px-5 h-20">
                {/* left: logo */}
                <div
                    className="justify-self-start shrink-0"
                >
                    <Link
                        href="/"
                        aria-label="MCDA Home"
                    >
                        <Image
                            className="h-[100px] md:h-[110px] lg:h-[120px] w-auto"
                            src={logo}
                            alt="Monmouth County Diversity Alliance Inc."
                            width={1920}
                            height={1080}
                            sizes="(min-width:768px) 244px, 160px"
                            priority
                        />
                    </Link>
                </div>

                {/* center: desktop nav */}
                <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 lg:gap-8 text-[#5f8b3a]">
                    {/* navigation links */}
                    {NAV.map(({ href, label, cta }) => (
                        <Link
                            key={href}
                            href={href}
                            className={[
                                "text-center",
                                "transition",
                                "hover:drop-shadow-[0_1px_1px_rgba(0,0,0,.20)]",
                                isActive(href) ? "font-semibold text-black" : "",
                                cta ? "ml-4 inline-flex items-center rounded-full bg-[var(--mcda-orange)] px-4 py-2 text-black font-semibold border border-black/70 shadow-[0_2px_0_rgba(0,0,0,.15)]" : "",
                            ].join(" ")}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* right: mobile hamburger */}
                <div className="justify-self-end">
                    <button
                        type="button"
                        onClick={() => setOpen((visibility) => !visibility)}
                        className="lg:hidden justify-self-end inline-grid place-items-center
                        h-16 w-16 rounded-lg bg-[var(--mcda-green)] 
                        shadow-[0_2px_4px_rgba(0,0,0,.12)]"
                        aria-label={ open ? "Close menu" : "Open menu" }
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                    >
                        {/* simple menu toggle, icon changes with state */}
                        <span className="relative inline-block h-8 w-8">
                            {/* menu is closed */}
                            {!open && (
                                <>
                                    <span className="absolute inset-x-0 top-0 h-[2px] bg-black" />
                                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-black" />
                                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-black" />
                                </>
                            )}
                            
                            {/* menu is open */}
                            {open && (
                                <>
                                    <span className="relative inline-block h-8 w-8">
                                        <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 rotate-45 h-[2px] bg-black" />
                                        <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 -rotate-45 h-[2px] bg-black" />
                                    </span>
                                </>
                            )}
                        </span>
                    </button>
                </div>
            </div>

            {/* mobile overlay - appears below the logo & hamburger menu */}
            {open && (
                <div
                    className="inset-0 bg-white/95 backdrop-blur-sm lg:hidden"
                >
                    <div
                        className="mx-auto max-w-md px-2 py-3"
                    >
                        {/* stacked links */}
                        <nav
                            className="flex flex-col items-center justify-center gap-6 text-center text-[var(--mcda-green)]"
                        >
                            {NAV.map(({ href, label, cta }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={[
                                        "inline-flex",
                                        "transition",
                                        "hover:drop-shadow-[0_1px_1px_rgba(0,0,0,.20)]",
                                        isActive(href) ? "font-semibold text-black" : "",
                                        cta ? "rounded-full bg-[var(--mcda-orange)] px-5 py-2 text-black font-semibold border border-black/70 shadow-[0_2px_0_rgba(0,0,0,.15)]" : "",
                                    ].join(" ")}
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}