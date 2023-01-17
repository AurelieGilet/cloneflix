import { createSlice } from "@reduxjs/toolkit";

const ApiSlice = createSlice({
    name: "API",
    initialState: {
        url: "https://api.themoviedb.org/3/",
        key: "?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr",
        moviesTopRated: [],
        seriesTopRated: [],
        moviesGenres: [],
        seriesGenres: [],
        moviesPerGenres: [],
        seriesPerGenres: [],
        moviesUpcoming: [],
    },
    reducers: {
        setMoviesTopRated: (state, action) => {
            state.moviesTopRated = action.payload.rated;
        },
        setSeriesTopRated: (state, action) => {
            state.seriesTopRated = action.payload.rated;
        },
        setMoviesGenres: (state, action) => {
            state.moviesGenres = action.payload.genre;
        },
        setSeriesGenres: (state, action) => {
            state.seriesGenres = action.payload.genre;
        },
        setMoviesPerGenres: (state, action) => {
            state.moviesPerGenres = [
                ...state.moviesPerGenres,
                { name: action.payload.movies.name, id: action.payload.movies.id, arr: action.payload.movies.arr },
            ];
        },
        setSeriesPerGenres: (state, action) => {
            state.seriesPerGenres = [
                ...state.seriesPerGenres,
                { name: action.payload.series.name, id: action.payload.series.id, arr: action.payload.series.arr },
            ];
        },
        setMoviesUpcoming: (state, action) => {
            state.moviesUpcoming = action.payload.upcoming;
        },
    },
});

export const {
    setMoviesTopRated,
    setSeriesTopRated,
    setMoviesGenres,
    setSeriesGenres,
    setMoviesPerGenres,
    setSeriesPerGenres,
    setMoviesUpcoming,
} = ApiSlice.actions;
export default ApiSlice.reducer;
