import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { emptySearchBar } from "../store/slices/ApiSlice";
import { useDispatch } from "react-redux";
import { SearchBarFetch } from "./SearchBarFetch";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [isFirstSearch, setIsFirstSearch] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    SearchBarFetch({ target: search, fetchType: "movie" });
    SearchBarFetch({ target: search, fetchType: "tv" });

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
        setSearch(e.target.value);

        dispatch(emptySearchBar());
    };

    return (
        <div className="searchbar">
            <input
                className="border border-gray-300 bg-[#141414] text-white focus:border-red-800 focus:outline-none block w-full p-2.5"
                id="searchBar"
                type="text"
                placeholder="Titres, personnes"
                value={search}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
