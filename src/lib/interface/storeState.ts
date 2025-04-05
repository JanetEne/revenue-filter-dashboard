export interface IStoreState {
  filter: IFilterState;
}

export interface IFilterState {
  dateRange: {
    startDate: string;
    endDate: string;
  };
  transactionType: string[];
  transactionStatus: string[];
}
