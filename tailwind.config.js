/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Outfit", "sans-serif"],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.zinc[100]"),
            "--tw-prose-headings": theme("colors.zinc[50]"),
            "--tw-prose-lead": theme("colors.pink[700]"),
            "--tw-prose-links": theme("colors.zinc[100]", "inherit"),
            "--tw-prose-bold": theme("colors.zinc[50]"),
            "--tw-prose-counters": theme("colors.stone[400]"),
            "--tw-prose-bullets": theme("colors.stone[400]"),
            "--tw-prose-hr": theme("colors.pink[300]"),
            "--tw-prose-quotes": theme("colors.zinc[100]"),
            "--tw-prose-quote-borders": theme("colors.stone[400]"),
            "--tw-prose-captions": theme("colors.zinc[400]"),
            "--tw-prose-code": theme("colors.zinc[100]"),
            "--tw-prose-pre-code": theme("colors.zinc[100]"),
            "--tw-prose-pre-bg": theme("colors.stone[800]"),
            "--tw-prose-th-borders": theme("colors.stone[400]"),
            "--tw-prose-td-borders": theme("colors.stone[400]"),
          },
        },
      }),
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/typography"),
  ],
};
