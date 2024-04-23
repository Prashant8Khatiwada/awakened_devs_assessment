const existingConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

const customizations = {
  theme: {
    extend: {
      colors: {
        'color-primary': '#FFFFFF',
        'color-secondary': '#172432',
        'color-secondary-light': '#767E86',
        'color-btn-primary': '#FF7757',
        'color-btn-secondary': '#172432',
      },
      fontSize: {
        'font-sm': '18px',
        'font-md': '24px',
        'font-lg': '64px',
        'font-xl': '84px',
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'sound': 600,
        'bold': 700,
        'extrabold': 800,
      },
      screens: {
        'xsm': {'max': '320px'},  
        'sml': {'max': '768px'},
        'mid': {'max': '1152px'},
        'lrg': {'max': '1440px'},
        'xlg': {'max': '1920px'},
      }
    },
  },
};

const mergedConfig = {
  ...existingConfig,
  ...customizations,
};

module.exports = mergedConfig;

