import React from 'react';
import Download from '../../assets/icon-downloads.png'
import Rating from '../../assets/icon-ratings.png'

const CardApp = ({app}) => {
    return (
        <div className='p-4 bg-white rounded-sm shadow-sm space-y-4'>
            <div className='bg-gray-400 h-56  rounded-lg'>
                <img src={app.image} alt="" />
            </div>
            <div>
                <h4 className='font-bold text-[20px]'>Forest: Focus for Productivity</h4>
            </div>
            <div className='flex justify-between items-center'>
                <div className='py-1.5 px-2.5 w-fit bg-[#F1F5E8] rounded-sm flex gap-2 items-center'>
                    <div className='h-4 w-4'>
                        <img src={Download} alt="" />
                    </div>
                    <p className='text-[16px] font-medium text-[#00D390]'>9M</p>
                </div>
                <div className='py-1.5 px-2.5 w-fit bg-[#FFF0E1] rounded-sm flex gap-2 items-center'>
                    <div className='h-4 w-4'>
                        <img src={Rating} alt="" />
                    </div>
                    <p className='text-[16px] font-medium text-[#FF8811]'>5</p>
                </div>
            </div>
        </div>
    );
};

export default CardApp;