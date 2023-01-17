import { useParams } from "react-router-dom";
import Header from "../components/Header";
import PageContent from "../components/PageContent";

const CategoriesPage = () => {
    const params = useParams();

    return (
        <>
            <Header type={params.type} />
            <PageContent type={params.type} />
        </>
    );
};

export default CategoriesPage;
