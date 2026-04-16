import type { AxiosPromise } from 'axios';
import api from '../../services/api';
import { useMutation } from '@tanstack/react-query';

interface LoginDataProps{
  email: string;
  password: string;
}

const postLogin = async (loginData:LoginDataProps):AxiosPromise<LoginDataProps> => {
  const response = await api.post('/auth/login', loginData);
  localStorage.setItem("token", response.data.token)

  return response.data;
}


const useLoginData = () => {
  const mutate = useMutation({
    mutationFn:postLogin
  })

  return mutate;
}

export default useLoginData
