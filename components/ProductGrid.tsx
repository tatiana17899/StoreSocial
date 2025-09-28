
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

interface ProductGridProps {
    onProductClick: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
      ))}
    </div>
  );
};

export default ProductGrid;
