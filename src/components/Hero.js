import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[90vh]'>
          <img src="https://img.freepik.com/free-photo/beautiful-coastline-with-clear-sea-water-drone-photograph_53876-146258.jpg?w=1060&t=st=1690555879~exp=1690556479~hmac=c482cb43b191f49152a7711bc139a17dc1908cad982feff3bac66577c3a3b0e7" alt="" className='w-full h-full object-cover' />
          <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-black p-4'>
                <h1 className='font-bold text-4xl'>Find Your Speacial Trip</h1>
                <h2 className='text-4xl py-4 italic'>With Weekway</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magnam sint quibusdam perspiciatis fuga debitis nesciunt dolorum alias facilis molestias odio, iste a nisi voluptate! Ipsam praesentium iste porro pariatur? A et eligendi numquam nam mollitia aut omnis beatae tempora?</p>
            </div>
          </div>
    </div>
  )
}

export default Hero