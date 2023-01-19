import { useSelector } from "react-redux";
import DropDown from "./DropDown";

const Header = ({ type }) => {
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
        <header className="flex items-center mb-4 sticky top-[3.75rem] p-4 z-20 bg-[#141414]">
            <h1 className="text-white uppercase mr-6 text-5xl">{type}</h1>

            <DropDown list={list} type={type} />
        </header>
    );
};

export default Header;
