import React from 'react';
import { formatNumber } from '../../utility/formatNumber';

const State = ({ data }) => {

    const totalDownloads = data.reduce((sum, app) => sum + app.downloads, 0);
    const totalReviews = data.reduce((sum, app) => sum + app.reviews, 0);
    const totalApps = data.length;

    return (
        <div className='gradient-background p-10 md:p-20'>
            <div className='max-w-[750px] mx-auto space-y-10'>

                <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white'>
                    Trusted by Millions, Built for You
                </h1>

                <div className='flex flex-col md:flex-row justify-between gap-3'>

                    <div className='text-sm text-[#FFFFFF80] space-y-4 text-center'>
                        <p>Total Downloads</p>
                        <h2 className='text-4xl md:text-6xl font-extrabold text-white'>
                            {formatNumber(totalDownloads)}
                        </h2>
                        <p>21% more than last month</p>
                    </div>

                    <div className='text-sm text-[#FFFFFF80] space-y-4 text-center'>
                        <p>Total Reviews</p>
                        <h2 className='text-4xl md:text-6xl font-extrabold text-white'>
                            {formatNumber(totalReviews)}
                        </h2>
                        <p>46% more than last month</p>
                    </div>

                    <div className='text-sm text-[#FFFFFF80] space-y-4 text-center'>
                        <p>Active Apps</p>
                        <h2 className='text-4xl md:text-6xl font-extrabold text-white'>
                            {totalApps}+
                        </h2>
                        <p>31 more will Launch</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default State;