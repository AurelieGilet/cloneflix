import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import ApiSlice from "./slices/ApiSlice";
import ModalSlice from "./slices/ModalSlice";

export const store = configureStore({
    reducer: { API: ApiSlice, Modal: ModalSlice },
    middleware: [thunk],
});
