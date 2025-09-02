import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12 absolute'>
        <h1 className='text-6xl font-bold text-white'>{title}</h1>
        <p className='py-6 text-lg w-1/4 text-white'>{overview}</p>
        <div>
            <button className='bg-gray-400 text-white p-2 px-8 rounded-md text-lg mr-3 '>▶️ Play</button>
            <button className='bg-gray-400 text-white p-2 px-8 rounded-md text-lg '>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle