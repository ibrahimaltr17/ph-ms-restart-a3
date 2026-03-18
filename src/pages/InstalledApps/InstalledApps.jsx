import React from 'react';
import Download from '../../assets/icon-downloads.png'
import Rating from '../../assets/icon-ratings.png'

const InstalledApps = () => {
    return (
        <div className='p-10 md:p-20 bg-gray-100 space-y-10'>
            {/* All App title */}
            <div className='text-center space-y-4'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Our All Applications</h2>
                <p className='text-[#627382] text-sm md:text-lg'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div>
                <div className='flex flex-col-reverse gap-3 md:flex-row justify-between'>
                    <div>
                        <h4 className='text-xl md:text-2xl font-semibold'>1 Apps Found</h4>
                    </div>
                    {/* Search Input */}
                    <select defaultValue="Sort by Size" className="select">
                        <option disabled={true}>Pick a color</option>
                        <option>Low to High</option>
                        <option>High to Low</option>
                    </select>
                </div>
                <div className='mt-4'>
                    {/* Row 1 */}
                    <div className='bg-white p-4 rounded-sm flex md:flex-row flex-col gap-6 justify-between items-center'>
                        <div className='flex gap-4 md:flex-row flex-col items-center'>
                            <div className='bg-gray-400 rounded-lg h-16 w-16'>

                            </div>
                            <div className='space-y-2'>
                                <p className='font-medium text-[20px]'>Forest: Focus for Productivity</p>
                                <div className='flex gap-3 justify-evenly'>
                                    <div className='flex gap-1 items-center'>
                                        <img className='h-4 w-4' src={Download} alt="" />
                                        <p className='text-[16px] font-medium text-[#00D390]'>9M</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <img className='h-4 w-4' src={Rating} alt="" />
                                        <p className='text-[16px] font-medium text-[#FF8811]'>5</p>
                                    </div>
                                    <div>
                                        <p className='text-[#627382] text-[16px]'>256 MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='py-3 px-4 rounded-sm bg-[#00D390] text-[16px] font-semibold text-white cursor-pointer'>
                                Uninstall
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;