import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {

    let menus = [
        { id: 1, name: "Train & Certify" },
        { id: 2, name: "Degrees" },
        { id: 3, name: "Advisory" },
        { id: 4, name: "About" },
    ]

    return (
        <>
            <div className="bg-black flex justify-center md:justify-between items-center flex-wrap px-4 md:px-8 md:h-[11vh]">
                
                <img className='w-[20vw] md:w-[9vw] py-4' src="https://www.eccouncil.org/wp-content/uploads/2020/12/ec-council-white-logo.png" alt="" srcset="" />

                <div className='flex items-center flex-wrap'>

                    {
                        menus?.map((elem, index) =>
                            <span key={index} className='text-white text-sm md:text-lg font-semibold p-2 md:p-4 cursor-pointer hover:border-t-2 hover:border-red-500'>{elem?.name}</span>
                        )
                    }

                    <button className='text-white bg-[#ff0007] text-sm uppercase font-semibold rounded-sm px-3 md:px-6 py-1 md:py-2'>Get Training!</button>

                    <span className='text-white bg-[#69727d] p-2 rounded-full ml-4'><FaSearch size={20} /></span>

                </div>

            </div>
        </>
    )
}

export default Navbar