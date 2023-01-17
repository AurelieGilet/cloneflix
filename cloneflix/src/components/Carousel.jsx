import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FallbackCard from "./FallbackCard";
import Modal from "./Modal";
import { useState } from "react";

import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";

const Card = lazy(() => import("./Card"));

const Carousel = ({ list, title }) => {
    const [toggleModal, setToggleModal] = useState(false);
    const element = useSelector((state) => state.Modal.element);

    const handleClick = (element) => {
        setToggleModal(!toggleModal);
        // setElement(element);
        console.log(element);
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
    };
    return (
        <div>
            <h2 className="text-4xl font-bold text-white">{title}</h2>
            <Slider {...settings}>
                {list.map((element) => (
                    <Suspense key={element.id} fallback={<FallbackCard />}>
                        <Card element={element} key={element.id} />
                    </Suspense>
                ))}
            </Slider>
            {element && <Modal element={element} />}
        </div>
    );
};

export default Carousel;
