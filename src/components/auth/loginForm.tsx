// components/auth/loginForm.tsx
'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { getUserInfor, login } from '@/services/api/auth';
import { useAuth } from '@/hook/use-auth';
import { authEndpoint } from '@/services/api/endpoints/auth';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser, setToken } = useAuth();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  // Show success message if user just registered
  const justRegistered = searchParams.get('registered');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const credentials = {
      username: formData.get('username') as string,
      password: formData.get('password') as string,
    };

    try {
      const data = await login(credentials);

      if (!data) {
        throw new Error('Login failed');
      }

      // Update auth state
      const user = await getUserInfor();
      setUser(user);

      // Redirect to home page
      router.push('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center bg-gray-50'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Đăng nhập vào tài khoản
          </h2>
        </div>

        {justRegistered && (
          <div className='rounded-md bg-green-50 p-4'>
            <div className='text-sm text-green-700'>
              Đăng ký thành công! Vui lòng đăng nhập.
            </div>
          </div>
        )}

        {error && (
          <div className='rounded-md bg-red-50 p-4'>
            <div className='text-sm text-red-700'>{error}</div>
          </div>
        )}

        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='space-y-4 rounded-md shadow-sm'>
            <div>
              <label htmlFor='username' className='sr-only'>
                Username
              </label>
              <input
                id='username'
                name='username'
                type='username'
                required
                className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Username'
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Mật khẩu
              </label>
              <input
                id='password'
                name='password'
                type='password'
                required
                className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Mật khẩu'
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 block text-sm text-gray-900'
              >
                Ghi nhớ đăng nhập
              </label>
            </div>

            <div className='text-sm'>
              <Link
                href='/forgot-password'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Quên mật khẩu?
              </Link>
            </div>
          </div>

          <div>
            <button
              type='submit'
              disabled={loading}
              className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50'
            >
              {loading ? (
                <>
                  <i className='fa fa-user mr-2 animate-spin' />
                  Đang đăng nhập...
                </>
              ) : (
                'Đăng nhập'
              )}
            </button>
          </div>
        </form>
        <div className='text-center text-sm'>
          <Link
            href='/register'
            className='font-medium text-indigo-600 hover:text-indigo-500'
          >
            Chưa có tài khoản? Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
}
