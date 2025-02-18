'use client'
import React from 'react';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/product/productCard';
export default function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Wireless Earbuds',
      category: 'Electronics',
      price: 99.99,
    },
    {
      id: 2,
      name: 'Cotton T-Shirt',
      category: 'Fashion',
      price: 29.99,
    },
    {
      id: 3,
      name: 'Table Lamp',
      category: 'Home & Living',
      price: 49.99,
    },
    {
      id: 4,
      name: 'Smart Watch',
      category: 'Electronics',
      price: 199.99,
    },
  ];


  return (
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Check out our most popular items
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
  );
}
