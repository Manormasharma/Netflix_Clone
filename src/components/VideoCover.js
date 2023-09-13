import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'

const VideoCover = () => {
    const movies = useSelector( store => store.movies?.nowPlayingMovies)
    if(!movies) return ;
    const MainMovie = movies[0]
    const {original_title, poster_path ,overview , id} = MainMovie
    return (
        <>
            <div className='relative'>
                <VideoBg movieId={id} />
                <VideoTitle title={original_title} poster={poster_path} overview={overview}/>  
            </div>
        </>
    )
}

export default VideoCover