
import TwitterIcon from '../../icons/twitter.icons';
import YouTubeIcon from '../../icons/youtube.icons';
import SideBarItem from './SideBarItem';

const SideBar = () => {
  return (
    <div>
        <div className='w-[15%] border-r-2 border-gray-300 h-screen fixed p-4 md:p-8 flex flex-col items-center gap-4'>
            <SideBarItem title="X" icon={<TwitterIcon size='lg' />} />
            <SideBarItem title="Youtube" icon={<YouTubeIcon size="lg" />}/>
        </div>
    </div>
    
  )
}

export default SideBar;