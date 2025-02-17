/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    // width
    { pattern: /w-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /w-\d+\/\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    // height
    { pattern: /h-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /h-\d+\/\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    // padding
    { pattern: /p-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /px-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /py-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /pt-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /pr-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /pb-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /pl-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    // margin
    { pattern: /m-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /mx-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /my-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /mt-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /mr-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /mb-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /ml-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    // gap
    { pattern: /gap-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /gap-x-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /gap-y-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    // space
    { pattern: /space-x-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /space-y-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },

    // text
    { pattern: /text/ },

    // !important text
    { pattern: /!text/ },

    // background
    { pattern: /bg/ },

    // !important bg
    { pattern: /!bg/ },

    // grid & row
    { pattern: /grid/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /grid-cols-\d+/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    {
      pattern: /grid-cols-none/,
      variants: ["sm", "md", "lg", "xl", "desktop"],
    },

    // flex
    { pattern: /flex/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /justify/, variants: ["sm", "md", "lg", "xl", "desktop"] },
    { pattern: /items/, variants: ["sm", "md", "lg", "xl", "desktop"] },

    // rounded
    { pattern: /rounded/ },
    { pattern: /rounded-none/ },

    // border
    { pattern: /border/ },
    { pattern: /border-0/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
