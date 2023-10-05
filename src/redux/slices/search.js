import { ApiUrl } from '@/config/baseApi';
import { AUTH_API_PATHS } from '@/constants/auth';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchValue: null,
        matchJobs: [],
        isLoading: false
    },
    reducers: {
        setIsLoading: (state, { payload = true }) => {
            state.isLoading = payload;
        },
        getMatchJobData: (state, action) => {
            state.matchJobs = action.payload;
            state.isLoading = false;
        },
    },
});
export const { setIsLoading, getMatchJobData } = searchSlice.actions;

export const getMatchJobs = (value) => async (dispatch) => {
    try {
        const {data}  = await axios.get(ApiUrl + AUTH_API_PATHS.JOBS + `/?q=${value}`)
        dispatch(getMatchJobData(data))
    } catch (error) {
        console.log(error)
    }
}

export default searchSlice.reducer;