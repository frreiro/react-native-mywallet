import {configureStore} from '@reduxjs/toolkit';
import userSlices from '../feature/userSlices';

export default configureStore({
  reducer: {
    user: userSlices,
  },
});
