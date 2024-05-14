import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Plans = () => {
    return (
        <div className='plans-content flex flex-col justify-center items-center mt-32 px-0 md:px-[10%]'>
            <div className='plans-title w-[90%] sm:w-[70%] text-5xl font-semibold text-center'>
                Start making
                <span className='span text-orange-600'> smarter </span>
                decisions,<br />Choose a plan
            </div>
            <div className='plans-cards mt-28 flex flex-col lg:flex-row lg:w-[100%] w-[100%] items-center gap-6'>
                <div className='plans-card border-2 border-gray-300 bg-gradient-to-b from-white to-gray-50 p-5 rounded-3xl w-[80%] h-fit flex flex-col items-center'>
                    <div className='card-title font-bold text-lg mt-6'>Explorer</div>
                    <div className='card-price font-bold text-4xl mt-3'>
                        $4,99
                        <span className='span text-gray-600'>/mo</span>
                    </div>
                    <div className='card-features mt-6 font-semibold text-base'>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Limited Query Mapping</div>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Standard Dashboards</div>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Email Notifications</div>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Market Trend Analysis</div>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Entry-Level Support</div>
                    </div>
                    <div className='card-start w-[80%] px-4 py-2 mt-8 rounded-lg flex justify-center items-center cursor-pointer border-gray-200 border-2 bg-gradient-to-b from-white to-gray-100 font-semibold'>
                        Get now
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </div>
                </div>
                <div className='plans-card border-2 border-gray-300 bg-gradient-to-b from-white to-gray-50 p-5 rounded-3xl w-[80%] h-fit flex flex-col items-center'>
                    <div className='card-title font-bold text-lg mt-10 text-orange-600'>
                        Innovator
                        <span className='card-title-span bg-orange-100 font-semibold text-sm ml-2 px-3 py-1 rounded-md'>
                            <FontAwesomeIcon icon={faCircle} className='mr-2 w-2' />
                            BEST VALUE
                        </span>
                    </div>
                    <div className='card-price font-bold text-4xl mt-3'>
                        $19,99
                        <span className='span text-gray-600'>/mo</span>
                    </div>
                    <div className='card-features mt-6 font-semibold text-base'>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Everthing on Explorer, plus</div>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Predictive Analytics</div>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Advanced Query Mapping</div>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Customizable Dashboards</div>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Smart Alert System</div>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Extended Support</div>
                    </div>
                    <div className='card-start w-[80%] px-4 py-2 mt-8 rounded-lg flex justify-center items-center cursor-pointer bg-gradient-to-b from-orange-500 to-orange-600 font-semibold text-white'>
                        Get now
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </div>
                </div>
                <div className='plans-card border-2 border-gray-300 bg-gradient-to-b from-white to-gray-50 p-5 rounded-3xl w-[80%] h-fit flex flex-col items-center'>
                    <div className='card-title font-bold text-lg mt-6'>Visionary</div>
                    <div className='card-price font-bold text-4xl mt-3'>
                        $49,99
                        <span className='span text-gray-600'>/mo</span>
                    </div>
                    <div className='card-features mt-6 font-semibold text-base'>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Everythin in Innovator, plus</div>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Competitor Benchmarking</div>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Holistic Market Visualization</div>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Adaptive Strategy Planner</div>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />24/7 Priority Support</div>
                        <div className='card-feature mb-3'><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-orange-600" />Custom Integrations</div>
                    </div>
                    <div className='card-start w-[80%] px-4 py-2 mt-8 rounded-lg flex justify-center items-center cursor-pointer border-gray-200 border-2 bg-gradient-to-b from-white to-gray-100 font-semibold'>
                        Get now
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </div>
                </div>
            </div>
            <div className='plans-supports text-orange-500 flex flex-col sm:flex-row gap-5 sm:gap-10 mt-16 font-semibold'>
                <div>
                    <FontAwesomeIcon icon={faCircleCheck} className='text-orange-600 mr-2'/> Free Trial
                </div>
                <div>
                    <FontAwesomeIcon icon={faCircleCheck} className='text-orange-600 mr-2'/> Cancel anytime
                </div>
                <div>
                    <FontAwesomeIcon icon={faCircleCheck} className='text-orange-600 mr-2'/> Support included
                </div>
            </div>
        </div>
    )
}

export default Plans