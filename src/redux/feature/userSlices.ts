import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {User} from '../../entities/User';

const user: User = {} as User;

const userSlice = createSlice({
  name: 'user',
  initialState: user,
  reducers: {
    loguser: (state, action: PayloadAction<User>) => {
      console.log(state, action);
      const newUser = {
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
      };

      state = newUser;
    },
  },
});

export const {loguser} = userSlice.actions;

export default userSlice.reducer;
