import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMoviesTopRated, setSeriesTopRated, setMoviesGenres, setSeriesGenres } from "./store/slices/Api";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr")
            .then((res) => res.json())
            .then((res) => dispatch(setMoviesTopRated({ rated: res.results })));

        fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr")
            .then((res) => res.json())
            .then((res) => dispatch(setSeriesTopRated({ rated: res.results })));

        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr")
            .then((res) => res.json())
            .then((res) => dispatch(setMoviesGenres({ genre: res.genres })));

        fetch(
            "https://api.themoviedb.org/3/search/movie?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr&query=Jack+Reacher"
        )
            .then((res) => res.json())
            .then((res) => dispatch(setSeriesGenres({ genre: res.genres })));
    }, []);

    return (
        <>
            <Navbar />
            <h1 className="text-xl">CloneFlix</h1>
        </>
    );
}

export default App;
