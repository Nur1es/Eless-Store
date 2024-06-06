import React from 'react'

function Banner() {
    const data = [
         'https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg',
         'https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg',
         'https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg',
         'https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg',
    ]
  return (
    <div className='w-full h-auto'>
      <div>
        <div className='w-[400vw] h-full flex overflow-x-hidden'>
            <img className='w-screen h-full object-cover' src={data[0]} alt="Img1" loading='priority'/>
            <img className='w-screen h-full object-cover' src={data[1]} alt="Img2" loading='priority'/>
            <img className='w-screen h-full object-cover' src={data[2]} alt="Img3" loading='priority'/>
            <img className='w-screen h-full object-cover' src={data[3]} alt="Img4" loading='priority'/>
        </div>
      </div>
    </div>
  )
}

export default Banner
