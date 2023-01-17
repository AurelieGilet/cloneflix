import { useSelector } from "react-redux";
import Carousel from "./Carousel";
import Selection from "./Selection";
import Modal from "./Modal";

const HomePageContent = () => {
    const moviesTopRated = useSelector((state) => state.API.moviesTopRated);
    const seriesTopRated = useSelector((state) => state.API.seriesTopRated);
    const moviesUpcoming = useSelector((state) => state.API.moviesUpcoming);

    return (
        <section>
            {moviesUpcoming[0] && <Selection movies={moviesUpcoming} />}
            {/* {moviesUpcoming[0] && <Modal element={moviesUpcoming[0]} />} */}
            <Carousel list={moviesTopRated} title={"Films les mieux notés"} />
            <Carousel list={seriesTopRated} title={"Séries les mieux notées"} />
        </section>
    );
};

export default HomePageContent;
