import React from 'react'
import Image from 'next/image'

const Company = () => {
  return (
    <div className='w-full pt-10'>
        <div className='container'>
            <div className="mx-auto max-w-3xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-primary">Trusted Partner</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                    Trusted by 5,000+ Companies Worldwide
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                    pulvinar et feugiat blandit at. In mi viverra elit nunc.
                </p>
            </div>
            <div className="w-full px-4 lg:mt-10">
                <div className="flex flex-wrap items-center lg:justify-center gap-8">
                    <div className='max-w-[250px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition'>
                        <Image src='/../public/assets/navLogo.png' alt='' width='100' height='100' />
                    </div>
                    <div className='max-w-[250px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition'>
                        <Image src='/../public/assets/navLogo.png' alt='' width='100' height='100' />
                    </div>
                    <div className='max-w-[250px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition'>
                        <Image src='/../public/assets/navLogo.png' alt='' width='100' height='100' />
                    </div>
                    <div className='max-w-[250px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition'>
                        <Image src='/../public/assets/navLogo.png' alt='' width='100' height='100' />
                    </div>
                    <div className='max-w-[250px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition'>
                        <Image src='/../public/assets/navLogo.png' alt='' width='100' height='100' />
                    </div>
                    <div className='max-w-[250px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition'>
                        <Image src='/../public/assets/navLogo.png' alt='' width='100' height='100' />
                    </div>
                </div>
            </div>
            <div className='mt-6 lg:text-center'>
                <h2 className="text-lg font-semibold leading-7 text-gray-800">And the other...</h2>
            </div>
        </div>
        
    </div>
  )
}

export default Company