import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  plugins: [formsPlugin, typographyPlugin],
  theme:{
    colors: {
      'black':'#000',
      'white': '#fff',
      'baseInfo': '#D8E4EE',
      'baseMembership': '#F1EBDF',
      'textMembership': '#E50010'
    }
  }
    
};
