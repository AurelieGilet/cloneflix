import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setModalElement } from "../store/slices/ModalSlice";

const Modal = ({ element }) => {
    const dispatch = useDispatch();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/" +
                element.id +
                "/videos?api_key=d447506c6ccd7a520d5dc70bf8bf7614&language=fr-fr"
        )
            .then((res) => res.json())
            .then((res) => setVideo(res.results));
    }, []);

    return (
        <div className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen right-0 bg-black bg-opacity-80 z-50">
            <div className="h-3/4 bg-[#141414] w-3/4">
                {video && (
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
                )}
                <div className="text-white">
                    <h2>titre</h2>
                    <p>note</p>
                    <p>date de sortie</p>
                    <p>synopsis</p>
                    <p>genres</p>
                </div>
                <div className="text-white cursor-pointer" onClick={() => dispatch(setModalElement(null))}>
                    X
                </div>
            </div>
        </div>
    );
};

export default Modal;
