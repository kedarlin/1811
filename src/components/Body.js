import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Body = () => {
  return (
    <div className='body-content flex justify-between items-center flex-col px-5 pt-32 md:px-[10%]'>
      <div className='body-content-1 flex flex-row justify-between items-center mt-18'>
        <div className='body-content-1-left flex-1'>
          <div className='body-content-1-left-title lg:text-7xl text-5xl font-semibold'>
            <span className='span text-orange-600'>Transform Ideas</span><br />
            into apps with AI
          </div>
          <div className='body-content-1-left-desc w-[90%] md:w-[60%] text-lg mt-5'>
            Step into a new era of strategic design-making. Horizon empowers businesses in the marketing space unparalleled
          </div>
          <div className='landing-start bg-gradient-to-b from-orange-500 to-orange-600 px-4 py-2 rounded-md text-white flex items-center w-fit mt-5 cursor-pointer'>
            Get Started
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </div>
        </div>
        <div className='body-content-1-right hidden sm:block flex-1'>
          <img src='Assets/Image-1.jpg' alt='image-1' className='image1 w-[100%] h-[100%] ml-[25%]' />
        </div>
      </div>

      <div className='body-content-2 flex flex-col text-center mt-40 w-[100%] lg:w-[60%] items-center'>
        <div className='body-content-2-top font-bold text-5xl'>
          Explore the power of AI apps generation
        </div>
        <div className='body-content-2-bottom text-xl mt-8 w-[100%] md:w-[80%]'>
          Unlock the full potential of your tech stack with Horizon&apos;s intitutive and Unlock the full potential of you tech stack with GenAI&apos;s intitutive and
        </div>
      </div>

      <div className='body-content-3 flex flex-col sm:flex-row justify-between mt-28'>
        <div className='body-content-3-left flex-1 sm:mb-0 mb-5'>
          <img src='Assets/Image-2.jpg' alt='image-1' className='image1 w-[90%]' />
        </div>
        <div className='body-content-3-right flex-1'>
          <div className='body-content-3-left-title text-6xl font-semibold'>
            <span className='span text-orange-600'>Unleash</span> the power of AI with GenAI
          </div>
          <div className='body-content-3-left-desc w-[90%] text-lg mt-5'>
            Stay ahead of the curve with out Dynamic Trend Analysis Feature. Unlock the full potential of your tech stack with Horizon&apos;s intitutive and Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon&apos;s intitutive and
          </div>
        </div>
      </div>

      <div className='body-content-4 flex flex-col-reverse sm:flex-row justify-between mt-32'>
        <div className='body-content-4-left flex-1'>
          <div className='body-content-4-left-title text-6xl font-semibold'>
            <span className='span text-orange-600'>Unleash</span> the power of AI with GenAI
          </div>
          <div className='body-content-4-left-desc w-[90%] text-lg mt-5'>
            Stay ahead of the curve with out Dynamic Trend Analysis Feature. Unlock the full potential of your tech stack with Horizon&apos;s intitutive and Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon&apos;s intitutive and
          </div>
        </div>
        <div className='body-content-4-right flex-1'>
          <img src='Assets/image-3.jpg' alt='image-1' className='image1 mb-5 sm:ml-[10%] w-[90%]' />
        </div>
      </div>

      <div className='body-content-5 flex flex-col sm:flex-row justify-between mt-32'>
        <div className='body-content-5-left flex-1 mb-5'>
          <img src='Assets/image-4.jpg' alt='image-1' className='image1 w-[90%]' />
        </div>
        <div className='body-content-5-right flex-1'>
          <div className='body-content-3-left-title text-6xl font-semibold'>
            <span className='span text-orange-600'>Unleash</span> the power of AI with GenAI
          </div>
          <div className='body-content-5-left-desc w-[90%] text-lg mt-5'>
            Stay ahead of the curve with out Dynamic Trend Analysis Feature. Unlock the full potential of your tech stack with Horizon&apos;s intitutive and Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon&apos;s intitutive and
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body