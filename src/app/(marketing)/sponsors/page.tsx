import { JSX } from "react";
import Sponsor from "@/components/core/sponsor";
import Link from "next/link";
import * as SponsorLogos from "@/../public/logos";
import { StaticImageData } from "next/image";

type SponsorInfo = {
    src: StaticImageData,
    name: string,
    href: string,
}

const SPONSORS: SponsorInfo[] = [
    {
        src: SponsorLogos["Citizens_Bank_Logo"],
        name: "Citizens Bank",
        href: "https://www.citizensbank.com/about-us/overview.aspx"
    },
    {
        src: SponsorLogos["Wegmans_Logo"],
        name: "Wegmans",
        href: "https://www.wegmans.com/about-us"
    },
    {
        src: SponsorLogos["CentraState_Logo"],
        name: "CentraState",
        href: "https://www.centrastate.com/who-we-are/"
    },
    {
        src: SponsorLogos["Monmouth_County_Logo"],
        name: "County of Monmouth",
        href: "https://www.visitmonmouth.com/"
    },
    {
        src: SponsorLogos["NJ_Resources_Logo"],
        name: "New Jersey Resources",
        href: "https://www.njresources.com/about/index.aspx"
    },
    {
        src: SponsorLogos["Monmouth_Arts_Logo"],
        name: "Monmouth Arts",
        href: "https://www.monmoutharts.org/about-us"
    },
    {
        src: SponsorLogos["Six_Eighteen_Logo"],
        name: "618 (Freehold)",
        href: "https://www.618nj.com/"
    },
    {
        src: SponsorLogos["Vreel_Logo"],
        name: "VReel",
        href: "https://www.vreel.page/"
    },
    {
        src: SponsorLogos["Brookdale_Tuition_Free_Logo"],
        name: "Brookdale Community College",
        href: "https://www.brookdalecc.edu/tuition-free"
    },
    {
        src: SponsorLogos["Alisha_Simone_Logo"],
        name: "Alisha Simone",
        href: "https://www.facebook.com/alishasimonesimplybeautiful/"
    },
    {
        src: SponsorLogos["BoFRC_Logo"],
        name: "Borough of Freehold Recreation Commission",
        href: "https://www.freeholdboroughnj.gov/boards/recreation"
    },
];

const SponsorsPage = (): JSX.Element => {
    return (
        <div
            className="justify-items-center"
        >
            {/* header */}
            <div>
                <h1>Our Partners</h1>
                <p>We are grateful for the support of our partners, who help to continue our mission of supporting our community and honoring community members that make a significant impact.</p>
            </div>

            {/* sponsors */}
            <div>
                <ul
                    className="flex flex-col md:grid md:grid-cols-5 gap-y-10"
                >
                    {SPONSORS.map(({ src, name, href }) => (
                        <li
                            key={name}
                        >
                            <Sponsor
                                key={name}
                                src={src}
                                name={name}
                                alt={`${name} Logo`}
                                href={href}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA (Partner with Us) */}
            <div>
                <h2>
                    Partner With Us
                </h2>
                <p>
                    We're always looking for new partners to collaborate with on projects and events. If your organization shares our values and mission, let's work together to make a positive impact.
                </p>
                <Link
                    href="https://img1.wsimg.com/blobby/go/6fb63dab-7ce1-478b-b851-57b3c376f37f/2025%20Juneteenth%20Sponsorship%20form.pdf"
                >
                    Become a Sponsor
                </Link>
            </div>

            {/* sponsorship table */}
            <div>
                <table>
                    <thead>
                        <tr>
                            <th
                                scope="col">
                                Tier
                            </th>
                            <th
                                scope="col">
                                Benefits
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Platinum
                            </td>
                            <td>
                                Exclusive branding opportunities, speaking slots at events, and premium booth space.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Gold
                            </td>
                            <td>
                                Enhanced branding, priority booth selection, and recognition in event materials.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Silver
                            </td>
                            <td>
                                Standard booth space, logo placement, and event passes.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Gala Silver
                            </td>
                            <td>
                                Prominent recognition at the annual gala, including signage and program listing.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Festival Bronze
                            </td>
                            <td>
                                Booth at the diversity festival, logo on festival materials, and event passes.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Patron
                            </td>
                            <td>
                                Recognition as a supporter, with logo placement on the website and in select materials.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SponsorsPage;