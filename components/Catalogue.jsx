'use client'
import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

function Catalogue() {
  return (
    <>
      <Navbar />
      <div className='pt-40 w-full'>
        <div className='container'>
          <div className='flex flex-wrap justify-between items-center'>
            <div className='w-full lg:w-[65%]'>
              <h3 className='font-bold text-3xl md:text-4xl text-gray-800 leading-10 lg:leading-12 tracking-wide'>Perancangan Uiux Aplikasi Manajemen Penelitian Dan Pengabdian Kepada Masyarakat Menggunakan Aplikasi Figma</h3>
              <p className='pt-2 text-base'>Kurniawan, BRomzi M</p>
              <p className='italic text-base pt-1'>Jurnal Sistem Informasi Mahakarya (2022) 05(1) 1-7</p>
              
            </div>

            <div className='hidden lg:flex gap-8 lg:gap-12 md:w-[10%] lg:w-[20%] text-center'>
              <p className='text-xl lg:text-2xl font-semibold tracking-widest'>100<span className='text-base lg:text-lg block font-normal tracking-normal'>Reader</span></p>
              <p className='text-xl lg:text-2xl font-semibold tracking-widest'>102<span className='text-base lg:text-lg block font-normal tracking-normal'>Visitor</span></p>
            </div>
            <div className='flex lg:hidden gap-8 text-center pt-4'>
              <p className='text-xl lg:text-2xl font-semibold tracking-widest'>100<span className='text-base lg:text-lg block font-normal tracking-normal'>Reader</span></p>
              <p className='text-xl lg:text-2xl font-semibold tracking-widest'>102<span className='text-base lg:text-lg block font-normal tracking-normal'>Visitor</span></p>
            </div>
            
          </div>
          <button className='mt-2 px-4 py-2 border rounded bg-blue-200' type="">Download PDF</button>
          <div className='border-b border-gray-300 pt-10'></div>
          <div className='pt-10'>
            <h3 className='font-bold text-xl md:text-2xl text-gray-800'>Abstract</h3>
          </div>
          <div className=' lg:justify-between grid lg:grid-flow-col'>
            <div className='w-full lg:w-[80%]'>
              <p className='pt-6 text-base'>Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) merupakan lembaga yang melayani penelitian dan pengabdian masyarakat di Universitas Mahakarya Asia (UNMAHA). LPPM UNMAHA membutuhkan proses pelayanan yang tepat dan akurat agar sejalan dengan Visi dan Misi Perguruan Tinggi yang mengutamakan inovasi dan pembaharuan. Perkembangan teknologi dapat membantu mempercepat proses pelayanan di LPPM, salah satunya melibatkan penggunaan sistem informasi. Sistem informasi yang dibuat harus memperhatikan faktor User Interface (UI) dan User Experience (UX) karena kedua faktor tersebut dapat mempengaruhi keberhasilan penggunaan sistem di masa yang akan datang. Pada perancangan ini penulis membatasi materi yangdibahas berupa informasi penelitian dan pengabdian kepada masyarakat (Abdimas) di Universitas Mahakarya Asia meliputi Data Penelitian, Data Abdimas, Data Publikasi, dan Data Profil Dosen dengan aplikasi pengeditan menggunakan Figma. Dengan perancangan inidiharapkan Universitas Mahakarya Asia dapat menerapkan teknologi di bidang penelitian dan pengabdian kepada masyarakat untuk meningkatkan kinerja khususnya SDM bagi dosen sebagai peneliti, meningkatkan kualitas pelayanan, meningkatkan daya saing dan kualitas SDM yang berkualitas</p>
              <p className='pt-2 font-bold italic'>Keyword: <span className='font-normal not-italic'>Indonesia Traditional Dance, Ontology, Methontology, Protégé, SPARQL query</span></p>
            </div>
            <div className='pt-10 lg:pt-0'>
              <Image src='/../public/assets/journalImage.png' width='400' height='400' />
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalogue