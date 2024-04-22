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
      // padding: {
      //   '10px': '10px',
      //   '20px': '20px',
      // },
      // margin: {
      //   '5px': '5px',
      //   '10px': '10px',
      // },
    },
  },
};

const mergedConfig = {
  ...existingConfig,
  ...customizations,
};

module.exports = mergedConfig;

