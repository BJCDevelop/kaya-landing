import Image from "next/image"
import React from "react"

const Modal = ({ isVisible, onClose }) => {
    if (!isVisible) return null
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[200px] sm:w-[300px] md:w-[700px] flex flex-col'>
                <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
                <div className='bg-black bg-opacity-75 p-2 rounded items-center justify-center'>
                    <div className="flex flex-col items-center">
                        <Image
                        className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert mx-auto"
                        src="/dispensary.png"
                        alt="Cultivators Logo"
                        width={500}
                        height={250}
                        priority
                        />
                        <h1 className="text-center">Advertencia: Debe tener 21 años para visitar cualquiera de nuestras páginas web.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal