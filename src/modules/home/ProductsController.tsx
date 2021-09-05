import { Text } from '@chakra-ui/react';
import React from 'react';
import { useProductsQuery } from '../../hooks/useProductsQuery';
import { ProductGrid } from './ProductGrid';

export const ProductsController: React.FC = () => {
  const { data } = useProductsQuery();

  return (
    <>
      {data ? (
        <ProductGrid products={data} />
      ) : (
        <Text>No products to display</Text>
      )}
    </>
  );
};
