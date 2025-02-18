'use client';

import { Suspense, useState } from 'react';
import { RegisterForm } from '@/components/auth/registerForm';

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
}
