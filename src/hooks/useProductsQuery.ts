import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { APIClient } from '../lib/APIClient';
import { Product } from '../types/Product';

export const products = async () => {
  const { data } = await APIClient.get('/product');
  return data.data;
};

export const useProductsQuery = () =>
  useQuery<Product[], AxiosError>('products', products);
