import React from 'react'
import MovieSlider from './MovieSlider';

const MovieCards = ({title, movies}) => {
  const slider = React.useRef(null);
  return (
    <div className='px-4 py-4'>  
      <h1 className='font-bold mb-4'>{title}</h1>
      <MovieSlider movies={movies} />
    </div>
  )
}

export default MovieCards