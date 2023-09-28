import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

import { ApiUrl } from '@/config/baseApi';
import { AUTH_API_PATHS } from '@/constants/auth';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    object: null,
    isLoading: false,
    jobTitle: [],
    name: null,
    skills: null
  },
  reducers: {
    setLoading: (state, { payload = true }) => {
      state.isLoading = payload;
    },
    getProfileData: (state, action) => {
      state.object = action.payload;
      state.isLoading = false;
    },
    getNameData: (state, action) => {
      state.name = action.payload;
      state.isLoading = false;
    },
    setJobTitleData: (state, action) => {
      state.jobTitle = state.jobTitle.map((job) =>
      job.id === action.payload.id ? action.payload : job
    );
      state.isLoading = false;
    },
    setProfileData: (state, action) => {
      state.object = action.payload;
      state.isLoading = false;
    },
    setSkillsData: (state, action) => {
      state.skills = [...state.skills,action.payload],
      state.isLoading = false;
    },
  },
});
const { getProfileData, setProfileData, setSkillsData, setLoading,setJobTitleData,getNameData } = profileSlice.actions;

const id = (typeof window !== 'undefined') ? localStorage.getItem('id') :'';

export const getData = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(ApiUrl + AUTH_API_PATHS.PROFILE + '/' + id);
    dispatch(getProfileData(data));
  } catch (error) {
    console.log(error);
  }
};
export const getName = () => async (dispatch) => {
    dispatch(setLoading());
  try {
    dispatch(setLoading());
    const { data } = await axios.get(ApiUrl + AUTH_API_PATHS.SIGNUP+'/'+ id);
    dispatch(getNameData(data));
  } catch (error) {
    console.log(error);
  }
};

export const addData = (body) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const {data} = await axios.post(ApiUrl + AUTH_API_PATHS.PROFILE, body);
    dispatch(setProfileData(data));
  } catch (error) {
    console.log(error);
  }
};
export const editJobTitle = (data) => async (dispatch) => {
  console.log(data)
  try {
    dispatch(setLoading());
    await axios.put(ApiUrl + AUTH_API_PATHS.PROFILE+"/"+id, data);
    dispatch(setJobTitleData(data));
  } catch (error) {
    console.log(error)
  }
};

export const editHourPrice = (body) => async (dispatch) => {
  dispatch(setLoading())
  try {

  } catch (error) {
    console.log(error)
  }
}
export const editSkills = (body) => async (dispatch) => {
  dispatch(setLoading())
  try {
    const data = await axios.patch(ApiUrl + AUTH_API_PATHS.PROFILE+"/"+id,body)
    console.log(data)
    dispatch(setSkillsData())
  } catch (error) {
    console.log(error)
  }
}
export default profileSlice.reducer;