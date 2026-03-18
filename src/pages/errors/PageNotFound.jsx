import React from 'react';
import PageNot from '../../assets/error-404.png'

const PageNotFound = () => {
    return (
        <div className='h-screen bg-gray-100 flex flex-col items-center justify-center space-y-3 py-3'>
            <div>
                <img src={PageNot} alt="" />
            </div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Oops, page not found!</h2>
            <p className='text-[#627382]'>The page you are looking for is not available.</p>
            <button className='py-3 px-5 rounded-sm gradient-background text-white'>Go Back!</button>
        </div>
    );
};

export default PageNotFound;