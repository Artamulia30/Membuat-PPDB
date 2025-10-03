import React from "react";
import { Link } from 'react-router-dom'

function LadingPage () {
    <>
    {/* chek */}
        <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center font-bold text-black text-3xl md:text-5xl uppercase mb-10">
        <h1 className="drop-shadow-lg">Formulir Pendaftaran PPDB</h1>
        <h1 className="drop-shadow-lg">SMK BINA NUSANTARA SEMARANG</h1>
    </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4WbBY62S38u61P84aV-Jub1XRyrCTzEXdFA&s"></img>
    </div>
    
        <div className="flex justify-center  mt-10">
        <div className="bg-[blue] rounded-full p-4 md:p-6 shadow-xl w-full max-w-xs">
        <div className="text-center text-white font-extrablod text-xl md:text-3xl">
            <h1>Pendaftaran SMK Bina Nusantara Semarang</h1>
            <Link to="">
            <button className="=bg-amber-50">Masuk</button>
            </Link>
        </div>
        </div>
    </div>
    </>
}
export default LadingPage;