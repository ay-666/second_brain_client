import { useEffect, useRef } from "react";
import { PlusIcon } from "../../icons/plus.icons";
import { ShareIcon } from "../../icons/share.icons";
import { ContentTypes } from "./AddContentModal";
declare global {
    interface Window {
      twttr: any; // Or be more specific if you know the structure
    }
  }

interface CardProps {
  title: string;
  link: string;
  type: ContentTypes;
}

const Card = ({ title, link, type }: CardProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if(type=== "tweet" && window?.twttr?.widgets){
            window.twttr.widgets.load(containerRef.current);
        }   
    },[type])
  return (
    <div className="max-w-72 border border-gray-200 rounded bg-white shadow-sm p-4 min-w-72 ">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <a href={link} target="_blank">
            <ShareIcon size="sm"></ShareIcon>
          </a>

          <h2 className="font-semibold">{title}</h2>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <ShareIcon size="sm" />
          <PlusIcon size="sm" />
        </div>
      </div>

      <div ref={containerRef} className="pt-4">
        {type === "video" && (
          <iframe
            className="w-full"
            src={link.replace("watch", "embed").replace("?v=","/")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {type === "tweet" && (  
            <blockquote className="twitter-tweet ">
              <a href={link}></a>
            </blockquote>
        )}

        {
          type=== "image" && (
            <img className="w-fit bg-contain" alt="Img not found" src={link}>

            </img>
          )
        }
      </div>
    </div>
  );
};

export default Card;
