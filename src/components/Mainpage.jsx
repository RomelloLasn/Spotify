import React from 'react';
import Downarrow from '../media/Downarrow.png';
import ProfilePic from '../media/ProfilePic.png';
import Despacito from '../media/Despacito-bg.png';
import MyHouse from '../media/MyHouse-bg.png';
import Favourite from '../media/Favourite.png';
import Playbutton1 from '../media/Playbutton1.png';
import Playlist1 from '../media/Playlist1.png';
import Playlist2 from '../media/Playlist2.png';
import Playlist3 from '../media/Playlist3.png';
import Playbutton2 from '../media/Playbutton2.png';
import Happier from '../media/Happier.png';
import WithoutMe from '../media/WithoutMe.png';
import BedroomFloor from '../media/BedroomFloor.png';
import ThreeDots from '../media/ThreeDots.png';
import GreenPlaybackBG from '../media/GreenPlaybackBG.png';
import SmallAlbumImg from '../media/SmallAlbumImg.png';
import PauseBtn from '../media/PauseBtn.png';
import { Link } from "react-router-dom";

const Header = () => {
return (
    <div className='py-6 px-6'>
        <div className='h-full w-full'>
            <div className='flex justify-between place-items-center mb-12'>
            <Link to="/track">
                <img className='h-[9px] w-[13px] flex place-items-center' src={Downarrow} alt="" />
            </Link>
                <img className='w-[24px] rounded-3xl border-[1px] border-[#03DABB]' src={ProfilePic} alt="" />
            </div>
        </div>
        <div className='absolute p-2 w-[330px] h-[142px]' style={{ backgroundImage: `url(${Despacito})` }}></div>
        <div className='absolute p-4 w-[320px] h-[120px]' style={{ backgroundImage: `url(${MyHouse})` }}></div>
        <div className='relative z-8 w-[310px] h-[175px]' style={{ backgroundImage: `url(${Favourite})` }}>
            <div className="absolute bottom-0 left-0 right-[100px] top-0 bg-transparent">
                <div className="flex h-full items-center justify-center">
                    <div className="text-white w-full h-full">
                        <div className='w-full h-full font-Jost'>
                            <h2 className="text-2xl Jost pt-4 pl-8">Favourite</h2>
                            <h3 className='text-xs flex justify-center pr-14'>20 Tracks</h3>
                            <div className='flex w-full h-20 items-end pl-7'>
                                <img className='pr-1' src={Playbutton1} alt="" />
                                <h2>Excuses</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-between mt-6 mx-2 font-Jost text-[#03DABB] items-center'>
            <h1 className='font-medium text-2xl shadow-[#2D388A]'>Playlists</h1>
            <h2 className='font-medium text-base'>See all</h2>
        </div>
        <div className='h-full w-full mt-6 flex'>
            <div className=' w-[119px] h-[126px] rounded-[10px]' style={{ backgroundImage: `url(${Playlist1})`}}>
                <div className='flex justify-center items-center w-[119px] h-[126px]'>
                    <img className='' src={Playbutton2} alt="" />
                </div>
            </div>
            <div className='w-[119px] h-[126px] rounded-[10px] shadow-[#03dabb] ml-4' style={{ backgroundImage: `url(${Playlist2})`}}>
                <div className='flex justify-center items-center w-[119px] h-[126px]'>
                    <img className='' src={Playbutton2} alt="" />
                </div>
            </div>
            <div className='p-2 w-[80px] h-[126px] rounded-[10px] shadow-sm shadow-[#03dabb] ml-4' style={{ backgroundImage: `url(${Playlist3})`}}>
                <div className='flex justify-center items-center w-[119px] h-[126px]'>
                    <img className='' src={Playbutton2} alt="" />
                </div>
            </div>
        </div>
        <div className='text-[#03DABB]'>
            <h1 className='my-12 text-2xl font-medium'>Recently played</h1>
            <div className='flex justify-between items-center'>
                <div className='flex items-start'>
                    <img src={Happier} alt="" />
                    <div className='ml-4'>
                        <h1 className='text-[#03DABB] text-xl font-medium'>Happier</h1>
                        <h2 className='text-[#ffffffb3]'>Marshmello, Bastille</h2>
                    </div>
                </div>
                <div>
                    <img src={ThreeDots} alt="" />
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-start mt-4'>
                <img src={WithoutMe} alt="" />
                    <div className='ml-4'>
                        <h1 className='text-[#03DABB] text-xl font-medium'>Without Me</h1>
                        <h2 className='text-[#ffffffb3]'>Halsey</h2>
                    </div>
                </div>
                <div>
                    <img src={ThreeDots} alt="" />
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-start mt-4'>
                    <img src={BedroomFloor} alt="" />
                    <div className='ml-4'>
                        <h1 className='text-[#03DABB] text-xl font-medium'>Bedroom Floor</h1>
                        <h2 className='text-[#ffffffb3]'>Liam Payne</h2>
                    </div>
                </div>
                <div>
                    <img src={ThreeDots} alt="" />
                </div>
            </div>
        </div>
<div>
    <div className='w-[399px] h-[63px] mt-8 mb-4 flex items-center' style={{ backgroundImage: `url(${GreenPlaybackBG})`}}>
        <div className='absolute w-full bg-transparent'>
            <div className='flex justify-between items-center pr-12'>
                <img src={SmallAlbumImg} alt="" />
                <h1 className='text-white font-bold text-xl'>Foo Fighters</h1>
                <img className='h-[50px]' src={PauseBtn} alt="" />
            </div>
        </div>
    </div>
</div>
    </div>
)
}

export default Header