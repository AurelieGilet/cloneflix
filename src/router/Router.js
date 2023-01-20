import { Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import CategoriesPage from "../views/CategoriesPage";
import FavorisPage from "../views/FavorisPage";
import SearchPage from "../views/SearchPage";

const Router = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/:type"} element={<CategoriesPage />} />
            <Route path={"/:type/:genre"} element={<CategoriesPage />} />
            <Route path={"/favoris"} element={<FavorisPage />} />
            <Route path={"/search"} element={<SearchPage />} />
        </Routes>
    );
};

export default Router;
