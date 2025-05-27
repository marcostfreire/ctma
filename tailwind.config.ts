import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ctma-azul-marinho': '#101B35',
        'ctma-cinza-azulado-claro': '#C3CAD1',
        'ctma-white': '#FFFFFF',
        'ctma-cinza-ardosia': '#838B9B',
        'ctma-accent-red': '#B51A1A', // Vermelho para CTAs e destaques
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
