import React from 'react';
import Favourite from '../media/Favourite.png';
import Despacito from '../media/Despacito-bg.png';
import MyHouse from '../media/MyHouse-bg.png';

const Hero = () => {
return (
    <div className='relative pl-2'>
        <img className='absolute p-2 w-full h-full' src={Despacito} alt="" />
        <img className='absolute p-4 w-full h-full' src={MyHouse} alt="" />
        <img className='relative z-8 w-[300px]' src={Favourite} alt="" />
    </div>
)
}

export default Hero