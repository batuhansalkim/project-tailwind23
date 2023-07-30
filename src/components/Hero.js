import React from 'react'
import HeroImage from "../components/images/hero-background.jpg";
function Hero() {
  return (
    <div className='w-full h-[90vh]'>
      <img src={HeroImage} alt="" className='w-full h-full object-cover bg-gradient-to-r from-cyan-500 to-blue-500' />
          <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Speacial Trip</h1>
                <h2 className='text-4xl py-4 italic'>With Weekway</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magnam sint quibusdam perspiciatis fuga debitis nesciunt dolorum alias facilis molestias odio, iste a nisi voluptate! Ipsam praesentium iste porro pariatur? A et eligendi numquam nam mollitia aut omnis beatae tempora?</p>
            </div>
          </div>
    </div>
  )
}

export default Hero