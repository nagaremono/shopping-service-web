import { useMutation } from 'react-query';
import { APIClient } from '../lib/APIClient';

export const useLogoutMutation = () =>
  useMutation(() => APIClient.post('/auth/logout'));
