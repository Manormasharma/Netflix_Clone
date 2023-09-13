import React, { useEffect } from 'react'
import Header from './Header'
import UseNowPlayingMovies from "./../hooks/useNowPlaying"
import VideoCover from './VideoCover';
import ListContainer from './ListContainer';

const Browse = () => {
  UseNowPlayingMovies();

  return (
    <div className=''>
      <Header />
      <VideoCover />
      <ListContainer />
    </div>
    
  )
}

export default Browse