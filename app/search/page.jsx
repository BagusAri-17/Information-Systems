'use client'
import { useState, useEffect, useMemo } from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import dataArticles from '../../data/dataArticles.json'
import dataCategory from '../../data/dataCategory.json'


export default function page() {
  const [category, setCategory] = useState("");

  const [search, setSearch] = useState('');

  const journals = useMemo(() => {
    if (category === "") {
      if (search === "") {
        return dataArticles;
      } else {
        return dataArticles.filter((journal) => {
          const searchFields = `${journal.categories.toLowerCase()}`;
          return searchFields.includes(search.toLowerCase());
        });
      }
    }

    return dataArticles.filter((journal) => {
      const journalCategory = `${journal.categories.toLowerCase()}`
      return journalCategory.includes(category.toLowerCase());
    });

  }, [category, search]);


  useEffect(() => {
    if (search !== "") {
      setCategory("");
    }
  }, [search]);

  return (
      <>
        <Navbar />
        <div className='w-full pt-40'>
          <div className='w-full h-full p-2 flex md:flex-none justify-center items-center'>
              <div className='md:w-1/2 w-4/5 mx-auto'>
                  <h2 className='font-bold text-3xl sm:text-4xl py-2 text-gray-800'>Welcome to <span className='text-primary'>Bibrary</span></h2>
                  <p className='py-4 text-gray-600'>Search for and add articles to your library</p>
                  <form className=''>
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Journal, Article..." required />
                        {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button> */}
                    </div>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      id="countries"
                      className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
                    >
                      {dataCategory.map((option, i) => {
                        return (
                          <option value={option.value} key={i}>
                            {option.label}
                          </option>
                        );
                      })}
                    </select>
                  </form>
              </div>
          </div>
        </div>

        {/* List */}
        <div className='w-full pt-20'>
          <div className='w-full h-full p-2 flex justify-center items-center'>
            <div className='grid grid-cols-1 mx-auto'>
                {journals.map((items, index) => {
                  return (
                    <a key={index} target='_blank' href={''+items.link} className="space-x-4 flex mb-4 p-6 border-t border-b border-t-gray-300 border-b-gray-300 hover:bg-blue-50 md:max-w-5xl max-w-xl">
                        <div>
                            <p className='text-xs mb-2 text-primary'>{items.date}</p>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">{items.title}</h5>
                            <p className="font-normal text-base text-gray-600">{items.author}</p>
                            <p className="font-normal mb-4 text-lg text-gray-600">{items.journalPublication}</p>
                            <p className="font-normal text-lg text-gray-600 mb-2">{items.desc}</p>
                            <p className='text-base text-gray-800 font-bold'>{items.categories}</p>
                        </div>
                        <div className='space-y-4 text-center'>
                        <p className='text-xl font-semibold tracking-widest'>{items.readers}<span className='text-base block font-normal tracking-normal'>Reader</span></p>
                        <p className='text-xl font-semibold tracking-widest'>{items.visitor}<span className='text-base block font-normal tracking-normal'>Visitor</span></p>
                        </div>
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
        
        <Footer />
      </>
      
      


  )
}
