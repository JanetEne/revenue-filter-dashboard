import { AxiosResponse } from "axios";
import Axios from "./axios";
import { IWallet } from "../interface/wallet";

export const getUserWallet = async () => {
  const response: AxiosResponse<IWallet> = await Axios.get(
    '/wallet'
  );

  return response.data;
};