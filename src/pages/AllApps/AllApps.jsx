import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CardApp from '../../components/CardApp/CardApp';


const AllApps = () => {
    const data = useLoaderData()

    const [search, setSearch] = useState("");

    const filteredApps = data.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase()))
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
                        <h4 className='text-xl md:text-2xl font-semibold'>({filteredApps.length}) Apps Found</h4>
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
                            <input type="search"
                                placeholder="Search Apps"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)} />
                        </label>
                    </div>
                </div>
            </div>
            {/* Card Container */}
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                   filteredApps.length > 0 ? (
                        filteredApps.map(app => (
                            <CardApp key={app.id} app={app} />
                        ))
                    ) : (
                        <p>No App Found</p>
                    )
                }
            </div>
        </div>
    );
};

export default AllApps;