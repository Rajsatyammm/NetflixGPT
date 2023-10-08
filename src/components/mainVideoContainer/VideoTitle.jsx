// import React from 'react'
import { BsFillPlayFill, } from 'react-icons/bs'
import { BiInfoCircle, } from 'react-icons/bi'

// eslint-disable-next-line react/prop-types
function VideoTitle({ title = "default", overview }) {


  return (

    <div className='relative max-w-screen w-screen'>
      <div className="pt-[13%] px-20 absolute text-white bg-gradient-to-r from-gray-10 z-10">
        <h1 className="hidden md:block text-lg md:text-5xl md:font-bold">{title}</h1>
        <p className="hidden md:inline-block pt-3 text-lg w-1/2">{overview}</p>

        <div className="flex gap-3 mt-3">
          <div className='hidden bg-white text-black p-2 md:w-20 md:h-10 rounded-md md:flex items-center gap-2 hover:opacity-80 duration-200'>
            <BsFillPlayFill />
            <button className="">
              Play</button>
          </div>

          <div className='hidden md:visible bg-gray-500 text-white p-2 w-30 h-10 rounded-md md:flex items-center gap-2 bg-opacity-50 hover:opacity-80 duration-200'>
            <BiInfoCircle size={20} />
            <button className="">
              More Info</button>
          </div>

          {/* <button className="bg-white text-black p-2 w-24 rounded-md">More Info</button> */}
        </div>
      </div>
      <div className='absolute w-screen aspect-video bg-black bg-opacity-10'>
      </div>
    </div>
  )
}

export default VideoTitle