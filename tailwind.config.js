/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        circularPattern: "url('../src/assets/image/circular_pattern.svg')",
        circularPattern2: "url('../src/assets/image/circular_pattern2.svg')",
        circularPattern3: "url('../src/assets/image/circular_pattern3.svg')",
        circularPattern4: "url('../src/assets/image/circular_pattern4.svg')",
        circularPattern5: "url('../src/assets/image/circular_pattern5.svg')",
      },
      colors: {
        lacustral: "#1B4B4B33",
        sage: "#266464",
        "frosty-dawn": "#CCE8C9",
        "china-blue": "#546078",
        "dr-white": "#F9FBFB",
        "weak-green": "#E0F1DF",
        papilio: "#8793AB",
        "gulf-harbour": {
          500: "#1D6363",
          700: "#144545",
        },
      },
    },
  },
  plugins: [],
};
