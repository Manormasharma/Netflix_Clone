import React from 'react'
import { IMG_CND } from '../utils/constants'

const MovieCard = ({poster}) => {
  return (
      <img src={IMG_CND + poster } alt='Movie Poster' className='p-2' />
  )
}

export default MovieCard