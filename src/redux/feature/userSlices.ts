import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {User} from '../../models/User';

const user: User = {} as User;

const userSlice = createSlice({
  name: 'user',
  initialState: user,
  reducers: {
    loguser: (state, action: PayloadAction<User>) => {
      const newUser = {
        _id: action.payload._id,
        email: action.payload.email,
        name: action.payload.name,
      };

      Object.assign(state, newUser);
    },
    unlinkLogin: state => {
      state = {} as User;
      return state;
    },
  },
});

export const {loguser, unlinkLogin} = userSlice.actions;

export default userSlice.reducer;
