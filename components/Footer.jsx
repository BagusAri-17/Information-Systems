'use client'
import React from 'react'
import Link from 'next/link'
import dataCategory from '../data/dataCategory.json'

const Footer = () => {
  return (
    <>
        <div className='mt-40 w-full bg-gray-50'>
            <div className='container'>
                <div className='flex flex-wrap justify-between w-full pt-10'>
                    <div className='w-full lg:w-1/5 px-4 mb-12'>
                        <h3 className='text-2xl font-bold text-primary mb-4'>Bibrary</h3>
                        <p className='text-[#516371] text-sm text-justify'>A journal provider website is a platform that offers access to a wide range of academic journals and scholarly publications.</p>
                    </div>
                    <div className='w-full lg:w-1/4 px-4 mb-12'>
                        <h3 className='text-lg font-bold text-primary mb-4'>Menu</h3>
                        <ul className='text-[#516371]'>
                            <Link href='/'>
                                <li className='text-sm mb-2 hover:underline'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='text-sm mb-2 hover:underline'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='text-sm mb-2 hover:underline'>Search</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='w-full lg:w-1/4 px-4 mb-12'>
                        <h3 className='text-lg font-bold text-primary mb-4'>Category</h3>
                        <ul className='text-[#516371]'>
                            {dataCategory.map((option, index) => {
                                return (
                                    <li key={index} className='text-sm mb-2'>{option.value}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='w-full lg:w-1/4 px-4 mb-12'>
                        <h3 className='text-lg font-bold text-primary mb-4'>Follow Us</h3>
                        <div className='space-y-4 text-[#516371]'>
                            <div className='flex flex-wrap gap-4 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>

                                <p className='text-sm'>bibraryofficial@gmail.com</p>
                            </div>
                            <div className='flex flex-wrap gap-4 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                </svg>
                                <p className='text-sm'>+62 813-3958-5537</p>
                            </div>
                            <div className='flex flex-wrap gap-4 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>

                                <p className='text-sm w-1/2'>Jl. Raya Kampus Unud, Jimbaran, Kec. Kuta Sel., Kabupaten Badung, Bali 80361</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-b border-gray-300 mt-10'></div>
                <div className='text-sm pb-10 mt-4 text-[#516371]'>© 2023 Bibrary, Inc. All rights reserved.</div>
            </div>
        </div>
    
    </>
  )
}

export default Footer