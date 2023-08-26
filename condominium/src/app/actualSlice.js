import { createSlice } from "@reduxjs/toolkit";

export const actualSlice = createSlice({
    name: 'actual',
    initialState: {value: '', allowed: false },
    reducers: {
        setActual: (state, action) => {
            state.value = action.payload;
        },
        allowAccess: (state, action) => {
            state.allowed = true;
        }

    }
})

export const { setActual, allowAccess } = actualSlice.actions;
export default actualSlice.reducer;