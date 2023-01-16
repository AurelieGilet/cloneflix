import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import ApiSlice from "./slices/Api";

export const store = configureStore({
    reducer: { API: ApiSlice },
    middleware: [thunk],
});
