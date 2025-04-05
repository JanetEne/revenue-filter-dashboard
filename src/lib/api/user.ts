import { AxiosResponse } from "axios";
import Axios from "./axios";
import { IUser } from "../interface/user";

export const getUserData = async () => {
  const response: AxiosResponse<IUser> = await Axios.get(
    '/user'
  );

  return response.data;
};