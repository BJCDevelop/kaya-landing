import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-center bg-opacity-25">
      <div id="banner" tabIndex={1} className="flex fixed z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center">
        <p className="text-sm font-light text-gray-500">Advertencia: Debe tener 21 años para visitar cualquiera de nuestras páginas web.</p>
      </div>
      <section>
        <div className="gap-8 items-center py-2 px-2 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <Image
              className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
              src="/dispensary.png"
              alt="Cultivators Logo"
              width={500}
              height={250}
              priority
            />
            <div className="mt-0 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Kaya Dispensary</h2>
                <p className="mb-6 font-light text-gray-400">En Kaya Dispensary, nuestra misión es hacerte sentir como en tu propio hogar, contento y en paz. Queremos brindarte la mejor calidad al mejor precio y una experiencia que nunca olvidarás.</p>
                <a href="https://kayadispensarypr.com" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-900">
                    ¡Visítanos ya!
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
      </section>
      <section>
        <div className="gap-8 items-center py-2 px-2 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <Image
              className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
              src="/cultivator.png"
              alt="Cultivators Logo"
              width={500}
              height={250}
              priority
            />
            <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Kaya Cultivators</h2>
                <p className="mb-6 font-light md:text-lg text-gray-400">Kaya Cultivators es un cultivo boutique con un enfoque artesanal. Todas nuestras plantas son alimentadas a mano diariamente e inspeccionadas por nuestro equipo de trabajo. Durante estos tiempos modernos, en los que la producción se ha convertido en lo mas importante para muchos, nuestra misión es mantener la cultura del cannabis intacta y proveerle a nuestros pacientes una flor de superior calidad.</p>
                <a href="https://kayacultivators.com" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-900">
                    ¡Visítanos ya!
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
      </section>
    </main>
  )
}
