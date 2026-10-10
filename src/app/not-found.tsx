import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div className='flex flex-col items-center my-15 bg-white max-w-7xl mx-auto py-20 px-25 rounded-2xl space-y-5 '>
            <h1 className="text-5xl font-bold text-red-500">{(404).toLocaleString('bn-BD')}</h1>
            <p>হোম পেজে ফিরে যান</p>
            <Link href={'/'}><button className='px-5 btn'>হোম পেজ </button></Link>
        </div>
    );
};

export default notFound;