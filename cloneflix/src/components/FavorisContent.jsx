import Carousel from "./Carousel";
import { useSelector } from "react-redux";
import Modal from "./Modal";

const FavorisContent = () => {
    if (!localStorage.getItem("movie")) {
        localStorage.setItem("movie", JSON.stringify([]));
    }
    if (!localStorage.getItem("tv")) {
        localStorage.setItem("tv", JSON.stringify([]));
    }

    const films = JSON.parse(localStorage.getItem("movie"));
    const series = JSON.parse(localStorage.getItem("tv"));
    const element = useSelector((state) => state.Modal.element);

    element ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "visible");

    return (
        <>
            {element && <Modal element={element} />}
            {films[0] && <Carousel list={films} type={"movie"} title={"Mes films favoris"} />}
            {series[0] && <Carousel list={series} type={"tv"} title={"Mes séries favorites"} />}
            {!films[0] && !series[0] && <p className="text-white">Votre liste est vide</p>}
        </>
    );
};

export default FavorisContent;
