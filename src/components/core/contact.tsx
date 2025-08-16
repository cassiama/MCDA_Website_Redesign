import { JSX } from "react";
import Link from "next/link";
import Icon, { IconName } from "./icon";

export type ContactInfo = {
  href: string,
  label: string,
  icon: IconName,

}

type ContactProps = {
    [K in keyof ContactInfo]: ContactInfo[K]
}

const Contact = ({ href, label, icon }: ContactProps): JSX.Element => {
    return (
        <Link
            href={href}
            aria-label={label}
            className="
            flex items-center justify-center
            size-24 md:size-28 p-3 md:p-6 rounded-full
            bg-card-border shadow-elev-300 ring-4 ring-white
            transition-transform hover:scale-[1.03] focus-visible:scale-[1.03]"
        >
            <Icon 
                name={icon}
                className="block size-[85%] overflow-visible"
            />
            <span className="sr-only">{label}</span>
        </Link>
    );
};

export default Contact;