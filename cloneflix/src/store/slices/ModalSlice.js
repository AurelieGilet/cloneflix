import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
    name: "Modal",
    initialState: {
        element: null,
    },
    reducers: {
        setModalElement: (state, action) => {
            state.element = action.payload;
        },
    },
});

export const { setModalElement } = ModalSlice.actions;

export default ModalSlice.reducer;
