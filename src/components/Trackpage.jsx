import React from 'react'
import BurgerMenu from '../media/BurgerMenu.png';
import Downarrow from '../media/Downarrow.png';
import ThreeDots2 from '../media/ThreeDots2.png';
import ProgressCircle from '../media/TrackProgressCircle.png';
import HeartImage from '../media/HeartImage.png';
import TrackProgressBar from '../media/TrackProgressBar.png';
import PauseBtn2 from '../media/PauseBtn2.png';
import PreviousBtn from '../media/PreviousBtn.png';
import NextBtn from '../media/NextBtn.png';
import Heart from '../media/Heart.png';
import Arrows from '../media/Arrows.png';
import DownloadBtn from '../media/DownloadBtn.png';
import { Link } from "react-router-dom";

const Trackpage = () => {
return (
    <div className='py-6 px-6'>
        <div className='h-full w-full'>
            <div className='mb-8 pt-4'>
                <img src={BurgerMenu} alt="" />
            </div>
            <div className='flex justify-between place-items-center mb-12'>
                <Link to="/main">
                    <img className='h-[9px] w-[13px] flex place-items-center ml-2' src={Downarrow} alt="" />
                </Link>
                <div className='text-center'>
                    <h1 className='text-[#03DABB] text-xs'>PLAYING FROM ARTIST</h1>
                    <h1 className='text-[#03DABB] font-medium'>Foo Fighters</h1>
                </div>
                <img src={ThreeDots2} alt="" />
            </div>
        </div>
        <div className='flex justify-center items-center w-[425px] h-[275px]'>
            <div className='relative mt-28'>
                <img className='w-full h-full' src={ProgressCircle} alt="" />
                <img className='w-[180px] h-[180px] absolute top-1/2 left-[175px] transform -translate-x-1/2 -translate-y-1/2' src={HeartImage} alt="" />
            </div>
        </div>
        <div className='flex justify-center mb-4 mt-28'>
            <div className='text-center'>
                <h1 className='text-[#03DABB] font-semibold text-lg'>Foo Fighters</h1>
                <h2 className='text-[#03DABB] mb-12'>Best of you</h2>
                <div>
                    <img src={TrackProgressBar} alt="" />
                </div>
            </div>
        </div>
        <div className='flex justify-evenly items-center pt-6 mb-32'>
            <img className='w-[48px] h-[48px]' src={PreviousBtn} alt="" />
            <img className='w-[67px] h-[67px]' src={PauseBtn2} alt="" />
            <img className='w-[48px] h-[48px]' src={NextBtn} alt="" />
        </div>
        <div className='flex justify-evenly items-center mb-4'>
            <img src={Heart} alt="" />
            <img src={Arrows} alt="" />
            <img src={DownloadBtn} alt="" />
        </div>
    </div>
)
}

export default Trackpage