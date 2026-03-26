import React, { useEffect, useState } from 'react';
import Download from '../../assets/icon-downloads.png'
import Rating from '../../assets/icon-ratings.png'
import { getInstalledApps, removeInstalledApp } from '../../utility/localStorage.js';
import Swal from 'sweetalert2';
import { formatNumber } from '../../utility/formatNumber.js';

const InstalledApps = () => {
    const [apps, setApps] = useState([]);
    console.log(apps)
    useEffect(() => {
        setApps(getInstalledApps());
    }, []);

    const [sortOrder, setSortOrder] = useState('');

    const handleSort = (e) => {
        const value = e.target.value;
        setSortOrder(value);

        let sortedApps = [...apps];

        if (value === 'high') {
            sortedApps.sort((a, b) => b.downloads - a.downloads);
        } else if (value === 'low') {
            sortedApps.sort((a, b) => a.downloads - b.downloads);
        }

        setApps(sortedApps);
    };

    // Uninstalled
    const handleUninstall = (id, title) => {

        Swal.fire({
            title: 'Are you sure?',
            text: `Uninstall ${title}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, uninstall'
        }).then((result) => {
            if (result.isConfirmed) {

                removeInstalledApp(id);

                const updated = getInstalledApps();
                setApps(updated);

                Swal.fire({
                    icon: 'success',
                    title: 'Uninstalled!',
                    text: `${title} removed successfully`,
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        });
    };

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
                        <h4 className='text-xl md:text-2xl font-semibold'>{apps.length} Apps Found</h4>
                    </div>
                    {/* Search Input */}
                    <select
                        onChange={handleSort}
                        defaultValue=""
                        className="select"
                    >
                        <option value="" disabled>Sort by Downloads</option>
                        <option value="high">High → Low</option>
                        <option value="low">Low → High</option>
                    </select>
                </div>
                <div className='mt-4 flex flex-col gap-4'>
                    {/* Row 1 */}
                    {
                        apps.map(app => (
                            <div key={app.id} className='bg-white p-4 rounded-sm flex md:flex-row flex-col gap-6 justify-between items-center'>
                                <div className='flex gap-4 md:flex-row items-center'>
                                    <div className='bg-gray-200 p-2 rounded-lg h-16 w-16'>
                                        <img src={app.image} alt="" />
                                    </div>
                                    <div className='space-y-2'>
                                        <p className='font-medium text-[20px]'>{app.title}</p>
                                        <div className='flex gap-3 justify-evenly'>
                                            <div className='flex gap-1 items-center'>
                                                <img className='h-4 w-4' src={Download} alt="" />
                                                <p className='text-[16px] font-medium text-[#00D390]'>{formatNumber(app.downloads)}</p>
                                            </div>
                                            <div className='flex gap-1 items-center'>
                                                <img className='h-4 w-4' src={Rating} alt="" />
                                                <p className='text-[16px] font-medium text-[#FF8811]'>{app.ratingAvg}</p>
                                            </div>
                                            <div>
                                                <p className='text-[#627382] text-[16px]'>{app.size} MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <button
                                        onClick={() => handleUninstall(app.id, app.title)}
                                        className='py-3 px-4 rounded-sm bg-[#00D390] text-[16px] font-semibold text-white cursor-pointer w-full'>
                                        Uninstall
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;