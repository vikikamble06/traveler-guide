/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0F2B5C",
          "blue-light": "#1E40AF",
          teal: "#0D9488",
          "teal-light": "#14B8A6",
          green: "#059669",
          "green-light": "#10B981",
          purple: "#7C3AED", // Pune Metro Purple line
          aqua: "#0284C7",   // Pune Metro Aqua line
          maroon: "#881337", // Heritage / Shaniwar Wada
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
