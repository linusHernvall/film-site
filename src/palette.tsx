import { PaletteOptions } from '@mui/material'

declare module '@mui/material/styles' {
  interface PaletteColor {
    '100'?: string
    '200'?: string
    '300'?: string
    '400'?: string
    '500'?: string
    '600'?: string
    '700'?: string
    '800'?: string
    '900'?: string
  }

  interface SimplePaletteColorOptions {
    '100'?: string
    '200'?: string
    '300'?: string
    '400'?: string
    '500'?: string
    '600'?: string
    '700'?: string
    '800'?: string
    '900'?: string
  }
}

export const palette: PaletteOptions = {
  primary: {
    main: '#E50914',
    '100': '#fce6e8',
    '200': '#fbdadc',
    '300': '#f7b3b6',
    '400': '#E50914',
    '500': '#ce0812',
    '600': '#b70710',
    '700': '#ac070f',
    '800': '#89050c',
    '900': '#670409',
  },
  secondary: {
    main: '#f5f5f1',
    '100': '#fefefe',
    '200': '#fefefd',
    '300': '#fcfcfb',
    '400': '#f5f5f1',
    '500': '#ddddd9',
    '600': '#c4c4c1',
    '700': '#b8b8b5',
    '800': '#939391',
    '900': '#6e6e6c',
  },
  grey: {
    '100': '#e9e9e9',
    '200': '#dedddd',
    '300': '#bababa',
    '400': '#221f1f', // use as main
    '500': '#1f1c1c',
    '600': '#1b1919',
    '700': '#1a1717',
    '800': '#141313',
    '900': '#0f0e0e',
  },
  background: {
    default: '#0f0e0e',
    paper: '#303030',
  },
  error: {
    light: '#FD8787',
    main: '#732a27',
    dark: '#5a4142',
  },
  success: {
    main: '#87FD93',
    dark: '#87fd9333',
  },
}
