import React from 'react'

function Activities() {
  return (
      <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
              <img className='w-full h-full object-cover relative border-4 shadow-lg' src="https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
        <div className='relative p-4'>
              <h3 className='absolute z-10 top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-bold'>Cruises</h3>
              <img className='w-full h-full object-cover relative border-4 shadow-lg' src="https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
        <div className='relative p-4 '>
              <h3 className='absolute z-10 text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-bold'>Excursions</h3>
              <img className='w-full h-full object-cover relative border-4 shadow-lg' src="https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
    </div>
  )
}

export default Activities