"use client";

import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };
  
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md dark:hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      
      <div
        className="aspect-square overflow-hidden bg-gray-50 dark:bg-gray-700 cursor-pointer"
        onClick={() => onProductClick(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3
          className="text-lg text-center font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          onClick={() => onProductClick(product)}
        >
          {product.name}
        </h3>

        <span className="text-2xl text-center font-bold text-gray-900 dark:text-white mb-4">
          ₹{product.price.toFixed(2)}
        </span>

        <button
          onClick={handleAddToCart}
          className="
            inline-flex items-center justify-center gap-2 
            bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
            text-white px-4 py-2 rounded-lg font-medium 
            transition-colors duration-200 focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 
            active:scale-95 transform
            mt-auto
            sm:w-[80%] sm:self-center
          "
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;