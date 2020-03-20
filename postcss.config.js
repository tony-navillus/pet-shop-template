const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.svelte', './src/**/*.html'],
  whitelistPatterns: [/svelte-/],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = {
  plugins: [require('tailwindcss'), ...(!dev ? [purgecss] : [])],
}
