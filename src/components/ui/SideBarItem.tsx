import { ReactElement } from "react";

interface SideBarItemProps {
    title : string;
    icon : ReactElement;
    textSize?:"sm"|"md"|"lg" | "xl";
    hoverColor?:string
}

const SideBarItem = ({title, icon,textSize,hoverColor}: SideBarItemProps) => {
  return (
    <div className={`w-full ${hoverColor} rounded`}>
        <div className={`flex gap-2 items-center text-${textSize} p-2  `}>
            {icon}
            <h2 className='text'>{title}</h2>
        </div>
    </div>
  )
}

export default SideBarItem