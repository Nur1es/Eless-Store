import React from 'react'
import ProductsCard from './ProductsCard'

export default function Products() {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Best Shoping</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugit animi nam deserunt
             quas veniam quaerat expedita inventore alias velit perferendis nihil,
             voluptates fuga assumenda laboriosam sed. Distinctio, eaque laborum?</p>
      </div>
      <div className='max-w-screen-xl mx-auto'>
        <ProductsCard/>
      </div>
    </div>
  )
}
