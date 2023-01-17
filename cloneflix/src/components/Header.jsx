import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

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
        <header>
            <h1 className="text-white uppercase">{type}</h1>
            <div>
                <button className="text-white">Genres</button>
                <div>
                    <ul>
                        {list.map((element) => (
                            <li className="text-white" key={element.id}>
                                <NavLink to={"/" + type + "/" + element.name}>{element.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
