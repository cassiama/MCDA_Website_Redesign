import { JSX } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type SponsorProps = {
    src: StaticImageData,
    name: string,
    href: string,
    alt?: string,
}

const Sponsor = ({ src, name, href, alt }: SponsorProps): JSX.Element => {
    return (
        <div
            className="flex flex-col justify-center gap-y-1"
        >
            <div
                className="relative size-45 bg-card place-content-center rounded-2xl shadow-elev-300 overflow-hidden"
            >
                <Link
                    href={href}
                >
                    <Image 
                        src={src}
                        alt={alt || ''}
                        fill={true}
                        className="object-contain p-3"
                    />
                </Link>
            </div>
            <span
                className="text-body-md w-45 text-center"
            >
                {name}
            </span>
        </div>
    );
}

export default Sponsor;