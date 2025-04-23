type IconSize = "sm" | "md" | "lg";

export interface IconProps{
    size: IconSize
}

type IconPropsType = Record<IconSize,string>

export const iconSizeVariants : IconPropsType = {
    sm:"size-4",
    md:"size-6",
    lg:"size-8"
}