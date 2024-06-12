import React from 'react'
import UseMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'

const Videobg = ({movieId}) => {
  UseMovieTrailer(movieId)
  const trailerVideo = useSelector( store => store.movies?.movieTrailer);
  return (
    <div className='w-100'>
      <iframe className='w-screen bg-gradient-to-b from-black aspect-video' src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?si=S5UETZhLh9cxXGNk&wmode=opaque&autoplay=1&mute=1"}
        title="YouTube video player" 
        allowfullscreen
      >
      </iframe>
    </div>
  )
}

export default Videobg