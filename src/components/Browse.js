import React from 'react'
import Header from './Header'
import UseNowPlayingMovies from "./../hooks/useNowPlaying"
import VideoCover from './VideoCover';
import ListContainer from './SecondaryContainer';
import UsePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';

const Browse = () => {
  UseNowPlayingMovies();
  UsePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  return (
    <div className='bg-black text-white'>
      <Header />
      {/* <GptSearch/> */}
      <VideoCover />
      <ListContainer />
    </div>
    
  )
}

export default Browse