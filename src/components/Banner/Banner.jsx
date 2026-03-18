import React from 'react';
import GPlay from '../../assets/fi_16076057.png'
import AppStore from '../../assets/fi_5977575.png'
import Hero from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='max-w-360 mx-auto bg-gray-100 pt-10 md:pt-20 px-5 space-y-10 md:space-y-20'>
            {/* Banner Content */}
            <div className='text-center space-y-10'>
                <div className='space-y-5 max-w-[950px] mx-auto'>
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold'>We Build <br /> <span className='gradient-text font-extrabold'>Productive</span> Apps</h1>
                    <p className='text-[#627382] text-xs md:text-lg'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='flex gap-4 justify-center'>
                    <button className='border border-[#D2D2D2] px-3 md:px-6 py-1.5 md:py-3 rounded-sm cursor-pointer'>
                        <div className='flex gap-2.5 items-center'>
                            <img src={GPlay} alt="" />
                            <p className='font-semibold'>Google Play</p>
                        </div>
                    </button>
                    <button className='border border-[#D2D2D2] px-3 md:px-6 py-1.5 md:py-3 rounded-sm cursor-pointer'>
                        <div className='flex gap-2.5 items-center'>
                            <img src={AppStore} alt="" />
                            <p className='font-semibold'>App Store</p>
                        </div>
                    </button>
                </div>
            </div>
            {/* Banner Image */}
            <div className='max-w-[750px] mx-auto px-5'>
                <img src={Hero} alt="" />
            </div>
        </div>
    );
};

export default Banner;