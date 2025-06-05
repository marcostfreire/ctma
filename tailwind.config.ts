import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {    extend: {
      colors: {
        'ctma-azul-marinho': '#101B35',        // Para texto principal, detalhes, talvez footer
        'ctma-cinza-azulado-claro': '#C3CAD1', // Para fundos secundários leves, bordas
        'ctma-white': '#FFFFFF',                // Fundo principal do site e componentes
        'ctma-cinza-ardosia': '#838B9B',      // Para texto secundário
        'ctma-azul-jeans': '#4F6B8F',        // NOVA COR - Para botões primários e secundários
        'ctma-accent-red': '#B51A1A',          // Para CTAs muito específicos ou alertas
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
