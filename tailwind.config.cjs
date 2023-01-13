/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
          backdropBrightness: {
              25: ".25",
          },
      },
  },
  plugins: [
      require('@tailwindcss/typography'),
      require("daisyui")
  ],
  daisyui: {
      styled: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      themes: [
          {
              ashdark: {

                  'primary': '#5b696f',
                  'primary-focus': '#033859',
                  'primary-content': '#eeeeff',

                  'secondary': '#44b022',
                  'secondary-focus': '#00cc00',
                  'secondary-content': '#000000',

                  'accent': '#d4a886',
                  'accent-focus': '#ffdd00',
                  'accent-content': '#000000',

                  'neutral': '#5f7992',
                  'neutral-focus': '#7f99a2',
                  'neutral-content': '#eeeeff',

                  'base-100': '#131720',
                  'base-200': '#232730',
                  'base-300': '#022033',
                  'base-content': '#eeeeff',

                  'info': '#384fff',
                  'success': '#87cf3a',
                  'warning': '#ffb347',
                  'error': '#ff1a1a',

                  '--rounded-box': '0.25rem',
                  '--rounded-btn': '.25rem',
                  '--rounded-badge': '0.1rem',

                  '--animation-btn': '0.25s',
                  '--animation-input': '0.2s',

                  '--navbar-padding': '.5rem',
                  '--border-btn': '1px',
              },

              ashlight: {

                  'primary': '#5b696f',
                  'primary-focus': '#033859',
                  'primary-content': '#eeeeff',

                  'secondary': '#51c1df',
                  'secondary-focus': '#71e1ff',
                  'secondary-content': '#111133',

                  'accent': '#d4a886',
                  'accent-focus': '#ae9822',
                  'accent-content': '#eeeeff',

                  'neutral': '#102e88',
                  'neutral-focus': '#0038c7',
                  'neutral-content': '#eeeeff',

                  'base-100': '#eeeeff',
                  'base-200': '#ddddee',
                  'base-300': '#022033',
                  'base-content': '#222200',

                  'info': '#384fff',
                  'success': '#87cf3a',
                  'warning': '#ffb347',
                  'error': '#ff1a1a',

                  '--rounded-box': '0.0rem',
                  '--rounded-btn': '0.0rem',
                  '--rounded-badge': '0.0rem',

                  '--animation-btn': '0.25s',
                  '--animation-input': '0.2s',

                  '--navbar-padding': '.5rem',
                  '--border-btn': '1px',
              },

          },
      ],
  },

}
