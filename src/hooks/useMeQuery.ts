import { useQuery } from 'react-query';
import { APIClient } from '../lib/APIClient';

export const me = async () => {
  const { data } = await APIClient.get('/auth/me');

  return data;
};
export const useMeQuery = () => useQuery('me', me);
