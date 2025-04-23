import React, { useEffect, useRef } from 'react'
import CrossIcon from '../../icons/cross.icons';
import Input from './Input';
import { Button } from './Button';

 interface AddContentModalProps {
     open:boolean,
     closeCall: ()=>void
 }
const AddContentModal = ({open,closeCall}:AddContentModalProps) => {

    const refContainer = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const handleOutsideClick = (e:MouseEvent) =>{
            if(refContainer.current && !refContainer.current.contains(e.target as Node)){
                closeCall();
            }
        }
        
        document.addEventListener('mousedown',handleOutsideClick);

        return () => document.removeEventListener('mousedown',handleOutsideClick)
    },[])



  return (
    <div>
        {open && <div className='bg-gray-500/60 left-0 top-0 w-screen h-screen fixed flex justify-center items-center'>
        <div ref={refContainer} className='bg-white p-4 rounded '>
            <span className='flex flex-col gap-8'>
               <div className='flex justify-end cursor-pointer' onClick={
                closeCall
               }><CrossIcon size='sm' /></div>
               <div className='flex flex-col gap-8'>
                <Input placeholder='wruite'></Input>
                <Input placeholder='wruite'></Input>
                <div className='flex justify-center'>
                    <Button variant='primary' size='sm' text='Submit' />
                </div>
               </div>
            </span>
        </div>
        </div>}
    </div>
  )
}

export default AddContentModal;


