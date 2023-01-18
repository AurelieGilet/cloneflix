import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalElement } from "../store/slices/ModalSlice";
import defaultImg from "../assets/default-image.jpg";
import { Suspense } from "react";

const Modal = ({ element }) => {
    const dispatch = useDispatch();
    const [video, setVideo] = useState([]);
    let image = element.backdrop_path ? `https://image.tmdb.org/t/p/w1280${element.backdrop_path} ` : defaultImg;
    const type = useSelector((state) => state.Modal.type);

    const categorie = type === "films" ? "movie" : "tv";

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/" +
                categorie +
                "/" +
                element.id +
                "/videos?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr-fr"
        )
            .then((res) => res.json())
            .then((res) => setVideo(res.results));
    }, []);

    return (
        <>
            <div
                className="fixed top-0 left-0 w-screen h-screen right-0 z-30 bg-black bg-opacity-80"
                onClick={() => dispatch(setModalElement({ element: null, type: null, isOpen: false }))}
            ></div>

            <div className="h-3/4 bg-[#141414] w-3/4 -translate-y-2/4 translate-x-2/4 fixed top-2/4 right-2/4 z-50">
                {video[0] ? (
                    <Suspense fallback={<p className="text-white text-6xl">Chargement</p>}>
                        <picture>
                            <iframe
                                width="560"
                                height="315"
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

                <div className="text-white">
                    <h2>titre</h2>
                    <p>note</p>
                    <p>date de sortie</p>
                    <p>synopsis</p>
                    <p>genres</p>
                </div>
                <div
                    className="text-white cursor-pointer"
                    onClick={() => dispatch(setModalElement({ element: null, type: null, isOpen: false }))}
                >
                    X
                </div>
            </div>
        </>
    );
};

export default Modal;
