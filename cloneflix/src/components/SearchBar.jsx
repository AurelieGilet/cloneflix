import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setSearchBar, emptySearchBar } from "../store/slices/ApiSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [isFirstSearch, setIsFirstSearch] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if (e.target.value === "") {
            setSearch(e.target.value.trim());
            setIsFirstSearch(true);
            navigate(-1);
            return;
        }

        if (isFirstSearch) {
            navigate("/search");
            setIsFirstSearch(false);
        }

        dispatch(emptySearchBar());

        setSearch(e.target.value);
        fetch(
            "https://api.themoviedb.org/3/search/movie?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr-fr&query=" +
                e.target.value +
                "&page=1&include_adult=false"
        )
            .then((res) => res.json())
            .then((res) => {
                dispatch(setSearchBar({ results: res.results, type: "movie" }));
            });
        fetch(
            "https://api.themoviedb.org/3/search/tv?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr-fr&query=" +
                e.target.value +
                "&page=1&include_adult=false"
        )
            .then((res) => res.json())
            .then((res) => {
                dispatch(setSearchBar({ results: res.results, type: "tv" }));
            });
    };

    return (
        <>
            <label htmlFor="searchBar"></label>
            <input
                className="text-black"
                id="searchBar"
                type="text"
                placeholder="Titres, personnes"
                value={search}
                onChange={handleChange}
            />
        </>
    );
};

export default SearchBar;
