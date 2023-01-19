import { useSelector } from "react-redux";
import Carousel from "./Carousel";

const PageContent = ({ type }) => {
    const moviesPerGenres = useSelector((state) => state.API.moviesPerGenres);
    const seriesPerGenres = useSelector((state) => state.API.seriesPerGenres);
    const [perGenreList, setPerGenreList] = useState([]);
    const moviesGenres = useSelector((state) => state.API.moviesGenres);
    const seriesGenres = useSelector((state) => state.API.seriesGenres);
    let genre;

    const element = useSelector((state) => state.Modal.element);

    element
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "visible");

    let genresList = [];
    let requestType;

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
            {element && <Modal element={element} />}
            {genre[0]
                ? perGenreList[0] && (
                    <List list={perGenreList} type={type} customClasses={"genre-card"} />
                )
                : genresList.map((genre) => (
                    <Carousel
                        key={genre.id}
                        list={genre.arr}
                        type={type}
                        title={genre.name}
                        customClasses={"slider-card"}
                    />
                ))}
        </section>
    );
};

export default PageContent;
