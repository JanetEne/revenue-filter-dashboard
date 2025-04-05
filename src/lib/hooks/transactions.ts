import { useQuery } from "@tanstack/react-query";
import { getUserTransactions } from "../api/transactions";

export const useGetUserTransactions = () => {
  return useQuery({
    queryKey: ['user-transactions'],
    queryFn: getUserTransactions,
  });
};