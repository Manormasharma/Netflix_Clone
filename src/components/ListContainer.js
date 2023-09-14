import React from 'react'
import MovieCards from './MovieCards'

const ListContainer = () => {
  return (
    <div>
      <MovieCards title="Now Playing" />
      <MovieCards title="Top Rated" />
      <MovieCards title="Popular" />
      <MovieCards title="Upcoming Releases" />
    </div>
  )
}

export default ListContainer