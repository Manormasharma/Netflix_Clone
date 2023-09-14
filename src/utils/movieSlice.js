import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        movieTrailer: null,
        popularMovies: null,
        // topRatedMovie: null,
        // upcomingMovie: null
    },
    reducers: {
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload
        },
        addMovieTrailer : (state, action) =>{
            state.movieTrailer = action.payload
        } ,
        addPopularMovies: (state, action) =>{
            state.popularMovies = action.payload
        },
        // addTopRatedMovies: (state, action) =>{
        //     state.topRatedMovie = action.payload
        // },
        // addUpcomingMovies: (state, action) =>{
        //     state.upcomingMovie = action.payload
        // },
        
    }
})

export const {
    addNowPlayingMovies,
    addMovieTrailer,
    addPopularMovies,
    addTopRatedMovies,
    addUpcomingMovies
} = movieSlice.actions

export default movieSlice.reducer;