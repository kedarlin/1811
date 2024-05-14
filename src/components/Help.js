import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Help = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <div className='help bg-gray-100 flex justify-between items-center flex-col px-5 pt-16 pb-32 md:px-[10%] mt-28'>
            <div className='contact-title text-5xl font-semibold text-center'>
                Need Help?
            </div>
            <div className='text-center text-gray-700 text-xl w-[90%] sm:w-[45%] mt-5 tracking-wider'>
                Don&apos;t worry, we got you. Here are some answers for your questions
            </div>
            <div className='help-titles mt-5 w-[90%] sm:w-[80%] flex flex-col justify-center items-center'>
                <div className='dropdown w-[100%] mb-4 bg-white rounded-md'>
                    <div
                        className='question cursor-pointer flex justify-between items-center rounded-md p-4 font-semibold'
                        onClick={() => toggleDropdown(0)}
                    >
                        <div>What is GenAI?</div>
                        <FontAwesomeIcon icon={openDropdown === 0 ? faChevronUp : faChevronDown} />
                    </div>
                    {openDropdown === 0 && (
                        <div className='answer border-t-2 border-gray-400 p-4 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod consequat justo, ut eleifend metus ultricies sed. Vestibulum convallis velit et ultrices tristique. Nullam fermentum dolor in vestibulum eleifend. Morbi sit amet ullamcorper est, eu auctor felis. Praesent faucibus, dolor sed vehicula scelerisque, lectus nulla sodales risus, nec congue ligula turpis ac velit. Donec non lorem at quam ultricies elementum. Proin nec sapien sed sapien malesuada congue. Suspendisse nec ligula arcu. Fusce et magna sed ante efficitur finibus.</div>
                    )}
                </div>
                <div className='dropdown w-[100%] mb-4 bg-white rounded-md'>
                    <div
                        className='question cursor-pointer flex justify-between items-center rounded-md p-4 font-semibold'
                        onClick={() => toggleDropdown(1)}
                    >
                        <div>lorem ipsum dolor sit amet?</div>
                        <FontAwesomeIcon icon={openDropdown === 1 ? faChevronUp : faChevronDown} />
                    </div>
                    {openDropdown === 1 && (
                        <div className='answer border-t-2 border-gray-400 p-4 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod consequat justo, ut eleifend metus ultricies sed. Vestibulum convallis velit et ultrices tristique. Nullam fermentum dolor in vestibulum eleifend. Morbi sit amet ullamcorper est, eu auctor felis. Praesent faucibus, dolor sed vehicula scelerisque, lectus nulla sodales risus, nec congue ligula turpis ac velit. Donec non lorem at quam ultricies elementum. Proin nec sapien sed sapien malesuada congue. Suspendisse nec ligula arcu. Fusce et magna sed ante efficitur finibus.</div>
                    )}
                </div>
                <div className='dropdown w-[100%] mb-4 bg-white rounded-md'>
                    <div
                        className='question cursor-pointer flex justify-between items-center rounded-md p-4 font-semibold'
                        onClick={() => toggleDropdown(2)}
                    >
                        <div>lorem ipsum dolor sit met lorem ipsum?</div>
                        <FontAwesomeIcon icon={openDropdown === 2 ? faChevronUp : faChevronDown} />
                    </div>
                    {openDropdown === 2 && (
                        <div className='answer border-t-2 border-gray-400 p-4 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod consequat justo, ut eleifend metus ultricies sed. Vestibulum convallis velit et ultrices tristique. Nullam fermentum dolor in vestibulum eleifend. Morbi sit amet ullamcorper est, eu auctor felis. Praesent faucibus, dolor sed vehicula scelerisque, lectus nulla sodales risus, nec congue ligula turpis ac velit. Donec non lorem at quam ultricies elementum. Proin nec sapien sed sapien malesuada congue. Suspendisse nec ligula arcu. Fusce et magna sed ante efficitur finibus.</div>
                    )}
                </div>
                <div className='dropdown w-[100%] mb-4 bg-white rounded-md'>
                    <div
                        className='question cursor-pointer flex justify-between items-center rounded-md p-4 font-semibold'
                        onClick={() => toggleDropdown(3)}
                    >
                        <div>lorem ipsum sit dolor amet selena?</div>
                        <FontAwesomeIcon icon={openDropdown === 3 ? faChevronUp : faChevronDown} />
                    </div>
                    {openDropdown === 3 && (
                        <div className='answer border-t-2 border-gray-400 p-4 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod consequat justo, ut eleifend metus ultricies sed. Vestibulum convallis velit et ultrices tristique. Nullam fermentum dolor in vestibulum eleifend. Morbi sit amet ullamcorper est, eu auctor felis. Praesent faucibus, dolor sed vehicula scelerisque, lectus nulla sodales risus, nec congue ligula turpis ac velit. Donec non lorem at quam ultricies elementum. Proin nec sapien sed sapien malesuada congue. Suspendisse nec ligula arcu. Fusce et magna sed ante efficitur finibus.</div>
                    )}
                </div>
                <div className='dropdown w-[100%] mb-4 bg-white rounded-md'>
                    <div
                        className='question cursor-pointer flex justify-between items-center rounded-md p-4 font-semibold'
                        onClick={() => toggleDropdown(4)}
                    >
                        <div>lorem k doli or lipe?</div>
                        <FontAwesomeIcon icon={openDropdown === 4 ? faChevronUp : faChevronDown} />
                    </div>
                    {openDropdown === 4 && (
                        <div className='answer border-t-2 border-gray-400 p-4 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod consequat justo, ut eleifend metus ultricies sed. Vestibulum convallis velit et ultrices tristique. Nullam fermentum dolor in vestibulum eleifend. Morbi sit amet ullamcorper est, eu auctor felis. Praesent faucibus, dolor sed vehicula scelerisque, lectus nulla sodales risus, nec congue ligula turpis ac velit. Donec non lorem at quam ultricies elementum. Proin nec sapien sed sapien malesuada congue. Suspendisse nec ligula arcu. Fusce et magna sed ante efficitur finibus.</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Help;