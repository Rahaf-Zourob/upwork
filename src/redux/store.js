"use client"
import { configureStore } from '@reduxjs/toolkit';

import profileSlice from './slices/profile';
import jobSlice from './slices/job';
import onlineSlice from './slices/online';
import searchSlice from './slices/search';

const store = configureStore({
  reducer: {
    profile: profileSlice,
    jobs: jobSlice,
    online: onlineSlice,
    search: searchSlice
  },
});

export default store;
