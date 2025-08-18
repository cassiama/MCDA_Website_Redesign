import { JSX } from "react";
import Link from "next/link";
import ContactIcon, { ContactIconInfo } from "@/components/core/contact-icon";
import Icon, { IconName } from "@/components/core/icon";

type ContactInfo = {
    icon: IconName,
    title?: string,
    label: string,
}

const CONTACTS: ContactInfo[] = [
    {
        icon: "Email",
        label: "mcdiversityalliance@gmail.com"
    },
    {
        icon: "Phone",
        label: "(555) 123-4567"
    },
    {
        icon: "Location",
        title: "Monmouth County, NJ",
        label: "83 South Street, Freehold, NJ 07728"
    }
];

const CONTACT_ICONS: ContactIconInfo[] = [
    { href: "https://www.facebook.com/mcdiversityalliance/", label: "Facebook", icon: "Facebook" },
    { href: "https://www.instagram.com/mcdiversityalliance/", label: "Instagram", icon: "Instagram" },
];


// helpers
type SocialCardProps = {
    href: string,
    label: string,
    icon: IconName,
}
const SocialCard = ({ href, label, icon }: SocialCardProps) => {
    return (
        <div className="flex flex-col items-center gap-3">
            <Link
                href={href}
                className="focus:outline-none focus-visible:ring-4 ring-primary rounded-full hover:scale-[1.03] focus-visible:scale-[1.03]"
            >
                <span className="sr-only">{`Follow us on ${label}`}</span>
                <div
                    className="size-20 rounded-full bg-card-border shadow-elev-300 grid place-items-center"
                >
                    <Icon
                        name={icon}
                        className="size-14 text-white"
                    />
                </div>
            </Link>
            <p className="w-24 text-body-md text-center">Follow Us on {label}</p>
        </div>
    );
}


const ContactPage = (): JSX.Element => {
    return (
        // 2-col grid on md+ breakpoints, 1-col on mobile
        <div>
            <div
                className="max-w-screen-2xl grid grid-cols-1 lg:grid-cols-12"
            >
                {/* contact section (left sidebar on desktop) */}   
                <aside
                    className="lg:col-span-4 flex flex-col gap-6 py-3"
                >
                    {/* page header */}
                    <h1
                        className="heading-1 mx-auto md:mx-0 px-4 md:px-6 pt-3"
                    >
                        Contact Us
                    </h1>
                    <p
                        className="section text-body-md text-muted-foreground px-6 py-3"
                    >
                        Let us know how we can help make a difference in your community. We are stronger together!
                    </p>

                    {/* contact info cards */}
                    <ul
                        className="flex flex-col gap-4 px-4 md:px-6 mx-auto"
                    >
                        {CONTACTS.map(({ icon, title, label }) => (
                            <li
                                key={`${icon}-${label}`}
                                className="w-full max-w-3xs lg:max-w-xs rounded-xl bg-card shadow-elev-300 p-4 flex flex-col lg:flex-row items-center gap-4"
                            >
                                {/* icon */}
                                <div
                                    className="shrink-0 rounded-lg bg-primary p-3"
                                >
                                    <Icon
                                        key={label.toLowerCase()}
                                        name={icon}
                                        className="size-6 md:size-8 text-white"
                                    />
                                </div>

                                {/* card content */}
                                <div
                                    className="min-w-0"
                                >
                                    {title && <p className="text-body-md text-disabled-text">{title}</p>}
                                    <p className="text-body-md text-text break-words">{label}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* map */}
                    <div
                        className="section overflow-hidden px-4 md:px-6 py-3"
                    >
                        <iframe
                            title="MC Diversity Alliance location"
                            className="block w-full aspect-[5/3]"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={
                                // Maps Embed API (no JS) – replace with your API key if restricted
                                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.4309!2d-74.276!3d40.260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s83%20South%20Street%2C%20Freehold%2C%20NJ%2007728!5e0!3m2!1sen!2sus!4v0000000000"
                            }
                        />
                    </div>

                    {/* social media */}
                    <h2
                        id="follow-us"
                        className="heading-2 mx-auto md:mx-0 px-5"
                    >
                        Follow Us
                    </h2>
                    <p
                        className="text-body-md text-text px-5"
                    >
                        Stay up-to-date on all the latest news and happenings at Monmouth County Diversity Alliance Inc. by following us on social media. We're active on Facebook and Instagram.
                    </p>
                    <div
                        className="grid md:grid-cols-2 md:py-2 justify-items-center gap-3"
                    >
                        {CONTACT_ICONS.map(({ label, href, icon }) => (
                            <SocialCard
                                key={label.toLowerCase()}
                                href={href}
                                label={label}
                                icon={icon}
                            />
                        ))}
                    </div>
                </aside>
                
                {/* form section (right sidebar on desktop) */}
                <main 
                    className="lg:col-span-8 section lg:border-l-2 lg:rounded-tl-lg border-b-0 shadow-none"
                >
                    <section 
                        className="p-5 lg:p-6"
                    >
                        <form
                            className="flex flex-col gap-3"
                        >
                            {/* fields */}
                            <div
                                className="flex flex-col gap-1"
                            >
                                <label
                                    htmlFor="name-input"
                                    className="text-body font-medium text-foreground"
                                    // TODO: add shadows
                                >
                                    Name
                                </label>
                                <input
                                    id="name-input"
                                    placeholder="Enter your name"
                                    className="field"
                                />
                            </div>
                            <div
                                className="flex flex-col gap-1"
                            >
                                <label
                                    htmlFor="email-input"
                                    className="text-body font-medium text-foreground"
                                    // TODO: add shadows
                                >
                                    Email
                                </label>
                                <input
                                    id="email-input"
                                    placeholder="Enter your email"
                                    className="field"
                                />
                            </div>
                            <div
                                className="flex flex-col gap-1"
                            >
                                <label
                                    htmlFor="subject-input"
                                    className="text-body font-medium text-foreground"
                                    // TODO: add shadows
                                >
                                    Subject
                                </label>
                                <input
                                    id="subject-input"
                                    placeholder="Enter your subject"
                                    className="field"
                                />
                            </div>
                            <div
                                className="flex flex-col gap-1"
                            >
                                <label
                                    htmlFor="msg-input"
                                    className="text-body font-medium text-foreground"
                                    // TODO: add shadows
                                >
                                    Message
                                </label>
                                <textarea 
                                    id="msg-input"
                                    placeholder="Type your message..."
                                    rows={4}
                                    className="textarea min-h-10 max-h-25"
                                />
                            </div>

                            {/* submit button */}
                            <div className="inline-flex justify-end mx-auto lg:mx-0">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ContactPage;