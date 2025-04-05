import { AxiosResponse } from "axios";
import { ITransactions } from "../interface/transactions";
import Axios from "./axios";

export const getUserTransactions = async () => {
  const response: AxiosResponse<ITransactions[]> = await Axios.get(
    '/transactions'
  );

  return response.data;
};