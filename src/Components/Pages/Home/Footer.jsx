import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="flex flex-col">

                <div className="bg-black p-10 flex flex-wrap justify-between">
                    <div className='w-full md:w-[20%] flex flex-col gap-5'>
                        <img src="https://www.eccouncil.org/wp-content/uploads/2020/12/ec-council-white-logo.png" className='w-[18vw]' alt="" srcset="" />
                        <p className='text-white text-sm'>EC-Council was formed in 2001 after very disheartening research following the 9/11 attack on the World Trade Center. Founder and CEO of the EC-Council Group, Jay Bavisi, after watching the attacks unfold, raised the question, what if a similar attack were to be carried out on the cyber battlefield?
                            <br />
                            <span className='text-red-600 font-bold text-md'>Read More...</span>
                        </p>
                        <div className='text-white flex gap-2'>
                            <span className='p-3 rounded-full bg-[#ff0007]'><FaFacebook size={18}/></span>
                            <span className='p-3 rounded-full bg-[#ff0007]'><FaTwitter size={18}/></span>
                            <span className='p-3 rounded-full bg-[#ff0007]'><FaYoutube size={18}/></span>
                            <span className='p-3 rounded-full bg-[#ff0007]'><FaLinkedin size={18}/></span>
                            <span className='p-3 rounded-full bg-[#ff0007]'><FaInstagram size={18}/></span>
                        </div>
                    </div>
                    <div className='w-full md:w-[20%]'></div>
                    <div className='w-full md:w-[20%]'></div>
                    <div className='w-full md:w-[20%]'></div>
                    <div className='w-full md:w-[20%]'></div>
                </div>

                <div className="bg-[#c8000b] text-center text-zinc-100 text-sm py-6">
                    Copyright 2024 &copy; SAPNA  MAHTO &nbsp;&nbsp; |  &nbsp;&nbsp; Partner With Us&nbsp;&nbsp; | &nbsp;&nbsp; Legal
                </div>
 
            </div>
        </>
    )
}

export default Footer