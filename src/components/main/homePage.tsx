import React from 'react';
import Link from 'next/link';
const featuredCategories = [
  {
    name: 'Electronics',
    description: 'Latest gadgets and accessories',
    href: '/products/electronics',
  },
  {
    name: 'Fashion',
    description: 'Trendy clothing and accessories',
    href: '/products/fashion',
  },
  {
    name: 'Home & Living',
    description: 'Modern furniture and decor',
    href: '/products/home-living',
  },
];
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
export const HomePage = () => {
  return (
    <main>
      <section className='bg-bgMain relative'>
        <div className='relative flex h-[600px] items-center justify-center'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br opacity-50' />
          </div>
          <div className='relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
            <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
              Welcome to FV Store
            </h1>
            <p className='mx-auto mt-6 max-w-3xl text-xl text-white'>
              Discover our latest collection of premium products at unbeatable
              prices.
            </p>
            <div className='mt-10'>
              <Link
                href='/products'
                className='inline-block rounded-md bg-white px-8 py-3 font-medium text-gray-900 hover:bg-gray-100'
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className='bg-white py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h2 className='mb-12 text-center text-3xl font-extrabold text-gray-900'>
            Featured Categories
          </h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            {featuredCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className='group relative overflow-hidden rounded-lg'
              >
                <div className='relative h-80 w-full'>
                  <img
                    src={`/assets/image/default.png`}
                    alt={category.name}
                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                </div>
                <div className='absolute bottom-0 left-0 right-0 p-6'>
                  <h3 className='text-xl font-semibold text-white'>
                    {category.name}
                  </h3>
                  <p className='mt-2 text-sm text-white/80'>
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
