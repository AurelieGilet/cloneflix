import { useSelector } from "react-redux";
import Carousel from "./Carousel";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import List from "./List";

const PageContent = ({ type, genreParam }) => {
    const moviesPerGenres = useSelector((state) => state.API.moviesPerGenres);
    const seriesPerGenres = useSelector((state) => state.API.seriesPerGenres);
    const [perGenreList, setPerGenreList] = useState([]);
    const moviesGenres = useSelector((state) => state.API.moviesGenres);
    const seriesGenres = useSelector((state) => state.API.seriesGenres);
    let genre;

    const element = useSelector((state) => state.Modal.element);

    element ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "visible");

    let genresList = [];
    let requestType;

    useEffect(() => {
        setPerGenreList([]);
        if (genre[0]) {
            for (let i = 1; i < 3; i++) {
                fetch(
                    "https://api.themoviedb.org/3/discover/" +
                        requestType +
                        "?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr-fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=" +
                        i +
                        "&with_genres=" +
                        genre[0].id
                )
                    .then((res) => res.json())
                    .then((res) => createList(res.results));
            }
        }
    }, [genreParam]);

    switch (type) {
        case "series":
            genresList = seriesPerGenres;
            requestType = "tv";
            genre = seriesGenres.filter((genre) => genre.name === genreParam);
            break;
        case "films":
            genresList = moviesPerGenres;
            requestType = "movie";
            genre = moviesGenres.filter((genre) => genre.name === genreParam);
            break;
        default:
            break;
    }

    const createList = (items) => {
        setPerGenreList((current) => [...current, ...items]);
    };

    return (
        <section>
            {element && <Modal element={element} />}
            {genre[0]
                ? perGenreList[0] && <List list={perGenreList} type={type} />
                : genresList.map((genre) => (
                      <Carousel key={genre.id} list={genre.arr} type={type} title={genre.name} />
                  ))}
        </section>
    );
};

export default PageContent;
