import defaultImg from "../assets/default-image.jpg";

const FallbackCard = () => {
    return (
        <div className="flex relative justify-center items-end mx-1 ">
            <h2 className="absolute text-white font-bold text-xl ">Chargement</h2>

            <img className="rounded-md" src={defaultImg} alt="Chargement" />
        </div>
    );
};

export default FallbackCard;
