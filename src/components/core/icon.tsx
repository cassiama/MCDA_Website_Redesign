import * as Icons from "@/icons";

export type IconName = keyof typeof Icons;

type IconProps = { name: IconName; className?: string };

export default function Icon({ name, className }: IconProps) {
    const SVG = Icons[name];
    return <SVG
        className={className}
    />;
}