import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [ 
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			primary: '#7E60BF',
        grayDarker: '#09090b'
  		},
  		fontFamily: {
  			primary: ["var(--font-manrope)"],
  			secondary: ["var(--font-roboto)"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
