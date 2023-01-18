import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
    name: "Modal",
    initialState: {
        element: null,
        type: null,
        isOpen: false,
    },
    reducers: {
        setModalElement: (state, action) => {
            state.element = action.payload.element;
            state.type = action.payload.type;
            state.isOpen = action.payload.isOpen;
        },
    },
});

export const { setModalElement } = ModalSlice.actions;

export default ModalSlice.reducer;
