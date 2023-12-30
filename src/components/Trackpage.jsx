import React from 'react'
import BurgerMenu from '../media/BurgerMenu.png';
import Downarrow from '../media/Downarrow.png';
import ThreeDots2 from '../media/ThreeDots2.png';
import ProgressCircle from '../media/TrackProgressCircle.png';

const Trackpage = () => {
return (
    <div className='py-6 px-6'>
        <div className='h-full w-full'>
            <div className='mb-4'>
                <img src={BurgerMenu} alt="" />
            </div>
            <div className='flex justify-between place-items-center mb-12'>
                <img className='h-[9px] w-[13px] flex place-items-center ml-2' src={Downarrow} alt="" />
                <div className='text-center'>
                    <h1 className='text-[#03DABB] text-xs'>PLAYING FROM ARTIST</h1>
                    <h1 className='text-[#03DABB] font-medium'>Foo Fighters</h1>
                </div>
                <img src={ThreeDots2} alt="" />
            </div>
        </div>
        <div className='flex justify-center'>
            <img className='w-[450px] h-[275px]' src={ProgressCircle} alt="" />
        </div>
    </div>
)
}

export default Trackpage