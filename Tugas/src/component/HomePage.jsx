import React from "react";
import binus from '../../public/binus.jpg'
import { Link } from 'react-router-dom'

function HomePage () {
    <>
    {/* chek */}
        <div className="min-h-screen bg-gradient-to-r from-sky-950 to-blue-950">
        <div className="bg-blue-600 rounded-b 3xl p-4 shadow-lg grid-cols-3 gap-6">
        <div className="'ml-350">  
            <img src= {binus} alt="" className='w-15 rounded-full'/>
    </div>
    </div>
        <div className="flex gap-6 scroll-auto"/>
        <div className="mt-12 ml-20 bg-white p-8 rounded -lg shadow-md w-full max-w-sm">
        <img
        src={binus}
        alt="L"
        className="mx-auto w-32 h-32 mb-6 rounded-full shadow-lg"
        />
        
        <h1 className="text-4xl font-bold mb-4">
            Selamat Datang di<br /> SMK BIna Nusantara Semarang
        </h1>
        <p className="mb-6 text-lg"> Penerima Peserta Didik Baru <br />Lorem</p>
        
        
        <Link to="/L">
        
        <button className="px-6 py-3 bg-white text-indigo-600 ml-25 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition">
            Daftar
        </button>
        </Link>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto px-4 w-2/3 mt-10">
        <h1 className="text-5xl font-bold text-center">Jurusan</h1>
        <div className="p-4 border-4 border-black rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2 text-white">TKJ</h2>
        <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Relicendis provident quibusdam et accusamus assumenda, non sint
            veniam voluptatem.
        </p>
        </div>
        </div>
        
    </div>
        <div  className="p-4 border-4 border-black rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-white">TSM</h2>
            <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipicing elit.Expedita,
                doloremque atque debitis ipsum esse eius perspiciatis culpa porro
                vaniam voluptatem.
            </p>
        </div>
        

        <h1 className='text-5xl mt-10 font-bold text-center'>Proyek</h1>
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4WbBY62S38u61P84aV-Jub1XRyrCTzEXdFA&s"></img>
    </div>
    <div></div>
    </>
}
export default HomePage;