import React, { useReducer } from 'react'
import logo from '../assets/icon/logoBlack.svg'
import bag from '../assets/icon/Bag.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

function Header() {
    const productData = useSelector((state) => state.eless.productData)
    const userInfo = useSelector((state) => state.eless.userInfo)
    console.log(userInfo);
  return (
      <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
            <Link to={'/'}>
                <div>
                    <img className='w-28' src={logo} alt="logoDark" />
                </div>
            </Link>
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
                <Link to={'/bag'}>
                    <div className='relative'>
                        <img className='w-8' src={bag} alt="bag" />
                        <span className='absolute w-6 top-2 left-1 text-sm flex items-center justify-center font-semibold'>{productData.length}</span>
                    </div>
                </Link>
                <Link to={'/login'}>
                    <img className='w-8 h-8 rounded-full' src={userInfo?userInfo.img : 'https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1'} alt="profileImg" />
                
                </Link>
                {
                    userInfo && <p className='text-base font-titleFont font-semibold underline underline-offset-2'>{userInfo.name}</p>
                }

            </div>
        </div>

      </div>
  )
}

export default Header
