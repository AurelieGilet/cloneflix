import { useSelector } from "react-redux";
import Carousel from "./Carousel";
import Selection from "./Selection";
import Modal from "./Modal";

const HomePageContent = () => {
    const moviesTopRated = useSelector((state) => state.API.moviesTopRated);
    const seriesTopRated = useSelector((state) => state.API.seriesTopRated);
    const moviesUpcoming = useSelector((state) => state.API.moviesUpcoming);
    const element = useSelector((state) => state.Modal.element);

    element
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "visible");

    return (
        <section>
            {element && <Modal element={element} />}
            {moviesUpcoming[0] && <Selection type={"films"} movies={moviesUpcoming} />}
            <Carousel
                list={moviesTopRated}
                type={"films"}
                title={"Films les mieux notés"}
                customClasses={"slider-card"}
            />
            <Carousel
                list={seriesTopRated}
                type={"series"}
                title={"Séries les mieux notées"}
                customClasses={"slider-card"}
            />
        </section>
    );
};

export default HomePageContent;
