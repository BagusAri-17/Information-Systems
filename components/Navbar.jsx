'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

  return (
    <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 container'>
            <ul className='container'>
                <Link href='/' className='flex items-center gap-4'>
                    <Image src="/../public/assets/Logo.png" alt="logo" width='40' height='20' />
                    <h3 className='text-3xl font-bold'>Bibrary</h3>
                </Link>
            </ul>
            <div>
                <ul style={{color: `${linkColor}`}} className='hidden md:flex space-x-12 text-[#516371] container'>
                    <Link href='/'>
                        <li className='text-lg border-primary hover:text-primary font-bold'>Home</li>
                    </Link>
                    <Link href='/about'>
                        <li className='text-lg border-primary hover:text-primary font-bold'>About</li>
                    </Link>
                    <Link href='/search'>
                        <li className='text-lg border-primary hover:text-primary font-bold'>Search</li>
                    </Link>
                </ul>

                <div onClick={handleNav} className='md:hidden cursor-pointer container'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-gray-900/60' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 container' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 container'}>
                <div> 
                    <div className='flex w-full items-center justify-between'>
                        <Image src='/../public/assets/Logo.png' alt='logo' width='90' height='10' />
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4 text-base'>Beyond the Edge</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='text-[#516371]'>
                        <Link href='/'>
                            <li onClick={() => setNav(false)} className='py-4 text-lg font-bold hover:border-b border-primary hover:text-primary'>Home</li>
                        </Link>
                        <Link href='/about'>
                            <li onClick={() => setNav(false)} className='py-4 text-lg font-bold hover:border-b border-primary hover:text-primary'>About</li>
                        </Link>
                        <Link href='/search'>
                            <li onClick={() => setNav(false)} className='py-4 text-lg font-bold hover:border-b border-primary hover:text-primary'>Search</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar