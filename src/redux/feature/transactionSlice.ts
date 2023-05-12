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
    reloadTransactionsInMemory: (
      state,
      action: PayloadAction<ITransactionAmount>,
    ) => {
      state.transactions = action.payload.transactions;
      state.amount = action.payload.amount;
    },
    createNewTransactionInMemory: (
      state,
      action: PayloadAction<Transaction>,
    ) => {
      const transactionLoaded = action.payload;
      state.transactions.push(transactionLoaded);
      state.amount = getAmount(state.transactions);
    },
    deleteTransactionInMemory: (state, action: PayloadAction<Transaction>) => {
      const transactionLoaded = action.payload;
      state.transactions = state.transactions.filter(
        transactionItem => transactionItem._id !== transactionLoaded._id,
      );
      state.amount = getAmount(state.transactions);
    },
    updateTransactionInMemory: (state, action: PayloadAction<Transaction>) => {
      const transactionLoaded = action.payload;
      const transactionInMemory = state.transactions.find(
        transactionItem => transactionItem._id === transactionLoaded._id,
      );
      if (transactionInMemory !== undefined) {
        transactionInMemory.description = transactionLoaded.description;
      }
      state.amount = getAmount(state.transactions);
    },
  },
});

export const {
  reloadTransactionsInMemory,
  createNewTransactionInMemory,
  deleteTransactionInMemory,
  updateTransactionInMemory,
} = transactionSlice.actions;

export default transactionSlice.reducer;
