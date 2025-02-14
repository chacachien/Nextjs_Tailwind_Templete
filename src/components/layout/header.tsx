// components/layout/header.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShoppingCart,
    faBars,
    faXmark,
} from '@fortawesome/free-solid-svg-icons'
import {getToken, getUserInfor} from '@/lib/services/auth'
import {useAuth} from "@/hooks/use-auth";
import {useTheme} from "next-themes";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { user, logout, token } = useAuth()

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])
    useEffect(() => {
        const checkAuth = async () => {
            console.log('Checking auth...');
            const token = getToken()
            console.log('Token found:', token);

            if (token && !user) {
                try {
                    console.log('Fetching user info...');
                    const userData = await getUserInfor(token)
                    console.log('User data received:', userData);

                    if (userData) {
                        console.log('User data received:', userData);
                    } else {
                        console.log('No user data, logging out');
                        logout()
                    }
                } catch (error) {
                    console.error('Error in checkAuth:', error)
                    logout()
                }
            } else {
                console.log('No token found');
            }
        }

        checkAuth()
    }, [token, user, logout])


// Add this state to track theme


    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <header className="bg-white shadow-sm">
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                    <div className="flex h-16 items-center justify-between">
                        {/* Skeleton loading state */}
                    </div>
                </nav>
            </header>
        )
    }
    return (
        <header className="bg-white shadow-sm dark:bg-red-500" >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/public" className="dark:text-7xl text-2xl font-bold text-gray-900">
                            FV Store
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-700 hover:text-gray-900"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="flex justify-center items-center m-auto text-lg w-fit dark:bg-sky-500/50 bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out rounded-lg text-gray-50 font-semibold py-[10px] px-4"
                        >
                            {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                        </button>

                        <Link href="/cart" className="text-gray-700 hover:text-gray-900">
                            <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6"/>
                        </Link>

                        {user ? (
                            <Link
                                href="/profile"
                                className="text-sm font-medium text-gray-700 hover:text-gray-900"
                            >
                                {user.username}
                            </Link>) : (
                            <Link
                                href="/login"
                                className="text-sm font-medium text-gray-700 hover:text-gray-900"
                            >
                                Đăng nhập
                            </Link>
                        )}

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <FontAwesomeIcon
                                icon={isMobileMenuOpen ? faXmark : faBars}
                                className="h-6 w-6"
                            />
                        </button>
                    </div>
                </div>
                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium text-gray-700 hover:text-gray-900"
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
    )
}