import cloneFlixLogo from "../assets/cloneflix-logo.png";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <header className="sticky top-0 bg-black text-white py-4 z-10">
            <nav className="flex justify-between px-6 flex-row flex-wrap items-center">
                <ul className="grid grid-flow-col gap-8 md:ml-5 mr-8 auto-rows-auto ">
                    <li>
                        <NavLink to={"/"}>
                            <img className="w-24" src={cloneFlixLogo} alt="Logo Cloneflix" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/series"}>Séries</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/films"}>Films</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/favoris"}>Ma liste</NavLink>
                    </li>
                </ul>
                <SearchBar />
            </nav>
        </header>
    );
};

export default Navbar;
