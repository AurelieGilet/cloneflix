import defaultImg from "../assets/default-image.jpg";
import { useDispatch } from "react-redux";
import { setModalElement } from "../store/slices/ModalSlice";

const Card = ({ element, type }) => {
    const dispatch = useDispatch();
    let image = element.backdrop_path ? `https://image.tmdb.org/t/p/w1280${element.backdrop_path} ` : defaultImg;

    return (
        <>
            <div
                onClick={() => dispatch(setModalElement({ element: element, type: type, isOpen: true }))}
                className="flex relative justify-center items-end mx-1 max-w-lg"
            >
                <h2 className="absolute text-white font-bold text-xl ">{element.title || element.name}</h2>
                <img className="rounded-md" src={image} alt={element.title || element.name} />
            </div>
        </>
    );
};

export default Card;
