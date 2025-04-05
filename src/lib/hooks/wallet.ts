import { useQuery } from "@tanstack/react-query";
import { getUserWallet } from "../api/wallet";

export const useGetUserWallet = () => {
  return useQuery({
    queryKey: ['user-wallet'],
    queryFn: getUserWallet,
  });
};