import React, { useState } from "react";

export const Card3: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleHoverEnter = (): void => {
        setIsOpen(false);
    }
    const handleHoverLeave = (): void => {
        setIsOpen(true);
    }

    return (
        <div className="flex flex-col items-center animate__animated animate__fadeInRight">
            <div
                className={`flex gap-6 mt-16`}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
            >
                <div className={`w-44 h-64 rounded-lg   shadow-lg
                 white z-0 ${isOpen ? "-rotate-12 translate-x-14" : ""} transition duration-300  bg-white`}>
                    <img src="./gorra.png" alt="" className="rounded-t-lg w-full h-48" />
                    <div className="text-center p-2 flex gap-3 justify-center items-center -ml-1">
                        <div>
                            <img src="./logo.svg" alt="" className="w-10 h-10 rounded-full" />
                        </div>
                        <div>
                            <h2 className="text-xl">Accesorios</h2>
                        </div>
                    </div>
                </div>
                <div className={`w-44 h-64 rounded-lg  shadow-lg
                  white  z-10 ${isOpen ? "-translate-y-8" : ""} transition duration-300 bg-white`}>
                    <img src="./image3.png" alt="" className="rounded-t-lg w-full h-48" />
                    <div className="text-center p-2 flex gap-3 justify-center items-center -ml-1">
                        <div >
                            <img src="./logo.svg" alt="" className="w-10 h-10 rounded-full" />
                        </div>
                        <div>
                            <h2 className="text-xl">Mug's</h2>

                        </div>
                    </div>
                </div>
                <div className={`w-44 h-64 rounded-lg  shadow-lg
                  white z-0 ${isOpen ? "rotate-12 -translate-x-14" : ""} transition duration-300 bg-white`}>
                    <img src="./camisetas.png" alt="" className="rounded-t-lg w-full h-48" />
                    <div className="text-center p-2 flex gap-3 justify-center items-center -ml-1">
                        <div >
                            <img src="./logo.svg" alt="" className="w-10 h-10 rounded-full" />
                        </div>
                        <div>
                            <h2 className="text-xl">Camisetas</h2>

                        </div>
                    </div>
                </div>

            </div>
            {/* El siguiente elemento 2 */}
            <div className="text-center z-40 mt-10 text-white">
                <h2 className="text-4xl"> Y mucho más...</h2>
                <p className="mt-4 text-2xl"> Visitanos en:</p>
                <div className="w-96 flex justify-center mt-6 gap-3">
                    <a href="https://www.facebook.com/DisenArteMocoa"><img src="./facebook.png" alt="" className="border-2 rounded-lg shadow-white shadow-lg w-14 h-14 hover:scale-125 transition duration-100 contrast-200" /></a>
                    <a href="https://www.tiktok.com/@disenarte_publicidad"><img src="./tik-tok.png" alt="" className="border-2 rounded-lg shadow-white shadow-lg w-14 h-14 hover:scale-125 transition duration-100 contrast-200" /></a>
                    <a href="https://www.instagram.com/disenartemocoa/"><img src="./instagram.png" alt="" className="border-2 rounded-lg shadow-white shadow-lg w-14 h-14 hover:scale-125 transition duration-100 contrast-200" /></a>
                </div>
            </div>
        </div>

    );
};
