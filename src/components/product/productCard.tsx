import React from 'react';
import { Product } from '@/types/product';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}
export const ProductCard = ({ product }: ProductCardProps) => {
  function onAddToCart(product: Product) {
    
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 w-full bg-gray-200">
        <Image
          src={`/assets/image/default.png`}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 hover:opacity-75"
        />
      </div>
      <div className="p-4">
        <span className="text-sm text-indigo-600 font-medium">
          {product.category}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>
        <p className="mt-2 text-gray-700">
          ${product.price.toFixed(2)}
        </p>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors duration-300"
        >
          <i className="fa fa-plus" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
