import { createTheme } from '@mui/material'
import { palette } from './palette'

const FONT_PRIMARY = ['Bebas Neue', 'sans-serif'].join(',')
const FONT_SECONDARY = ['Gothic A1', 'sans-serif'].join(',')

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: FONT_PRIMARY,
    fontSize: 16,
    h1: {
      lineHeight: 1.5,
      fontWeight: 800,
      fontSize: 36,
      textTransform: 'uppercase',
      color: '#f5f5f1',
      background: 'transparent',
    },
    h2: {
      lineHeight: 1.5,
      fontWeight: 700,
      fontSize: 28,
      textTransform: 'uppercase',
      color: '#f5f5f1',
      background: 'transparent',
    },
    h3: {
      lineHeight: 1.5,
      fontWeight: 700,
      fontSize: 24,
      textTransform: 'uppercase',
      color: '#f5f5f1',
      background: 'transparent',
    },
    h4: {
      lineHeight: 1.5,
      fontWeight: 700,
      fontSize: 22,
      textTransform: 'uppercase',
      color: '#f5f5f1',
      background: 'transparent',
    },
    h5: {
      lineHeight: 1.5,
      fontWeight: 700,
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#f5f5f1',
      background: 'transparent',
    },
    h6: {
      lineHeight: 1.5,
      fontWeight: 700,
      fontSize: 18,
      textTransform: 'uppercase',
      color: '#f5f5f1',
      background: 'transparent',
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: 18,
      background: 'transparent',
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: 16,
      background: 'transparent',
    },
    body1: {
      lineHeight: 1.5,
      fontSize: 16,
      fontWeight: 700,
      fontFamily: FONT_SECONDARY,
      color: '#f5f5f1',
      background: 'transparent',
    },
    body2: {
      lineHeight: 1.5,
      fontSize: 12,
      fontWeight: 700,
      fontFamily: FONT_SECONDARY,
      color: '#f5f5f1',
      background: 'transparent',
    },
    button: {
      fontWeight: 700,
      fontSize: 16,
      textTransform: 'none',
      background: 'transparent',
    },
  },
  shape: {
    borderRadius: 10,
  },
})
