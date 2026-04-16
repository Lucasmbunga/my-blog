import type { AxiosPromise } from "axios";
import api from "./api";

export interface UserRegisterProps{
  name: string;
  email: string;
  password: string;
  role?: 'USER';
}

const registerUser =async (userRegisterData:UserRegisterProps):AxiosPromise<UserRegisterProps> => {
  const response =await api.post('/users', {...userRegisterData,role:'USER'});
  return response.data;
}
export default registerUser;
