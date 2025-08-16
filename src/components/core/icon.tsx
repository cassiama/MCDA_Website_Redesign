import * as Icons from "@/icons";

export type IconName = keyof typeof Icons;

type IconProps = { name: IconName; className?: string };

const Icon = ({ name, className }: IconProps) => {
    const SVG = Icons[name];
    return <SVG
        className={className}
    />;
}

export default Icon;