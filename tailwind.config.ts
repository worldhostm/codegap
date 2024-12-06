import { color } from "chart.js/helpers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundImage: {
          'conic-gradient': 'conic-gradient(red, transparent)',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', width:'100%'},
          '100%': { opacity: '1', width:'100%' },
        },
        growWidth :{
          '0%' : {
            width: '0%',
            height: '0%',
            borderWidth: '0',
            borderColor: 'black',
          },
          '100%':{
            width: '150%',
            height: '150%',
            borderWidth: '8px',
            borderColor: 'red',
            display:'none',
          }
        },
        drawBorder: {
          '0%': {
            background: 'conic-gradient(red 0deg, transparent 0deg)',
          },
          '100%': {
            background: 'conic-gradient(red 360deg, transparent 0deg)',
          },
        },
        Zindex:{
          '0%':{
          }
          ,'100%':{
            
          }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 2.5s ease-in-out',
        growWidth:'growWidth 2s ease-in-out forwards',
        drawBorder:'drawBorder 5s forwards',
      },
    },
  },
  plugins: [],
};
export default config;
