import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className='contact-content flex justify-between items-center flex-col px-5 pt-5 md:px-[10%] mt-28 text-center'>
            <div className='contact-title w-[90%] sm:w-[70%] text-5xl font-semibold text-center'>
                Detect your next
                <span className='span text-orange-600'> big move</span>
            </div>
            <div className='content-content-1-left-desc w-[90%] md:w-[60%] text-lg mt-5'>
                Experience the synergy of your favorite tools working seamlessly together, all powered by Horizon&apos;s cutting-edge AI analytics
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center w-[100%] mt-8'>
                <input className='content-input bg-gray-200 py-2 px-4 rounded-md w-[70%] sm:w-[40%] placeholder-gray-600' placeholder="youremail@gmail.com" type="email" name="email"/>
                <div className='content-start bg-gradient-to-b from-orange-500 to-orange-600 px-4 py-2 rounded-md text-white flex items-center mt-4 sm:mt-0 sm:ml-4 cursor-pointer'>
                    Subscribe now
                </div>
            </div>
        </div>
    )
}

export default Contact