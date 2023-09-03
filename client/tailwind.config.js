module.exports = {
  content: ["./src/**/*.{html,js}"],
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {

    fontFamily:{
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'poppins':['poppins','ui-monospace','ubuntu','archivo','sans-serif'],
    },
    extend: {
    },
  },
  variants: {},
  plugins: [],
}

