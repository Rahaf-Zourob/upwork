
"use client"
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

import { ApiUrl } from '@/config/baseApi';
import { AUTH_API_PATHS } from '@/constants/auth';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    object: null,
    isLoading: true,
    name: null,
  },
  reducers: {
    setLoading: (state, { payload = false }) => {
      state.isLoading = payload;
    },
    getProfileData: (state, action) => {
      state.object = action.payload;
    },
    getNameData: (state, action) => {
      state.name = action.payload;
    },
    setProfileData: (state, action) => {
      state.object = action.payload;
    }
  },
});
const { getProfileData, setProfileData, setLoading, getNameData } = profileSlice.actions;

export const getData = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(ApiUrl + AUTH_API_PATHS.PROFILE + '/' + id);
    dispatch(getProfileData(data));
  } catch (error) {
    console.log(error);
  }
  dispatch(setLoading());
};

export const getName = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(ApiUrl + AUTH_API_PATHS.SIGNUP + '/' + id);
    dispatch(getNameData(data));
  } catch (error) {
    console.log(error);
  }
  dispatch(setLoading());
};

export const addData = (body) => async (dispatch) => {
  try {
    const { data } = await axios.post(ApiUrl + AUTH_API_PATHS.PROFILE, body);
    dispatch(setProfileData(data));
  } catch (error) {
    console.log(error);
  }
  dispatch(setLoading());
};
export const editJobTitle = (id, oldData, body) => async (dispatch) => {
  const data = {
    ...oldData,
    jobTitle: body
  }
  try {
    await axios.patch(ApiUrl + AUTH_API_PATHS.PROFILE + "/" + id, { data: data });
  } catch (error) {
    console.log(error)
  }
  dispatch(setLoading())
};
export const editHourPrice = (id, oldData, body) => async (dispatch) => {
  const data = {
    ...oldData,
    price: body
  }
  try {
    await axios.patch(ApiUrl + AUTH_API_PATHS.PROFILE + "/" + id, { data: data });
  } catch (error) {
    console.log(error)
  }
  dispatch(setLoading());
};
export const editJobDescription = (id, oldData, body) => async (dispatch) => {
  const data = {
    ...oldData,
    jobDescription: body
  }
  try {
    await axios.patch(ApiUrl + AUTH_API_PATHS.PROFILE + "/" + id, { data: data });
  } catch (error) {
    console.log(error)
  }
  dispatch(setLoading());
};

export const editSkills = (body) => async (dispatch) => {
  // try {
  //   await axios.patch(ApiUrl + AUTH_API_PATHS.PROFILE + "/" + id, body)
  // } catch (error) {
  //   console.log(error)
  // }
  // dispatch(setLoading())
}
export default profileSlice.reducer;