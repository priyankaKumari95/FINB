import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Transaction {
  id: string;
  amount: number;
  type: 'Income' | 'Expense' | 'Transfer';
  transactionType: 'Credit' | 'Debit';
  category: string;
  date: string;
  description: string;
}

interface TransactionState {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
}

// Update dummy transactions
const dummyTransactions: Transaction[] = [
  // Original transactions
  {
    id: '1',
    date: '2024-01-20',
    category: 'Salary',
    description: 'Monthly Salary',
    amount: 5000,
    type: 'Income',
    transactionType: 'Credit'
  },
  {
    id: '2',
    date: '2024-01-19',
    category: 'Food',
    description: 'Grocery Shopping',
    amount: 150,
    type: 'Expense',
    transactionType: 'Debit'
  },
  {
    id: '3',
    date: '2024-01-18',
    category: 'Transfer',
    description: 'To Savings Account',
    amount: 1000,
    type: 'Transfer',
    transactionType: 'Debit'
  },
  {
    id: '4',
    date: '2024-01-17',
    category: 'Shopping',
    description: 'New Laptop',
    amount: 1200,
    type: 'Expense',
    transactionType: 'Debit'
  },
  {
    id: '5',
    date: '2024-01-16',
    category: 'Freelance',
    description: 'Web Development Project',
    amount: 800,
    type: 'Income',
    transactionType: 'Credit'
  },
  {
    id: '6',
    date: '2024-01-15',
    category: 'Bills',
    description: 'Electricity Bill',
    amount: 100,
    type: 'Expense',
    transactionType: 'Debit'
  },
  {
    id: '7',
    date: '2024-01-14',
    category: 'Transport',
    description: 'Fuel',
    amount: 60,
    type: 'Expense',
    transactionType: 'Debit'
  },
  {
    id: '8',
    date: '2024-01-13',
    category: 'Entertainment',
    description: 'Movie Night',
    amount: 30,
    type: 'Expense',
    transactionType: 'Debit'
  },
  {
    id: '9',
    date: '2024-01-12',
    category: 'Shopping',
    description: 'Online Purchase',
    amount: 75,
    type: 'Expense',
    transactionType: 'Debit'
  },
  {
    id: '10',
    date: '2024-01-11',
    category: 'Transfer',
    description: 'To Investment Account',
    amount: 500,
    type: 'Transfer',
    transactionType: 'Debit'
  },
  {
    id: '11',
    date: '2024-01-10',
    category: 'Food',
    description: 'Restaurant',
    amount: 45,
    type: 'Expense',
    transactionType: 'Debit'
  },
  {
    id: '12',
    date: '2024-01-09',
    category: 'Freelance',
    description: 'Logo Design',
    amount: 300,
    type: 'Income',
    transactionType: 'Credit'
  },
  {
    id: '13',
    date: '2024-01-08',
    category: 'Transport',
    description: 'Train Ticket',
    amount: 25,
    type: 'Expense',
    transactionType: 'Debit'
  },
  {
    id: '14',
    date: '2024-01-07',
    category: 'Bills',
    description: 'Internet Bill',
    amount: 60,
    type: 'Expense',
    transactionType: 'Debit'
  },
  {
    id: '15',
    date: '2024-01-06',
    category: 'Shopping',
    description: 'Electronics',
    amount: 200,
    type: 'Expense',
    transactionType: 'Debit'
  },
  {
    id: '16',
    date: '2024-01-05',
    category: 'Income',
    description: 'Dividend Payment',
    amount: 150,
    type: 'Income',
    transactionType: 'Credit'
  },
  {
    id: '17',
    date: '2024-01-04',
    category: 'Entertainment',
    description: 'Concert Tickets',
    amount: 120,
    type: 'Expense',
    transactionType: 'Debit'
  },
  {
    id: '18',
    date: '2024-01-03',
    category: 'Transfer',
    description: 'To Emergency Fund',
    amount: 300,
    type: 'Transfer',
    transactionType: 'Debit'
  },
  {
    id: '19',
    date: '2024-01-02',
    category: 'Food',
    description: 'Supermarket',
    amount: 85,
    type: 'Expense',
    transactionType: 'Debit'
  },
  {
    id: '20',
    date: '2024-01-01',
    category: 'Bonus',
    description: 'Year-end Bonus',
    amount: 1000,
    type: 'Income',
    transactionType: 'Credit'
  }
];

const initialState: TransactionState = {
  transactions: dummyTransactions,
  loading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<Transaction[]>) => {
      state.transactions = action.payload;
      state.error = null;
    },
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.unshift(action.payload);
    },
    removeTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setTransactions,
  addTransaction,
  removeTransaction,
  setError,
  setLoading,
} = transactionSlice.actions;
export default transactionSlice.reducer;