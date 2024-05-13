import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className='landing-navbar flex justify-between items-center flex-row  px-5 pt-5 md:px-[10%]'>
            <div className='landing-logo flex flex-row items-center'>
                <img src='/Assets/GenAI-Logo.jpg' className='logo-img w-5 h-5' alt='logo-img' />
                <div className='loggo-name text-#4b5563-700 text-xl font-medium pl-2'>GenAI</div>
            </div>
            <div className='landing-navbar flex items-center flex-row font-normal sm:display text-gray-900 hidden sm:flex'>
                <p className='p-2 cursor-pointer'>Features</p>
                <p className='p-2 cursor-pointer'>Products</p>
                <p className='p-2 cursor-pointer'>Testimonial</p>
                <p className='p-2 cursor-pointer'>FAQ</p>
            </div>
            <div className='landing-start bg-orange-500 px-4 py-2 rounded-md text-white flex items-center'>
                Get Started
                <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </div>
        </div>
    );
}

export default Navbar;