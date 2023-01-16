import cloneFlixLogo from "../assets/cloneflix-logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
    const topRated = useSelector((state) => state.API.moviesGenres);
    console.log(topRated);

    return (
        <nav className="flex justify-between px-6 flex-row items-center">
            <ul className="grid grid-flow-col gap-8 md:ml-5 mr-auto auto-rows-auto ">
                <li>
                    <img className="w-24" src={cloneFlixLogo} alt="Logo Cloneflix" />
                </li>
                <li>Accueil</li>
                <li>Séries</li>
                <li>Films</li>
                <li>Ma liste</li>
            </ul>
        </nav>
    );
};

export default Navbar;
