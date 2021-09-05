import { Container, VStack } from '@chakra-ui/react';
import React from 'react';
import { Product } from '../../types/Product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <VStack spacing={6} w="100%">
      {products.map((p) => (
        <ProductCard product={p} key={p.id} />
      ))}
    </VStack>
  );
};
