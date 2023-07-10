import React from 'react'

const AboutUs = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center container">
        <div className="gap-16 items-center py-8 mx-auto  lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-600 sm:text-lg ">
            <h2 className="text-base font-semibold leading-7 text-primary mb-2">About Bibrary</h2>
            <p className="mb-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Your Trusted Destination for Scholarly Journals
            </p>
            <p className="text-sm lg:text-lg">
              Bibrary is a free web and desktop reference management application. It helps you simplify your reference management workflow so you can focus on achieving your goals. Bibrary empowers researchers, academics, and students to manage their references effectively, saving valuable time and ensuring accuracy in their scholarly work. Explore the extensive features of Bibrary and elevate your research experience today.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1544640808-32ca72ac7f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-8 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
  )
}

export default AboutUs