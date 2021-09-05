import type { NextPage } from 'next';
import { useMeQuery } from '../../hooks/useMeQuery';
import { ProductsController } from './ProductsController';

export const HomePage: NextPage = () => {
  const { data } = useMeQuery();

  return (
    <>
      <h1>{data?.username ? `hello ${data.username}` : 'hello world'}</h1>
      <ProductsController />
    </>
  );
};
