import  { useEffect, useRef } from 'react'
import CrossIcon from '../../icons/cross.icons';
import Input from './Input';
import { Button } from './Button';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { BACKEND_URL } from '../../config';

 interface AddContentModalProps {
     open:boolean,
     closeCall: ()=>void,
     refetchCall:()=>void
 }
 export enum ContentTypes{
    tweet = "tweet",
    video = "video",
    image = "image",
    audio = "audio",
    article = "article"
 }
const AddContentModal = ({open,closeCall,refetchCall}:AddContentModalProps) => {

    const refContainer = useRef<HTMLDivElement>(null);

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const typeRef = useRef<HTMLSelectElement>(null);

    useEffect(()=>{
        const handleOutsideClick = (e:MouseEvent) =>{
            if(refContainer.current && !refContainer.current.contains(e.target as Node)){
                closeCall();
            }
        }
        
        document.addEventListener('mousedown',handleOutsideClick);

        return () => document.removeEventListener('mousedown',handleOutsideClick)
    },[])

    const {mutate,isPending} = useMutation({
        mutationKey:['createContent'],
        mutationFn:async(inputs:{title:string,link:string,type:string})=>{
            const res = await axios.post(`${BACKEND_URL}/content/`,inputs);
            return res.data;
        },
        onSuccess:(data:AxiosResponse)=>{
            
            console.log(data);
            //@ts-ignore
            toast(data?.message)
            closeCall();
            refetchCall();
        },
        onError:(e : AxiosError)=>{
            //@ts-ignore
            toast(e?.response?.data?.message)
        }
    });




    const createContent = () =>{
        const title = titleRef?.current?.value ?? "";
        const link = linkRef?.current?.value ?? "";
        const type = typeRef?.current?.value ?? "";
        
        if(!title || !link ){
            toast("Title/Link can't be empty.")
            return;
        }
        mutate({title,link,type})

    }


  return (
    <div>
        {open && <div className='bg-gray-500/60 left-0 top-0 w-screen h-screen fixed flex justify-center items-center'>
        <div ref={refContainer} className='bg-white p-4 rounded '>
            <span className='flex flex-col gap-8'>
               <div className='flex justify-end cursor-pointer' onClick={
                closeCall
               }><CrossIcon size='sm' /></div>
               <div className='flex flex-col gap-8'>
                <Input ref={titleRef} placeholder='Title'></Input>
                <Input ref={linkRef} placeholder='Link'></Input>
                <div className='flex justify-between text-gray-500'>
                    <label>Type</label>
                    <select ref={typeRef} defaultValue={ContentTypes.article} title='Type'>
                    <option value={ContentTypes.tweet}>{ContentTypes.tweet}</option>
                    <option value={ContentTypes.video}>{ContentTypes.video}</option>
                    <option value={ContentTypes.article}>{ContentTypes.article}</option>
                    <option value={ContentTypes.audio}>{ContentTypes.audio}</option>
                    <option value={ContentTypes.image}>{ContentTypes.image}</option>
                    
                </select>
                </div>
                <div className='flex justify-center'>
                    <Button variant='primary' isFullWidth={true} isLoading={isPending} size='sm' text='Submit' onClick={createContent} />
                </div>
               </div>
            </span>
        </div>
        </div>}
    </div>
  )
}

export default AddContentModal;


