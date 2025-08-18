import { JSX } from "react";
import Link from "next/link";
import Icon, { IconName } from "./icon";

export type ContactIconInfo = {
    href: string,
    label: string,
    icon: IconName,
}

type ContactIconProps = {
    [K in keyof ContactIconInfo]: ContactIconInfo[K]
}

const ContactIcon = ({ href, label, icon }: ContactIconProps): JSX.Element => {
    return (
        <Link
            href={href}
            aria-label={label}
            className="flex items-center justify-center size-24 md:size-26 p-3 md:p-6 rounded-full bg-card-border shadow-elev-300 ring-4 ring-white transition-transform hover:scale-[1.03] focus-visible:scale-[1.03]"
        >
            <Icon
                name={icon}
                className="block size-[95%] md:size-[125%] overflow-visible"
            />
            <span className="sr-only">{label}</span>
        </Link>
    );
};

export default ContactIcon;