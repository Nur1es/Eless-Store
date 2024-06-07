import React from 'react'
import logo from '../assets/icon/logoWhite.svg'
import Cards from '../assets/icon/CardsIcon.svg'
import { BsFacebook,  BsGithub, BsInstagram, BsPaypal, BsPersonFill, BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
function Footer() {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            <div className='flex flex-col gap-7'>
                <img className='w-32' src={logo}alt="" />
                <p className='text-white text-sm tracking-wide'>@ naz1rbaevv_</p>
                <img className='w-56' src={Cards} alt="" />
                <div className='flex gap-5 text-lg '>
                  <BsGithub className='hover:text-white cursor-pointer duration-300'/>
                  <BsYoutube className='hover:text-white cursor-pointer duration-300'/>
                  <BsFacebook className='hover:text-white cursor-pointer duration-300'/>
                  <BsTwitter className='hover:text-white cursor-pointer duration-300'/>
                  <BsInstagram className='hover:text-white cursor-pointer duration-300'/>
                </div>
            </div>
            <div>
              <h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
                <div className='flex flex-col text-base gap-2'>
                  <p>Bishkek Chui/273.b</p>
                  <p>mobile 0709590511</p>
                  <p>phone 32819002</p>
                  <p>e-mail nurlesnazirbaev2@gmail.com</p>
                </div> 
            </div>
            <div>
              <h2 className='text-2xl font-semibold text-white mb-4'>prfile</h2>
              <div className='flex flex-col gap-2 text-base'>
                <p className='flex flex-row gap-3 items-center hover:text-white duration-300 cursor-pointer'><span><BsPersonFill/></span> my account</p>
                <p className='flex flex-row gap-3 items-center hover:text-white duration-300 cursor-pointer'><span><BsPaypal/></span> checkout</p>
                <p className='flex flex-row gap-3 items-center hover:text-white duration-300 cursor-pointer'><span><FaHome/></span> order tracking</p>
                <p className='flex flex-row gap-3 items-center hover:text-white duration-300 cursor-pointer'><span><MdLocationOn/></span> help & support</p>
              </div>
            </div>
            <div className='flex flex-col justify-center'>
              <input className='bg-transparent border px-4 py-2 text-sm' type="text" placeholder='e-mail' />
              <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black duration-300'>Subscride</button>
            </div>
        </div>
    </div>
  )
}

export default Footer
