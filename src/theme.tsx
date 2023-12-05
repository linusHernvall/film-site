import { createTheme } from '@mui/material'

const FONT_PRIMARY = ['Bebas Neue', 'sans-serif'].join(',')
const FONT_SECONDARY = ['Gothic A1', 'sans-serif'].join(',')

export const theme = createTheme({
  typography: {
    fontFamily: FONT_PRIMARY,
    fontSize: 16,
    h1: {
      lineHeight: 1.5,
      fontWeight: 800,
      fontSize: 36,
      textTransform: 'uppercase',
      color: '#E50914',
    },
    h2: {
      lineHeight: 1.5,
      fontWeight: 700,
      fontSize: 28,
      textTransform: 'uppercase',
      color: '#E50914',
    },
    h3: {
      lineHeight: 1.5,
      fontWeight: 700,
      fontSize: 24,
      textTransform: 'uppercase',
      color: '#E50914',
    },
    h4: {
      lineHeight: 1.5,
      fontWeight: 700,
      fontSize: 22,
      textTransform: 'uppercase',
      color: '#E50914',
    },
    h5: {
      lineHeight: 1.5,
      fontWeight: 700,
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#E50914',
    },
    h6: {
      lineHeight: 1.5,
      fontWeight: 700,
      fontSize: 18,
      textTransform: 'uppercase',
      color: '#E50914',
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: 18,
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: 16,
    },
    body1: {
      lineHeight: 1.5,
      fontSize: 16,
      fontWeight: 700,
      fontFamily: FONT_SECONDARY,
      color: '#f5f5f1',
    },
    button: {
      fontWeight: 700,
      fontSize: 16,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 10,
  },
})
