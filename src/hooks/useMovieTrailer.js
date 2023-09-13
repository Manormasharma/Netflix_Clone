import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMovieTrailer } from '../utils/movieSlice'
import { useEffect } from 'react'

const UseMovieTrailer = (movieId) =>{
    const dispatch = useDispatch()

    const getVideoTrailer = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
          API_OPTIONS
        )
        const json = await data.json();
        const filterData = await json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addMovieTrailer(trailer))
    }

    useEffect(()=> {
      getVideoTrailer();
    },[]);
}
export default UseMovieTrailer
