import { useSelector } from "react-redux";
import DropDown from "./DropDown";

const Header = ({ type, genre }) => {
    const seriesGenres = useSelector((state) => state.API.seriesGenres);
    const moviesGenres = useSelector((state) => state.API.moviesGenres);

    let list = [];
    switch (type) {
        case "series":
            list = seriesGenres;
            break;
        case "films":
            list = moviesGenres;
            break;
        default:
            break;
    }
    return (
        <header className="cat-header flex items-center flex-wrap mb-4 sticky top-[4.875rem] p-4 z-20 bg-[#141414]">
            <h1 className="text-white uppercase mr-6 text-5xl">{type}</h1>
            <DropDown list={list} type={type} />
            {genre && <h2 className="text-white uppercase mt-2 text-2xl">{genre}</h2>}
        </header>
    );
};

export default Header;
