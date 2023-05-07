import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IUser} from '../../entities/User';

const user: IUser = {} as IUser;

const userSlice = createSlice({
  name: 'user',
  initialState: user,
  reducers: {
    loguser: (state, action: PayloadAction<IUser>) => {
      console.log(state, action);
      const newUser = {
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
      };

      Object.assign(state, newUser);
    },
    unlinkLogin: state => {
      state = {} as IUser;
      return state;
    },
  },
});

export const {loguser, unlinkLogin} = userSlice.actions;

export default userSlice.reducer;
