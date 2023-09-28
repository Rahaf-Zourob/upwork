import { configureStore } from '@reduxjs/toolkit';

import profileSlice from './slices/profile';
import jobSlice from './slices/job';
import onlineSlice from './slices/online';

const store = configureStore({
  reducer: {
    profile: profileSlice,
    jobs: jobSlice,
    online: onlineSlice
  },
});

export default store;
