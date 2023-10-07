// import React from 'react'
import { BsFillPlayFill,  } from 'react-icons/bs'
import { BiInfoCircle,  } from 'react-icons/bi'

// eslint-disable-next-line react/prop-types
function VideoTitle({ title = "default", overview }) {


  return (

    <div className="pt-[13%] px-20 absolute text-white z-40 bg-gradient-to-r from-gray-10 ">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="pt-3 text-lg w-1/2">{overview}</p>

      <div className="flex gap-3 mt-3">
        <div className='bg-white text-black p-2 w-20 h-10 rounded-md flex items-center gap-2 hover:opacity-80 duration-200'>
          <BsFillPlayFill />
          <button className="">
            Play</button>
        </div>

        <div className='bg-gray-500 text-white p-2 w-30 h-10 rounded-md flex items-center gap-2 bg-opacity-50 hover:opacity-80 duration-200'>
          <BiInfoCircle size={20} />
          <button className="">
            More Info</button>
        </div>

        {/* <button className="bg-white text-black p-2 w-24 rounded-md">More Info</button> */}
      </div>
    </div>
  )
}

export default VideoTitle