import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

import { ApiUrl } from '@/config/baseApi';
import { AUTH_API_PATHS } from '@/constants/auth';
import { type } from 'os';

export const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    jobSaved: [],
    userSkilles: null,
    skills: [],
    job: null,
    isLoading: false,
  },
  reducers: {
    setLoading: (state, { payload = true }) => {
      state.isLoading = payload;
    },
    getJobsData: (state, action) => {
      state.jobs = action.payload;
      state.isLoading = false;
    },
    getSavedData: (state, action) => {
      state.jobSaved = action.payload;
      state.isLoading = false;
    },
    getJobData: (state, action) => {
      state.job = action.payload;
      state.isLoading = false;
    },
    addJobs: (state, action) => {
      state.jobSaved = [...state.jobSaved, action.payload];
      state.isLoading = false;
    },
    removeJobs: (state, action) => {
      state.jobSaved = [...state.jobSaved.filter((item) => item.id !== action.payload)];
      state.isLoading = false;
    },
    getJobsSkills: (state, action) => {
      state.skills = action.payload;
      state.isLoading = false;
    },
    getJob: (state, action) => {
      state.job = action.payload;
      state.isLoading = false;
    },
  },
});
const { setLoading, getSavedData, addJobs, removeJobs, getJobsData, getJobData, getJobsSkills } = jobSlice.actions;

export const getJobs = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(ApiUrl + AUTH_API_PATHS.JOBS);
    dispatch(getJobsData(data));
  } catch (error) {
    console.log(error);
  }
};

export const getSavedJob = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await axios.get(ApiUrl + AUTH_API_PATHS.SAVEDJOBS);
    dispatch(getSavedData(data));
  } catch (error) {
    console.log(error);
  }
};

export const getJob = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await axios.get(ApiUrl + AUTH_API_PATHS.JOBS + '/' + id);
    dispatch(getJobData(data));
  } catch (error) {
    console.log(error);
  }
};

export const addJob = (body) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.post(ApiUrl + AUTH_API_PATHS.SAVEDJOBS, body);
    dispatch(addJobs(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteJob = (body) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.delete(ApiUrl + AUTH_API_PATHS.SAVEDJOBS + '/' + body);
    dispatch(removeJobs(body));
  } catch (error) {
    console.log(error);
  }
};

export default jobSlice.reducer;