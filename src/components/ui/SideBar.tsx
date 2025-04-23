import LogoIcon from "../../icons/logo.icons";
import TwitterIcon from "../../icons/twitter.icons";
import YouTubeIcon from "../../icons/youtube.icons";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  return (
    <div>
      <div className="w-[15%] border-r-2 border-gray-400 h-screen fixed py-4 md:py-6 flex flex-col items-center gap-12 ">
        <div className="font-semibold">
          <SideBarItem
            title="Second Brain"
            textSize="lg"
            icon={<LogoIcon size="lg" />}
          ></SideBarItem>
        </div>
        <div className="flex flex-col gap-3">
          <SideBarItem hoverColor="hover:bg-slate-200" title="X" icon={<TwitterIcon size="md" />} />
          <SideBarItem hoverColor="hover:bg-slate-200" title="Youtube" icon={<YouTubeIcon size="md" />} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
