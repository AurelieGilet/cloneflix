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

    const handleClick =, customClasses (element) => {
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
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="flex flex-col items-center my-5">
            <h2 className="self-start text-4xl font-bold text-white m-4">{title}</h2>
            <Slider {...settings} className="w-11/12">
                {list.map((element) => (
                    <Suspense key={element.id} fallback={<FallbackCard />}>
                        <Card
                            element={element}
                            type={type}
                            key={element.id}
                            customClasses={customClasses}
                        />
                    </Suspense>
                ))}
            </Slider>
            {element && <Modal element={element} />}
        </div>
    );
};

export default Carousel;
