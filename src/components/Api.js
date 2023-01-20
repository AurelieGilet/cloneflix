import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setMoviesTopRated,
    setSeriesTopRated,
    setMoviesGenres,
    setSeriesGenres,
    setMoviesPerGenres,
    setSeriesPerGenres,
    setMoviesUpcoming,
} from "../store/slices/ApiSlice";

const Api = () => {
    const dispatch = useDispatch();
    const MovieGenre = useSelector((state) => state.API.moviesGenres);
    const SerieGenre = useSelector((state) => state.API.seriesGenres);

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };
    // console.log(MovieGenre);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr-fr`)
            .then((res) => res.json())
            .then((res) => dispatch(setMoviesTopRated({ rated: res.results })));

        fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr-fr")
            .then((res) => res.json())
            .then((res) => dispatch(setSeriesTopRated({ rated: res.results })));

        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr-fr")
            .then((res) => res.json())
            .then((res) => dispatch(setMoviesGenres({ genre: res.genres })));

        fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr-fr")
            .then((res) => res.json())
            .then((res) => dispatch(setSeriesGenres({ genre: res.genres })));
        fetch(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr-fr&page=1&region=FR"
        )
            .then((res) => res.json())
            .then((res) => dispatch(setMoviesUpcoming({ upcoming: res.results })));
    }, []);

    useEffect(() => {
        MovieGenre.map((genre) => {
            fetch(
                "https://api.themoviedb.org/3/discover/movie?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr-fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" +
                    genre.id
            )
                .then((res) => res.json())
                .then((res) =>
                    dispatch(
                        setMoviesPerGenres({ movies: { name: genre.name, id: genre.id, arr: shuffle(res.results) } })
                    )
                );
        });
    }, [MovieGenre]);
    useEffect(() => {
        SerieGenre.map((genre) => {
            fetch(
                "https://api.themoviedb.org/3/discover/tv?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr-fr&page=1&with_genres=" +
                    genre.id +
                    "&include_null_first_air_dates=false"
            )
                .then((res) => res.json())
                .then((res) =>
                    dispatch(
                        setSeriesPerGenres({ series: { name: genre.name, id: genre.id, arr: shuffle(res.results) } })
                    )
                );
        });
    }, [SerieGenre]);
};

export default Api;
