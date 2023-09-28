import { createSlice } from '@reduxjs/toolkit';

export const onlineSlice = createSlice({
    name: 'online',
    initialState: {
        status: true
    },
    reducers: {
        setOnline: (state) => {
            state.status = true;
        },
        setInvisable: (state) => {
            state.status = false;
        }
    },
});
export const { setOnline, setInvisable } = onlineSlice.actions;

export default onlineSlice.reducer;