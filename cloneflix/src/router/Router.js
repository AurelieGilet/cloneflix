import { Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import CategoriesPage from "../views/CategoriesPage";

const Router = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/:type"} element={<CategoriesPage />} />
            <Route path={"/:type/:genre"} element={<CategoriesPage />} />
        </Routes>
    );
};

export default Router;
