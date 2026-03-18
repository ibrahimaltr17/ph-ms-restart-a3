import React from 'react';
import Download from '../../assets/icon-downloads.png'
import Rating from '../../assets/icon-ratings.png'


const AllApps = () => {
    return (
        <div className='p-10 md:p-20 bg-gray-100 space-y-10'>
            {/* All App title */}
            <div className='text-center space-y-4'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Our All Applications</h2>
                <p className='text-[#627382] text-sm md:text-lg'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            {/* All App Card Container */}
            <div>
                <div className='flex flex-col-reverse gap-3 md:flex-row justify-between'>
                    <div>
                        <h4 className='text-xl md:text-2xl font-semibold'>(132) Apps Found</h4>
                    </div>
                    {/* Search Input */}
                    <div>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" required placeholder="Search Apps" />
                        </label>
                    </div>
                </div>
            </div>
            {/* Card Container */}
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {/* Card 1 */}
                <div className='p-4 bg-white rounded-sm shadow-sm space-y-4'>
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
        </div>
    );
};

export default AllApps;