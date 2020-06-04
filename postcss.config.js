const tailwindcss = require("tailwindcss");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.svelte", "./public/**/*.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const nanocss = require('cssnano')({
  preset: 'default',
});

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    require('autoprefixer'),

    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    ...(process.env.NODE_ENV === "production" ? [nanocss] : [])
  ]
};