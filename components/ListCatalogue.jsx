import React from 'react'
import dataArticles from '../data/dataArticles.json'

const ListCatalogue = () => {
    
  return (
        <div className='w-full pt-20'>
          <div className='w-full h-full p-2 flex justify-center items-center'>
            <div className='grid grid-cols-1 mx-auto'>
                {dataArticles.map((items) => (
                    <a key={items.id} href={"/search/"+items.id} className="space-x-4 flex mb-4 p-6 border-t border-b border-t-gray-300 border-b-gray-300 hover:bg-blue-50 md:max-w-5xl max-w-xl">
                        <div>
                            <p className='text-xs mb-2 text-primary'>{items.date}</p>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">{items.title}</h5>
                            <p className="font-normal text-base text-gray-600">{items.author}</p>
                            <p className="font-normal mb-4 text-lg text-gray-600">{items.journalSc}</p>
                            <p className="font-normal text-lg text-gray-600 mb-2">{items.desc}</p>
                            <p className='text-base text-gray-800 font-bold'>{items.categories}</p>
                        </div>
                        <div className='space-y-4 text-center'>
                        <p className='text-xl font-semibold tracking-widest'>{items.readers}<span className='text-base block font-normal tracking-normal'>Reader</span></p>
                        <p className='text-xl font-semibold tracking-widest'>{items.visitor}<span className='text-base block font-normal tracking-normal'>Visitor</span></p>
                        </div>
                    </a>
                ))}
            </div>
          </div>
        </div>
  )
}

export default ListCatalogue