import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    
      <div className='w-screen aspect-video absolute top-0 px-6 bg-gradient-to-r from-black'>
        <div className='movie-details text-white pt-72'>
          <h1 className='text-6xl font-bold mb-4 '>{title}</h1>
          <p className='mb-4 w-25'>{overview}</p>  
          <div>
            <button className='py-2 px-3 bg-white me-3 text-black font-bold'> Play</button>
            <button className='py-2 px-3 bg-gray-700 font-bold opacity-80'>More Info </button>
          </div>
        </div>
      </div>
  )
}

export default VideoTitle