// components/layout/header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { getToken, getUserInfor } from '@/lib/services/auth';
import { useAuth } from '@/hook/use-auth';
import { ThemeSwitcher } from '@/components/themeSwitcher';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/products' },
  { name: 'Categories', href: '/categories' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout, token } = useAuth();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const checkAuth = async () => {
      const token = getToken();

      if (token && !user) {
        try {
          console.log('Fetching user info...');
          const userData = await getUserInfor(token);

          if (userData) {
            console.log('User data received:', userData);
          } else {
            logout();
          }
        } catch (error) {
          logout();
        }
      } else {
      }
    };

    checkAuth();
  }, [token, user, logout]);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <header className='bg-white shadow-sm'>
        <nav
          className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
          aria-label='Top'
        >
          <div className='flex h-16 items-center justify-between'>
            {/* Skeleton loading state */}
          </div>
        </nav>
      </header>
    );
  }
  return (
    <header className='bg-bgBase shadow-sm dark:bg-red-500'>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' aria-label='Top'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link
              href='/public'
              className='text-2xl font-bold text-gray-900 dark:text-7xl'
            >
              FV Store
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex md:items-center md:space-x-8'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm font-medium text-gray-700 hover:text-gray-900'
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className='flex items-center space-x-4'>
            <ThemeSwitcher />
            <Link href='/cart' className='text-gray-700 hover:text-gray-900'>
              <i className='fa fa-shopping-cart' />
            </Link>

            {user ? (
              <Link
                href='/profile'
                className='text-sm font-medium text-gray-700 hover:text-gray-900'
              >
                {user.username}
              </Link>
            ) : (
              <Link
                href='/login'
                className='text-sm font-medium text-gray-700 hover:text-gray-900'
              >
                Đăng nhập
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              type='button'
              className='rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={isMobileMenuOpen ? 'fa fa-xmark' : 'fa fa-bars'} />
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='py-4 md:hidden'>
            <div className='flex flex-col space-y-4'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-base font-medium text-gray-700 hover:text-gray-900'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
