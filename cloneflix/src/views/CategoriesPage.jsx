import { useParams } from "react-router-dom";
import Header from "../components/Header";
import PageContent from "../components/PageContent";

const CategoriesPage = () => {
    const params = useParams();

    return (
        <>
            <Header type={params.type} genre={params.genre}/>
            <PageContent type={params.type} genreParam={params.genre} />
        </>
    );
};

export default CategoriesPage;
