import Navbar from "./components/Navbar";
import Api from "./components/Api";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

function App() {
    return (
        <BrowserRouter>
            <Api />
            <Navbar />
            <Router />
        </BrowserRouter>
    );
}

export default App;
