import {configureStore} from '@reduxjs/toolkit';
import userSlices from '../feature/userSlices';

const store = configureStore({
  reducer: {
    user: userSlices,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
