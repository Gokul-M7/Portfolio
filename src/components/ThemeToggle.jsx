import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        // Check localStorage or system preference
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved) return saved === 'dark';
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <button
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};

export default ThemeToggle;
