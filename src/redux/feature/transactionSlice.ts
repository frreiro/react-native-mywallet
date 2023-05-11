import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ITransactionAmount, Transaction} from '../../models/Transactions';
import {getAmount} from '../../utils/checkTypeAndModifyAmount';

const transaction: ITransactionAmount = {
  transactions: [],
  amount: 0,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: transaction,
  reducers: {
    reloadTransactions: (state, action: PayloadAction<ITransactionAmount>) => {
      state.transactions = action.payload.transactions;
      state.amount = action.payload.amount;
    },
    newTransaction: (state, action: PayloadAction<Transaction>) => {
      const transactionLoaded = action.payload;
      state.transactions.push(transactionLoaded);
      state.amount = getAmount(transactionLoaded, state.amount);
    },
  },
});

export const {reloadTransactions, newTransaction} = transactionSlice.actions;

export default transactionSlice.reducer;
