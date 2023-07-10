import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='text-lg leading-8 text-gray-600'>Beyond the Edge</p>
                <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl py-2 text-gray-800'>Welcome to <span className='text-primary'>Bibrary</span></h1>
                <p className='mt-4 text-lg leading-8 text-gray-600 max-w-[70%] m-auto'>Explore a world of knowledge, insights, and expertise from writers across various topics.</p>
                <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
                    <a href='/' className='px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-md'>Search Your Article</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero