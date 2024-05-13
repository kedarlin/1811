import React from 'react'

const Body = () => {
  return (
    <div className='body-content flex justify-between items-center flex-col px-5 pt-12 md:px-[10%]'>
        <div className='body-content-1 flex flex-row justify-between items-start'>
            <div className='body-content-1-left text-6xl font-semibold'>
                <span className='span text-orange-600'>Transform Ideas</span><br />
                into apps with AI
            </div>
            <div className='body-content-1-right'>
                <img src='Assets/image-1.jpg' alt='image-1' className='image1 ml-[50%]' />
            </div>
        </div>
    </div>
  )
}

export default Body