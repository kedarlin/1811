import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='landing-footer bg-black text-white mt-10 px-5 md:px-[10%]'>
            <div className='landing-top flex flex-col sm:flex-row justify-between items-center py-20 mb-5 border-b-2 border-gray-100'>
                <div className='landing-top-left text-4xl flex-1 font-semibold'>Get your AI app built with<br></br>blazing speed.</div>
                <div className='landing-top-right mt-10 sm:mt-0'>
                    <div className='landing-start bg-orange-600 px-4 py-2 rounded-md text-white flex items-center'>
                        Get Started
                        <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                    </div>
                </div>
            </div>
            <div className='footer-bottom flex flex-row items-center py-10 mb-5 text-gray-300'>
                <div className='footer-bottom-left flex-1'>
                    <div className='footer-bottom-left-head pb-5 text-3xl'>GenAI</div>
                    <div className='footer-bottome-left-desc pb-5 w-[90%] sm:w-[50%]'>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</div>
                    <div className='footer-bottom-left-bot'>All Rights Reserved</div>
                </div>
                <div className='footer-bottom-right flex flex-row justify-between items-center flex-1'>
                    <div className='footer-bottom-right-1'>
                        <div className='footer-item pb-3'>About</div>
                        <div className='footer-item pb-3'>Contact</div>
                        <div className='footer-item pb-3'>Blog</div>
                        <div className='footer-item pb-3'>Story</div>
                    </div>
                    <div className='footer-bottom-right-2'>
                        <div className='footer-item pb-3'>Company</div>
                        <div className='footer-item pb-3'>Product</div>
                        <div className='footer-item pb-3'>Press</div>
                        <div className='footer-item pb-3'>More</div>
                    </div>
                    <div className='footer-bottom-right-3'>
                        <div className='footer-item pb-3'>Press</div>
                        <div className='footer-item pb-3'>Careers</div>
                        <div className='footer-item pb-3'>Newsletter</div>
                        <div className='footer-item pb-3'>More</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;