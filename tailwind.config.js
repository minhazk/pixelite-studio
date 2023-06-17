/** @type {import('tailwindcss').Config} */

const defaultColours = require('tailwindcss/colors');

module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/sections/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {},
        colors: {
            ...defaultColours,
            primary: 'var(--primary-clr)',
            secondary: 'var(--secondary-clr)',
            background: 'var(--background-clr)',
            accent: 'var(--accent-clr)',
        },
    },
    plugins: [],
};
