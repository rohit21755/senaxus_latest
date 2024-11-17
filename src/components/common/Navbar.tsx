"use client";
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Process to Become Pilot', path: '/dgcaclass' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const nav = document.getElementById('mobile-menu');
            if (nav && !nav.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleNavigation = (path: string) => {
        setIsOpen(false);
        router.push(path);
    };

    return (
        <nav className="relative z-50">
            <div className="fixed w-full top-0 bg-[#030522] shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 px-4 sm:px-6 lg:px-8">
                        {/* Logo Section */}
                        <div className="flex-shrink-0 flex items-center">
                            <p className="text-white text-2xl font-bold">Senaxus</p>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.path}
                                    onClick={() => handleNavigation(item.path)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                                        ${pathname === item.path
                                            ? 'text-white bg-violet-600'
                                            : 'text-gray-400 hover:text-violet-400'
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-violet-400 focus:outline-none"
                                aria-expanded={isOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                <div
                    id="mobile-menu"
                    className={`md:hidden transition-all duration-300 ease-in-out ${
                        isOpen
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                >
                    <div className="absolute w-full bg-[#030522] border-t border-gray-800 shadow-lg">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.path}
                                    onClick={() => handleNavigation(item.path)}
                                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors
                                        ${pathname === item.path
                                            ? 'text-white bg-violet-600'
                                            : 'text-gray-400 hover:text-violet-400'
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <div className="h-16"></div>
        </nav>
    );
}