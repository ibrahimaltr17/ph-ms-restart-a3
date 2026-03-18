import React from 'react';
import Download from '../../assets/icon-downloads.png'
import Rating from '../../assets/icon-ratings.png'

const TrendingApp = () => {
    return (
        <div className='m-10 md:m-20'>
            {/* Title Container */}
            <div className='text-center space-y-4'>
                <h2 className='text-5xl font-bold'>Trending Apps</h2>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* Card Container */}
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {/* Card 1 */}
                <div className='p-4 rounded-sm shadow-sm space-y-4'>
                    <div className='bg-gray-400 h-56  rounded-lg'>

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
                {/* Card 1 */}
                <div className='p-4 rounded-sm shadow-sm space-y-4'>
                    <div className='bg-gray-400 h-56 rounded-lg'>

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
                {/* Card 1 */}
                <div className='p-4 rounded-sm shadow-sm space-y-4'>
                    <div className='bg-gray-400 h-56 rounded-lg'>

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
                {/* Card 1 */}
                <div className='p-4 rounded-sm shadow-sm space-y-4'>
                    <div className='bg-gray-400 h-56 rounded-lg'>

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
            </div>
            {/* See more button */}
            <div className='flex justify-center'>
                <button className='gradient-background py-3 px-10 text-[16px] rounded-sm font-semibold text-white cursor-pointer'>
                    See All
                </button>
            </div>
        </div>
    );
};

export default TrendingApp;