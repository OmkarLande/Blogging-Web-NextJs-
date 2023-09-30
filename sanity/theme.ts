import {buildLegacyTheme, defineConfig} from 'sanity'

const props = {
  '--my-white': '#ffebe5',
//   '--my-white': '#fff1dc',
  '--my-black': '#1a1a1a',
//   '--my-black': '#36006b',
  '--og-brand': '#148fdb',
//   '--og-brand': '#520f91',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
}

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#cccccc',
  '--gray-base': '#cccccc',

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  /* Brand */
  '--brand-primary': props['--og-brand'],

  // Default button
  '--default-button-color': '#cccccc',
  '--default-button-primary-color': props['--og-brand'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--og-brand'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--og-brand'],
})
