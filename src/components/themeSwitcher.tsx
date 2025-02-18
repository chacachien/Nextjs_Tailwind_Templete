import React, { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'dark';
  });
  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className='transition-color m-auto flex w-fit items-center justify-center rounded-lg px-4 py-[10px] text-lg font-semibold text-gray-50 duration-200 ease-in-out dark:bg-sky-500/50'
    >
      {theme == 'dark' ? '🌙 ' : '☀️ '}
    </button>
  );
};
