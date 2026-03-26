import React, { useEffect, useState } from 'react';
import Download from '../../assets/icon-downloads.png'
import Rating from '../../assets/icon-ratings.png'
import Review from '../../assets/icon-review.png'
import ChartRating from '../../components/ChartRating/ChartRating';
import { useLoaderData, useParams } from 'react-router';
import { formatNumber } from '../../utility/formatNumber';
import { getInstalledApps, saveInstalledApp } from '../../utility/localStorage';
import Swal from 'sweetalert2';

const AppDetails = () => {
    const { id } = useParams()
    const appID = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === appID);
    console.log(singleApp)
    const { description, downloads, image, ratingAvg, reviews, size, title } = singleApp

    // Installation
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        const apps = getInstalledApps();
        const exists = apps.find(app => app.id === appID);
        if (exists) setInstalled(true);
    }, [appID]);

    const handleInstall = async () => {

        const apps = getInstalledApps();
        const exists = apps.find(app => app.id === appID);

        if (exists) {
            Swal.fire({
                icon: 'error',
                title: 'Already Installed!',
            });
            return;
        }

        let progress = 0;

        await Swal.fire({
            title: 'Installing...',
            html: 'Progress: <b>0%</b>',
            timer: 2500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();

                const b = Swal.getHtmlContainer().querySelector('b');

                const interval = setInterval(() => {
                    progress += 10;
                    if (b) b.textContent = `${progress}%`;
                }, 250);
            }
        });

        saveInstalledApp(singleApp);
        setInstalled(true);

        Swal.fire({
            icon: 'success',
            title: 'Installed Successfully 🚀',
            timer: 1500,
            showConfirmButton: false
        });
    };

    return (
        <div className='bg-gray-100 p-10 md:p-20'>
            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='flex justify-center'>
                    <img className='w-full md:max-w-67 lg:min-w-87' src={image} alt="" />
                </div>
                <div className='w-full space-y-10'>
                    <div className=''>
                        <h2 className='text-3xl font-bold'>{title}</h2>
                        <p className='text-[#627382]'>Developed by <span className='gradient-text font-bold'>productive.io</span></p>
                    </div>
                    <div className="divider w-full"></div>
                    <div className='flex justify-center lg:justify-start gap-16'>
                        <div className='space-y-1 '>
                            <div className='w-8 h-8'>
                                <img src={Download} alt="" />
                            </div>
                            <p className='text-[#00193180] text-sm'>Download</p>
                            <h2 className='text-4xl font-extrabold'>{formatNumber(downloads)}</h2>
                        </div>
                        <div className='space-y-1 '>
                            <div className='w-8 h-8'>
                                <img src={Rating} alt="" />
                            </div>
                            <p className='text-[#00193180] text-sm'>Average Ratings</p>
                            <h2 className='text-4xl font-extrabold'>{ratingAvg}</h2>
                        </div>
                        <div className='space-y-1 '>
                            <div className='w-8 h-8'>
                                <img src={Review} alt="" />
                            </div>
                            <p className='text-[#00193180] text-sm'>Total Reviews</p>
                            <h2 className='text-4xl font-extrabold'>{formatNumber(reviews)}</h2>
                        </div>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <button
                            onClick={handleInstall}
                            disabled={installed}
                            className={`py-3 px-4 rounded-sm text-[16px] font-semibold text-white ${installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390]'}`}
                        >
                            {installed ? 'Installed' : `Install Now (${size} MB)`}
                        </button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            {/* chart */}
            <ChartRating ratings={singleApp.ratings}></ChartRating>
            <div className="divider"></div>
            <div className='space-y-5'>
                <h4 className='text-2xl font-semibold'>Description</h4>
                <p className='text-[#627382]'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;