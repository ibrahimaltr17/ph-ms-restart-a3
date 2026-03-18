import React from 'react';
import AppNot from '../../assets/App-Error.png'

const AppNotFound = () => {
    return (
        <div className='h-screen bg-gray-100 flex flex-col items-center justify-center space-y-3 py-3 text-center'>
            <div>
                <img src={AppNot } alt="" />
            </div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>OPPS!! APP NOT FOUND</h2>
            <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
            <button className='py-3 px-5 rounded-sm gradient-background text-white'>Go Back!</button>
        </div>
    );
};

export default AppNotFound;