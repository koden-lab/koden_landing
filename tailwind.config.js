/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*{.html,js,ts}","index.html"],
  theme: {
    extend: {
      colors: {
        deepBlue: "#1B5299",
        lightBlue: "#4AD1CB",
        lightPurple: "#9F9FED",
        whiteBG: "#FAFAF5",
        deepGray: "#1A1A1A"
      },
      fontSize: {
        xs: ['0.75rem', 'normal'],
        sm: ['0.875rem', 'normal'],
        base: ['1rem', 'normal'],
        lg: ['1.125rem', 'normal'],
        xl: ['1.25rem', 'normal'],
        '2xl': ['1.5rem', 'normal'],
        '3xl': ['1.875rem', 'normal'],
        '4xl': ['2.25rem', 'normal'],
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

