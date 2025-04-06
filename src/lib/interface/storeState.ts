export interface IStoreState {
  filter: IFilterState;
}

export type TransactionDuration = "Today" | "Last 7 days" | "This month" | "Last 3 months" | "This year" | "Last year" | "All time" | "Custom";

export interface IFilterState {
  transactionType: string[];
  transactionStatus: string[];
  startDate: string | null;
  endDate: string | null;
  duration: TransactionDuration
}
