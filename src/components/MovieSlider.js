import React, { useRef } from 'react'
import Slider from "react-slick";
import MovieCard from './MovieCard';
const MovieSlider = ({movies}) => {
  const settings = {
      dots: false,
      arrows : true,
      slidesToShow: 6,
      slidesToScroll:2,
      draggable: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  const slider = useRef(null);
  return (
    <>
      { movies ? 
      <Slider {...settings} className='relative'>
        {movies.map((movie) =>(
          <MovieCard key={movie.id} poster={movie.poster_path} className="p-4" />
        ))}
      </Slider>
      :<div>Loading...</div>
      }
    </>
  )
}

export default MovieSlider