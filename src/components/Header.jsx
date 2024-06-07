import React from 'react'
import logo from '../assets/icon/logoBlack.svg'
import bag from '../assets/icon/Bag.svg'

function Header() {
  return (
      <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont">
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
            <div>
                <img className='w-28' src={logo} alt="logoDark" />
            </div>
            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                        Home
                    </li>
                    <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                        Pages
                    </li>
                    <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                        Shop
                    </li>
                    <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                        Element
                    </li>
                    <li className='text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                        Blog
                    </li>
                </ul>
                <div className='relative'>
                    <img className='w-8' src={bag} alt="bag" />
                    <span className='absolute w-6 top-2 left-1 text-sm flex items-center justify-center font-semibold'>0</span>
                </div>
                <img className='w-8 h-8 rounded-full' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75af1fbb-fbaf-43a2-b0b4-5d3e06e30ef3/dfu4d01-e9e33818-f4fe-486f-bee0-53c2f0808ed9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1YWYxZmJiLWZiYWYtNDNhMi1iMGI0LTVkM2UwNmUzMGVmM1wvZGZ1NGQwMS1lOWUzMzgxOC1mNGZlLTQ4NmYtYmVlMC01M2MyZjA4MDhlZDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4zNCGLF1yuGuG7KzV9TW5T_7Im5vuRAzGv3vIO6RsGc" alt="profileImg" />
            </div>
        </div>
      </div>
  )
}

export default Header
