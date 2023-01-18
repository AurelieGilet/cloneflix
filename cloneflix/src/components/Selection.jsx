import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { useState } from "react";
import { useSelector } from "react-redux";

const Selection = ({ movies, type }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const isOpen = useSelector((state) => state.Modal.isOpen);

    const settings = {
        swipeToSlide: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 3000,
        fade: true,
        focusOnSelect: false,
        arrows: false,
    };

    return (
        <Slider
            {...settings}
            autoplay={!isOpen}
            beforeChange={(currentSlide, nextSlide) => {
                setCurrentIndex(nextSlide);
            }}
        >
            {movies.map((movie) => (
                <Card key={movie.id} type={type} element={movies[currentIndex]} />
            ))}
        </Slider>
    );
};

export default Selection;
