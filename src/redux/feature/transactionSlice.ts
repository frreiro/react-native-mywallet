import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ITransaction} from '../../entities/Transactions';

const transaction: ITransaction[] = [] as ITransaction[];

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: transaction,
  reducers: {
    reloadTransactions: (state, action: PayloadAction<ITransaction[]>) => {
      console.log(state, action);
      const transactionsLoaded = action.payload;
      state = transactionsLoaded;
    },
    newTransaction: (state, action: PayloadAction<ITransaction>) => {
      console.log(state, action);
      const transactionLoaded = action.payload;
      state.push(transactionLoaded);
    },
  },
});

export const {reloadTransactions, newTransaction} = transactionSlice.actions;

export default transactionSlice.reducer;
