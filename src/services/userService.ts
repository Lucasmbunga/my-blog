import type { AxiosPromise } from "axios";
import api from "./api";

export interface UserProps {
  id: number;
  name: string;
  email: string;
  guest: boolean;
}

interface UsersPropsResponse {
  content: UserProps[];
  totalElements: number;
}

interface PostUserProps {
  name: string;
  email: string;
  password: string;
  role: string;
}

export const getUsers = async (): AxiosPromise<UsersPropsResponse> => {
  const data = await api.get('/users');
  return data.data;
}



export const postUser = async (newUser: PostUserProps): AxiosPromise<PostUserProps> => {
  const response = await api.post('/users', newUser);

  return response.data.content;
}


