import React, { useState } from 'react'
import MovieCards from './MovieCards'
import { useSelector } from 'react-redux';
const SecondaryContainer = () => {
  const movies = useSelector( store => store.movies);
  return (
    movies.nowPlayingMovies && (
    <div>
      <MovieCards title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieCards title="Top Rated" movies={movies.topRatedMovie} />
      <MovieCards title="Popular" movies={movies.popularMovies} />
      <MovieCards title="Upcoming Releases" movies={movies.upcomingMovie} />
    </div>
    )
  )
}

export default SecondaryContainer