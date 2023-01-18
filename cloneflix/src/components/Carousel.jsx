import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FallbackCard from "./FallbackCard";

import { Suspense, lazy } from "react";

const Card = lazy(() => import("./Card"));

const Carousel = ({ list, title, type }) => {
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
                        <Card element={element} type={type} key={element.id} />
                    </Suspense>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
