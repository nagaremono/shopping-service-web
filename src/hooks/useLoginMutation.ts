import { APIClient } from '../lib/APIClient';
import { useMutation } from 'react-query';

export interface LoginParams {
  email: string;
  password: string;
}

const useLoginMutation = () =>
  useMutation(({ email, password }: LoginParams) =>
    APIClient.post('/auth/login', {
      email,
      password,
    })
  );

export default useLoginMutation;
