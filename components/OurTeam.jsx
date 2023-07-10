import React from 'react'

function OurTeam() {

  const dataTeam = [
    {
      id: 1,
      name: 'Bagus Ari',
      role: 'UI UX',
      images: '/assets/paper.jpg',
      github: 'https://universitas-udayana'
    },
    {
      id: 2,
      name: 'Wayan Dimas',
      role: 'Research',
      images: '/assets/dimas.jpg',
      github: 'https://universitas-udayana'
    },
    {
      id: 3,
      name: 'Agung Mahadana',
      role: 'UI UX',
      images: '/assets/agoeng.jpg',
      github: 'https://universitas-udayana'
    },
    {
      id: 4,
      name: 'Pande Dani',
      role: 'Research',
      images: '/assets/library.jpg',
      github: 'https://universitas-udayana'
    },
    {
      id: 5,
      name: 'Matthew Novan',
      role: 'UI UX',
      images: '/assets/matthew.jpg',
      github: 'https://universitas-udayana'
    },
    {
      id: 6,
      name: 'Ngurah Bagus',
      role: 'Research',
      images: '/assets/library.jpg',
      github: 'https://universitas-udayana'
    },
    {
      id: 7,
      name: 'Gede Dikka',
      role: 'Research',
      images: '/assets/library.jpg',
      github: 'https://universitas-udayana'
    },
    {
      id: 8,
      name: 'Krisna Wandhana',
      role: 'Research',
      images: '/assets/krisbu.jpg',
      github: 'https://universitas-udayana'
    },
  ]


  return (
    <section className='pt-40 container'>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary mb-2">Our Team</h2>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            Your Trusted Destination for Scholarly Journals
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {dataTeam.map((items) => (
            <div key={items.id} className="text-center text-gray-500 ">
              <img
                className="mx-auto mb-4 w-32 h-32 rounded-full"
                src={items.images}
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                {items.name}
              </h3>
              <p>{items.role}</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href={items.github}
                    className="text-gray-900 hover:text-gray-900/80"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default OurTeam