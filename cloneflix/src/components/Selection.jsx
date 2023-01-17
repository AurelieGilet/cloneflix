import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const Selection = ({ movies }) => {
    // const [index, setIndex] = useState(0);
    console.log("render");
    const settings = {
        swipeToSlide: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        fade: true,
        focusOnSelect: false,
        arrows: false,
    };
    return (
        <Slider {...settings}>
            {movies.map((movie) => (
                <Card key={movie.id} element={movie} />
            ))}
        </Slider>
    );
};

export default Selection;
