import { IFilterState, TransactionDuration } from '@/lib/interface/storeState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IFilterState = {
  transactionType: [],
  transactionStatus: [],
  startDate: null,
  endDate: null,
  duration: 'All time'
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTransactionType: (state, action: PayloadAction<string[]>) => {
      state.transactionType = action.payload;
    },
    setTransactionStatus: (state, action: PayloadAction<string[]>) => {
      state.transactionStatus = action.payload;
    },
    setDateRange: (
      state,
      action: PayloadAction<{ startDate?: string | null; endDate?: string | null }>
    ) => {
      state.startDate = action.payload.startDate ?? state.startDate;
      state.endDate = action.payload.endDate ?? state.endDate;
    },
    setDuration: (state, action: PayloadAction<TransactionDuration>) => {
      state.duration = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setTransactionType, setTransactionStatus, setDateRange, resetFilters, setDuration } =
  filterSlice.actions;

export default filterSlice.reducer;
