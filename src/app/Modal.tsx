import Image from "next/image"
import React from "react"

interface ModalProps {
    isVisible: boolean;
    exit: boolean;
    onClose: () => void;
    onExit: () => void;
  }

const Modal: React.FC<ModalProps> = ({ isVisible, exit, onClose, onExit }) => {
    if (exit) {
        return(
            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                <div className='w-[200px] sm:w-[300px] md:w-[700px] flex flex-col'>
                    {/* <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button> */}
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
                            <h1 className="text-center">Lo sentimos, no puedes ingresar a este sitio web.</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (!isVisible) return null
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[200px] sm:w-[300px] md:w-[700px] flex flex-col'>
                {/* <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button> */}
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
                    <div className="flex justify-center mt-4">
                        <button className="mr-2 bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded" onClick={() => onClose()}>Entrar</button>
                        <button className="text-white font-bold py-2 px-4 rounded" onClick={() => onExit()}>Salir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal