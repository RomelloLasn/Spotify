import React from 'react';
import Downarrow from '../media/Downarrow.png';
import ProfilePic from '../media/ProfilePic.png';

const Header = () => {
return (
    <div className='py-6 px-6'>
        <div className='h-full w-full'>
            <div className='flex justify-between'>
                <img className='h-[9px] w-[13px] flex place-items-center' src={Downarrow} alt="" />
                <img className='w-[24px] rounded-3xl border-[1px] border-[#03DABB]' src={ProfilePic} alt="" />
            </div>


        </div>

    </div>
)
}

export default Header