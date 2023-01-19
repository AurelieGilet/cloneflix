import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalElement } from "../store/slices/ModalSlice";
import defaultImg from "../assets/default-image.jpg";
import { Suspense } from "react";

const Modal = ({ element }) => {
    const dispatch = useDispatch();
    const [video, setVideo] = useState([]);

    const type = useSelector((state) => state.Modal.type);
    const moviesGenres = useSelector((state) => state.API.moviesGenres);
    const seriesGenres = useSelector((state) => state.API.seriesGenres);

    const categorie = type === "films" ? "movie" : "tv";

    let image = element.backdrop_path
        ? `https://image.tmdb.org/t/p/w1280${element.backdrop_path} `
        : defaultImg;

    let elementGenresIds = element.genre_ids;
    let elementGenres = [];

    switch (type) {
        case "films":
            for (const genresId of elementGenresIds) {
                elementGenres.push(moviesGenres.filter((genre) => genre.id === genresId));
            }
            break;
        case "series":
            for (const genresId of elementGenresIds) {
                elementGenres.push(seriesGenres.filter((genre) => genre.id === genresId));
            }
            break;

        default:
            break;
    }

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/" +
                element.id +
                "/videos?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr-fr"
        )
            .then((res) => res.json())
            .then((res) => setVideo(res.results));
    }, []);

    const formatDate = (date) => {
        let dateArr = date.split("-");
        dateArr.push(dateArr.shift());
        dateArr.unshift(dateArr.splice(1, 1));
        return dateArr.join("-");
    };

    return (
        <>
            <div
                className="fixed top-0 left-0 w-screen h-screen right-0 z-30 bg-black bg-opacity-80"
                onClick={() =>
                    dispatch(setModalElement({ element: null, type: null, isOpen: false }))
                }
            ></div>

            <div className="bg-[#141414] w-3/5 -translate-y-2/4 translate-x-2/4 fixed top-2/4 right-2/4 z-50">
                {video[0] ? (
                    <Suspense fallback={<p className="text-white text-6xl">Chargement</p>}>
                        <picture className="flex justify-center items-center aspect-video">
                            <iframe
                                width="100%"
                                height="100%"
                                src={"https://www.youtube.com/embed/" + video[0].key}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </picture>
                    </Suspense>
                ) : (
                    <img className="rounded-md" src={image} alt={element.title || element.name} />
                )}

                <div className="text-white p-5 pb-0">
                    <div className="flex justify-between">
                        <h2 className="text-2xl">{element.title || element.name}</h2>
                        <span className="leading-none p-3 text-center font-bold bg-red-800 text-white rounded-full">
                            {element.vote_average + "/10"}
                        </span>
                    </div>
                    <p className="my-2">
                        Date de sortie :{" "}
                        {element.release_date
                            ? formatDate(element.release_date)
                            : formatDate(element.first_air_date)}
                    </p>
                    <p className="my-2">{element.overview}</p>
                    <div className="flex flex-wrap my-2">
                        <p className="mr-5">Genres : </p>
                        {elementGenres.map((genre) => (
                            <span className="mr-5" key={genre[0].id}>
                                {genre[0].name}
                            </span>
                        ))}
                    </div>
                </div>
                <div
                    className="inline-block float-right p-5 text-white font-large text-xl leading-none uppercase cursor-pointer rounded"
                    onClick={() =>
                        dispatch(setModalElement({ element: null, type: null, isOpen: false }))
                    }
                >
                    X
                </div>
            </div>
        </>
    );
};

export default Modal;
