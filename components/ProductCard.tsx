import React from 'react';
import { Product } from '../types';
import { ICONS } from '../constants';

interface ProductCardProps {
  product: Product;
  onProductClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  return (
    // Main card container with padding, thick black border, and larger rounding.
    // Using flex-col to structure content vertically.
    <div className="bg-white border-2 border-brand-dark rounded-3xl p-3 flex flex-col group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image placeholder with its own rounding, inset from the card's border */}
      <div className={`w-full h-48 rounded-2xl ${product.imagePlaceholderColor}`}>
        {/* In a real app, an <img /> tag would be here */}
      </div>

      {/* Title, centered, with vertical spacing. flex-grow pushes the footer down. */}
      <h3 className="font-medium text-brand-text text-center my-4 flex-grow">{product.title}</h3>
      
      {/* Footer section for pricing and actions */}
      <div className="flex items-center justify-between mt-auto">
        {/* Dollar icon, styled to match the mockup */}
        <ICONS.DollarIcon className="w-10 h-10 text-brand-dark" />
        
        {/* Price buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onProductClick}
            className="px-5 py-2.5 bg-brand-dark text-white rounded-lg text-sm font-medium transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark"
            aria-label={`Show purchase options for ${product.title}`}
          >
            s/{product.originalPrice}
          </button>
          <button
            onClick={onProductClick}
            className="px-5 py-2.5 bg-brand-dark text-white rounded-lg text-sm font-medium transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark"
            aria-label={`Show purchase options for ${product.title}`}
          >
            ${product.salePrice}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;