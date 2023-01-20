import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FallbackCard from "./FallbackCard";
import { Suspense, lazy } from "react";

const Card = lazy(() => import("./Card"));

const Carousel = ({ list, title, type, customClasses }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
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
            {list.length && (
                <Slider {...settings} slidesToShow={list.length < 4 ? list.length : 4} className="w-11/12">
                    {list.map((element) => (
                        <Suspense key={element.id} fallback={<FallbackCard />}>
                            <Card element={element} type={type} key={element.id} customClasses={customClasses} />
                        </Suspense>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default Carousel;
