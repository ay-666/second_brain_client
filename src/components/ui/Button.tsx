import { ReactElement } from "react";

type VariantType =  "primary" | "secondary";
type SizeVariantType =  "sm" | "md" | "lg";

export interface ButtonProps {
  variant: VariantType;
  size: SizeVariantType
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}
type VariantStylesType = Record<VariantType,string>;

type SizeVariantStyleType = Record<SizeVariantType,string>

const variantStyles : VariantStylesType = {
    "primary":"bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-700",
}

const defaultStyles : string = 'rounded-lg font-semibold flex items-center gap-2'

const sizeVariantStyles : SizeVariantStyleType = {
    "sm":"px-4 py-2 text-sm",
    "md":"px-6 py-3 ",
    "lg":"px-8 py-4 text-lg"
}

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${sizeVariantStyles[props.size]} ${defaultStyles} `}>
      {props.startIcon} {props.text} {props.endIcon}
    </button>
  );
};

