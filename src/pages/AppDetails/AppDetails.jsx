import React from 'react';
import demo1 from '../../assets/demo-app (1).webp'
import Download from '../../assets/icon-downloads.png'
import Rating from '../../assets/icon-ratings.png'
import Review from '../../assets/icon-review.png'
import ChartRating from '../../components/ChartRating/ChartRating';

const AppDetails = () => {
    return (
        <div className='bg-gray-100 p-10 md:p-20'>
            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='flex justify-center'>
                    <img className='w-full md:max-w-67 lg:min-w-87' src={demo1} alt="" />
                </div>
                <div className='w-full space-y-10'>
                    <div className=''>
                        <h2 className='text-3xl font-bold'>SmPlan:ToDo List with Reminder</h2>
                        <p className='text-[#627382]'>Developed by <span className='gradient-text font-bold'>productive.io</span></p>
                    </div>
                    <div className="divider w-full"></div>
                    <div className='flex justify-center lg:justify-start gap-16'>
                        <div className='space-y-1 '>
                            <div className='w-8 h-8'>
                                <img src={Download} alt="" />
                            </div>
                            <p className='text-[#00193180] text-sm'>Download</p>
                            <h2 className='text-4xl font-extrabold'>8M</h2>
                        </div>
                        <div className='space-y-1 '>
                            <div className='w-8 h-8'>
                                <img src={Rating} alt="" />
                            </div>
                            <p className='text-[#00193180] text-sm'>Average Ratings</p>
                            <h2 className='text-4xl font-extrabold'>4.9</h2>
                        </div>
                        <div className='space-y-1 '>
                            <div className='w-8 h-8'>
                                <img src={Review} alt="" />
                            </div>
                            <p className='text-[#00193180] text-sm'>Total Reviews</p>
                            <h2 className='text-4xl font-extrabold'>54K</h2>
                        </div>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <button className='py-3 px-4 rounded-sm bg-[#00D390] text-[16px] font-semibold text-white cursor-pointer'>
                            Install Now (291 MB)
                        </button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            {/* chart */}
            <ChartRating></ChartRating>
            <div className="divider"></div>
            <div className='space-y-5'>
                <h4 className='text-2xl font-semibold'>Description</h4>
                <p className='text-[#627382]'>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>
            </div>
        </div>
    );
};

export default AppDetails;