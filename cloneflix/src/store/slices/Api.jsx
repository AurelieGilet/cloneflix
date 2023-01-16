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
    },
});

export const { setMoviesTopRated, setSeriesTopRated, setMoviesGenres, setSeriesGenres } = ApiSlice.actions;
export default ApiSlice.reducer;
