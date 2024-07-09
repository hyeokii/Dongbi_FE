import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '',
      },
      fontSize: {
        11: '11px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
      },
      lineHeight: {
        120: '1.2',
        130: '1.3',
        140: '1.4',
        150: '1.5',
      },
      backgroundImage: {
        'square-check-yes': "url('/icon/icon_square_check_Y.svg')",
        'square-check-no': "url('/icon/icon_square_check_N.svg')",
        'circle-check-yes': "url('@/public/icon/icon_square_check_Y.svg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const centerUtilities = {
        '.absolute-center': {
          '@apply absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2':
            {},
        },
        '.flex-center': {
          '@apply flex justify-center items-center': {},
        },
      };
      const typoUtilities = {
        '.typo-heading-20-semibold': {
          'font-size': '20px',
          'font-weight': 600,
          'line-height': '150%',
          'letter-spacing': '-0.02em',
        },
      };
      addUtilities({ ...typoUtilities, ...centerUtilities });
    },
  ],
};

export default config;
