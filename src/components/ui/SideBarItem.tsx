import { ReactElement } from "react";

interface SideBarItemProps {
    title : string;
    icon : ReactElement
}

const SideBarItem = ({title, icon}: SideBarItemProps) => {
  return (
    <div className='w-full'>
        <div className='flex gap-4 items-center'>
            {icon}
            <h2 className='text'>{title}</h2>
        </div>
    </div>
  )
}

export default SideBarItem