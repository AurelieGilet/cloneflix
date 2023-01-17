import { useSelector } from "react-redux";
import Carousel from "./Carousel";

const PageContent = ({ type }) => {
    const moviesPerGenres = useSelector((state) => state.API.moviesPerGenres);
    const seriesPerGenres = useSelector((state) => state.API.seriesPerGenres);

    let list = [];
    switch (type) {
        case "series":
            list = seriesPerGenres;
            break;
        case "films":
            list = moviesPerGenres;
            break;
        default:
            break;
    }

    return (
        <section>
            {list.map((genre) => (
                <Carousel key={genre.id} list={genre.arr} title={genre.name} />
            ))}
        </section>
    );
};

export default PageContent;
