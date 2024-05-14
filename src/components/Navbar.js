import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars, faCross, faX } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='landing-navbar flex justify-between items-center flex-row bg-white px-5 py-4 md:px-[10%] fixed w-full'>
            <div className='sm:hidden'>
                <FontAwesomeIcon icon={faBars} className="text-gray-700 text-2xl cursor-pointer" onClick={toggleMenu} />
            </div>
            {showMenu && (
                <div className='sm:hidden absolute top-0 left-0 w-full bg-orange-400'>
                    <div className='flex flex-col items-center mt-4'>
                    <FontAwesomeIcon icon={faX} className="text-gray-700 text-2xl cursor-pointer font-extrabold" onClick={toggleMenu}/>
                        <p className='p-2 cursor-pointer'>Features</p>
                        <p className='p-2 cursor-pointer'>Products</p>
                        <p className='p-2 cursor-pointer'>Testimonial</p>
                        <p className='p-2 cursor-pointer'>FAQ</p>
                    </div>
                </div>
            )}
            <div className='landing-logo flex flex-row items-center'>
                <img src='/Assets/GenAI-Logo.jpg' className='logo-img w-5 h-5' alt='logo-img' />
                <div className='loggo-name text-#4b5563-700 text-xl font-medium pl-2'>GenAI</div>
            </div>
            <div className='landing-navbar-items items-center flex-row font-normal sm:display text-gray-900 hidden sm:flex'>
                <p className='p-2 cursor-pointer'>Features</p>
                <p className='p-2 cursor-pointer'>Products</p>
                <p className='p-2 cursor-pointer'>Testimonial</p>
                <p className='p-2 cursor-pointer'>FAQ</p>
            </div>
            <div className='landing-start bg-gradient-to-b from-orange-500 to-orange-600 px-4 py-2 rounded-md text-white flex items-center cursor-pointer'>
                Get Started
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </div>
        </div>
    );
}

export default Navbar;