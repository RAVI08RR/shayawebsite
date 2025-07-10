module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          overlay1: "var(--bg-overlay-1)",
          dark1: "var(--bg-dark-1)",
          dark2: "var(--bg-dark-2)",
          green1: "var(--bg-green-1)",
          greenOverlay: "var(--bg-green-overlay)",
          dark3: "var(--bg-dark-3)",
          dark4: "var(--bg-dark-4)",
          lightGreen: "var(--bg-light-green)",
          lightGray: "var(--bg-light-gray)",
          white: "var(--bg-white)",
          whiteOverlay1: "var(--bg-white-overlay-1)",
          whiteOverlay2: "var(--bg-white-overlay-2)"
        },
        text: {
          green: "var(--text-green)",
          dark1: "var(--text-dark-1)",
          dark2: "var(--text-dark-2)",
          dark3: "var(--text-dark-3)",
          dark4: "var(--text-dark-4)",
          dark5: "var(--text-dark-5)",
          dark6: "var(--text-dark-6)",
          dark7: "var(--text-dark-7)",
          dark8: "var(--text-dark-8)",
          dark9: "var(--text-dark-9)",
          dark10: "var(--text-dark-10)",
          dark11: "var(--text-dark-11)",
          dark12: "var(--text-dark-12)",
          gray1: "var(--text-gray-1)",
          gray2: "var(--text-gray-2)",
          gray3: "var(--text-gray-3)",
          gray4: "var(--text-gray-4)",
          gray5: "var(--text-gray-5)",
          gray6: "var(--text-gray-6)",
          white: "var(--text-white)"
        },
        button: {
          background: "var(--button-bg)"
        },
        slider: {
          background: "var(--slider-bg)",
          text: "var(--slider-text)"
        }
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
        'marcellus': ['Marcellus', 'serif'],
        'inter': ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};