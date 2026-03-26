import React from 'react';
import TrendingCard from '../TrendingCard/TrendingCard';
import { Link } from 'react-router';

const TrendingApp = ({ data }) => {
    const trendingApps = [...data]
        .sort((a, b) => b.downloads - a.downloads) // highest downloads first
        .slice(0, 8);

    return (
        <div className='p-10 md:p-20 bg-gray-100'>
            {/* Title Container */}
            <div className='text-center space-y-4'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Trending Apps</h2>
                <p className='text-[#627382] text-sm md:text-lg'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* Card Container */}
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    trendingApps.map(app => <TrendingCard app={app} key={app.id}></TrendingCard>)
                }
            </div>
            {/* See more button */}
            <div className='flex justify-center'>
                <Link to={'/allApps'}>
                    <button className='gradient-background py-3 px-10 text-[16px] rounded-sm font-semibold text-white cursor-pointer'>
                        See All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TrendingApp;