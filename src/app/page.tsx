import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-36 bg-center bg-opacity-25">
      <div className="flex p-4 text-sm text-yellow-800 rounded-lg dark:text-yellow-300" role="alert">
        <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">¡Advertencia!</span> Debes tener más de 18 años para poder ingresar a cualquiera de nuestros sitios web
        </div>
      </div>
      {/* Div Row */}
      <div className="flex flex-col items-center justify-center w-full max-w-5xl mt-12 lg:flex-row lg:justify-between lg:mt-0">
        <div className="relative border-inherit border-2 rounded-lg flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <a href="https://kayadispensarypr.com" target="_blank" rel="noopener noreferrer">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/dispensary.png"
              alt="Dispensary Logo"
              width={500}
              height={250}
              priority
            />
          </a>
        </div>
        <div className="relative border-inherit border-2 rounded-lg flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          {/* Link Image */}
          <a href="http://kayacultivators.com" target="_blank" rel="noopener noreferrer">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/cultivator.png"
              alt="Cultivators Logo"
              width={500}
              height={250}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  )
}
