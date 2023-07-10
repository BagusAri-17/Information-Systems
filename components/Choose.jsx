import React from 'react'
import Image from 'next/image'

const Choose = () => {
    const features = [
        {
            name: 'Access your library, everywhere',
            desc: 'Add papers directly from your browser with a few clicks or import any documents from your desktop. Access your library from anywhere. Windows, Mac, Linux and all browsers.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" /></svg>
        },
        {
            name: 'Easy referencing',
            desc: 'Generate references, citations and bibliographies in a whole range of journal styles with just a few clicks.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" /></svg>
        },
        {
            name: 'Career development',
            desc: '250,000 science, technology and health jobs to advance your career.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" /></svg>
        },
        {
            name: 'A wide and robust network',
            desc: 'It provides users with the opportunity to connect with a wide research community, share knowledge, and establish beneficial collaborations in the research and academic environment.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path fillRule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
        },
        {
            name: 'Keeping literature up to date',
            desc: "Provides updates on the latest scholarly publications in the user's field of interest. Users can follow authors, journals, or specific topics to stay informed about the latest developments in their research.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg>
        },
        {
            name: 'Efficiently and effectively',
            desc: "provide a great experience for researchers in managing, sharing, and finding scientific literature more efficiently and effectively.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" /></svg>
          
        },

    ]

  return (
    

    <>
        <div className='w-full pt-64'>
            <div className='container'>
                <div className="mx-auto max-w-3xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Bibrary is faster</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                        Why should you use a Bibrary
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                        pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p>
                </div>
                <div className="mt-16 sm:mt-20 lg:mt-24">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-20 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        {features.map((feature) => (
                        <div key={feature.name} className="relative pl-16">
                            <dt className="text-xl font-semibold leading-7 text-gray-800">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                    {feature.icon}
                                </div>
                            {feature.name}
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">{feature.desc}</dd>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    </>



    // <div className='w-full py-20'>
    //     <h2 className='text-3xl sm:text-4xl text-gray-800 text-center pb-20'>Alasan anda harus memilih Bibrary</h2>
    //     <div className='w-full'>
    //         <div className='grid grid-cols-1 space-y-10'>
    //             <div className='flex flex-wrap items-center justify-center gap-20'>
    //                 <div className='max-w-lg'>
    //                     <h2 className='text-3xl sm:text-4xl pb-4'>Access your library, everywhere</h2>
    //                     <p className='text-sm'>Add papers directly from your browser with a few clicks or import any documents from your desktop. Access your library from anywhere. Windows, Mac, Linux and all browsers.</p>
    //                 </div>
    //                 <div className='flex items-center'>
    //                     <Image src='/../public/assets/navLogo.png' alt='' width='200' height='200' />
    //                 </div>
    //             </div>
    //             <div className='flex flex-wrap items-center justify-center gap-20'>
    //                 <div className='max-w-lg'>
    //                     <h2 className='text-3xl sm:text-4xl pb-4'>Access your library, everywhere</h2>
    //                     <p className='text-sm'>Add papers directly from your browser with a few clicks or import any documents from your desktop. Access your library from anywhere. Windows, Mac, Linux and all browsers.</p>
    //                 </div>
    //                 <div className='flex items-center'>
    //                     <Image src='/../public/assets/navLogo.png' alt='' width='200' height='200' />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Choose