import React from 'react';

const Features = () => {
    return (
        <div className='features-content flex flex-col items-center justify-center mt-32 px-5 md:px-[10%]'>
            <div className='features-title sm:w-[70%] text-5xl font-semibold sm:text-center'>
                <span className='span text-orange-600'>Essentially, </span>
                everything you need to ship your first AI app
            </div>
            <div className='features-cards mt-28 px-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='features-card border-2 border-gray-300 p-5 rounded-3xl max-w-96'>
                    <img src='Assets/image-5.jpg' className='card-img w-16 rounded-lg' alt='card' />
                    <div className='card-title font-bold text-xl mt-10'>Quality apps</div>
                    <div className='card-desc'>Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.</div>
                </div>
                <div className='features-card border-2 border-gray-300 p-5 rounded-3xl max-w-96'>
                    <img src='Assets/image-5.jpg' className='card-img w-16 rounded-lg' alt='card' />
                    <div className='card-title font-bold text-xl mt-10'>Quality apps</div>
                    <div className='card-desc'>Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.</div>
                </div>
                <div className='features-card border-2 border-gray-300 p-5 rounded-3xl max-w-96'>
                    <img src='Assets/image-5.jpg' className='card-img w-16 rounded-lg' alt='card' />
                    <div className='card-title font-bold text-xl mt-10'>Quality apps</div>
                    <div className='card-desc'>Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.</div>
                </div>
                <div className='features-card border-2 border-gray-300 p-5 rounded-3xl max-w-96'>
                    <img src='Assets/image-5.jpg' className='card-img w-16 rounded-lg' alt='card' />
                    <div className='card-title font-bold text-xl mt-10'>Quality apps</div>
                    <div className='card-desc'>Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.</div>
                </div>
                <div className='features-card border-2 border-gray-300 p-5 rounded-3xl max-w-96'>
                    <img src='Assets/image-5.jpg' className='card-img w-16 rounded-lg' alt='card' />
                    <div className='card-title font-bold text-xl mt-10'>Quality apps</div>
                    <div className='card-desc'>Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.</div>
                </div>
                <div className='features-card border-2 border-gray-300 p-5 rounded-3xl max-w-96'>
                    <img src='Assets/image-5.jpg' className='card-img w-16 rounded-lg' alt='card' />
                    <div className='card-title font-bold text-xl mt-10'>Quality apps</div>
                    <div className='card-desc'>Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.</div>
                </div>
            </div>
        </div>
    );
};

export default Features;
