import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../api/user";

export const useGetUserData = () => {
  return useQuery({
    queryKey: ['user-data'],
    queryFn: getUserData,
  });
};