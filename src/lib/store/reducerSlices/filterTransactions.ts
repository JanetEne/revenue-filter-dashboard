import { IFilterState } from '@/lib/interface/storeState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IFilterState = {
  dateRange: {
    startDate: '',
    endDate: '',
  },
  transactionType: [],
  transactionStatus: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setDateRange: (
      state,
      action: PayloadAction<{ startDate: string; endDate: string }>
    ) => {
      state.dateRange = action.payload;
    },
    setTransactionType: (state, action: PayloadAction<string[]>) => {
      state.transactionType = action.payload;
    },
    setTransactionStatus: (state, action: PayloadAction<string[]>) => {
      state.transactionStatus = action.payload;
    },
    resetFilters: () => initialState, // Reset to initial state
  },
});

export const {
  setDateRange,
  setTransactionType,
  setTransactionStatus,
  resetFilters,
} = filterSlice.actions;
export default filterSlice.reducer;