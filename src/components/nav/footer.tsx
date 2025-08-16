import { JSX } from "react";
import Link from "next/link";

type QuickLink = {
  href: string,
  label: string,
}
type ContactInfo = {
  href: string,
  label: string,
}

const QUICK_LINKS: QuickLink[] = [
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
];

const CONTACTS: ContactInfo[] = [
  { href: "https://www.facebook.com/mcdiversityalliance/", label: "Facebook" },
  { href: "https://www.instagram.com/mcdiversityalliance/", label: "Instagram" },
  { href: "https://www.vreel.page/mcdiversityalliance", label: "VReel" },
  { href: "mailto:Mcdiversityalliance@gmail.com", label: "Email" },
];

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
      <footer
        className="bg-background border-t-2 border-teal-20"
      >
        {/* quick links nav */}
        <div
          className="mx-auto max-w-screen-xl px-4 md:px-6 py-10 md:py-12"
        >
          <nav
            aria-label="Quick Links"
            className="text-center"
          >
            {/* header - only appears on mobile */}
            <h2
              className="md:hidden heading-2 mb-7"
            >
              Quick Links
            </h2>
            <ul
              className="w-fit mx-auto flex flex-wrap justify-center gap-x-6 gap-y-6 md:w-full md:gap-x-16 md:gap-y-0 text-h3 text-link-text"
            >
              {QUICK_LINKS.map(({ href, label }) => (
                <li
                  key={href}
                  className="md:first:ml-0"
                >
                  <Link
                    key={href}
                    href={href}
                    className="inline-block font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,.20)] text-h3 md:text-h2 hover:text-secondary-link-text hover:scale-[1.03] focus-visible:scale-[1.03] focus-visible:outline-none focus-visible:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* contact */}
        {/* TODO: This needs to be moved into its own separate component. */}
        <div className="mt-8 md:mt-10 p-3 flex flex-wrap justify-center gap-8">
          {CONTACTS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="
                flex items-center justify-center
                w-22 h-22 md:w-24 md:h-24 rounded-full
                bg-teal-50 shadow-elev-300 ring-4 ring-white
                transition-transform hover:scale-[1.03] focus-visible:scale-[1.03]"
            >
              {/* TODO: place SVG/icon inside; this span keeps it accessible if you keep text instead */}
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>

        {/* newsletter subscription */}
        <section
          aria-labelledby="newsletter-title"
          className="mt-10 md:mt-12 flex flex-col items-center"
        >
          <h2
            id="newsletter-title"
            className="w-fit md:heading-1 md:text-header-2 heading-2 text-center"
          >
            Subscribe to Our Newsletter:
          </h2>
          <form
            className="mt-4 md:mt-5 w-full max-w-md md:max-w-xl flex justify-center items-center gap-3"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email here"
              className="field"
              required
            />
            <button
              className="btn-secondary rounded-lg shrink-0 px-4 py-2"
            >
              Subscribe
            </button>
          </form>

          {/* copyright */}
          <p
            className="m-8 md:m-9 text-center text-body-md text-text"
          >©{year} Monmouth County Diversity Alliance. All rights reserved.</p>
        </section>
      </footer>
  );
};

export default Footer;