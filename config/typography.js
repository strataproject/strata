import Typography from 'typography'

//import 'typeface-muli'
import 'typeface-inter'

// This website uses the system font stack after the placed "Montserrat" and "Source Sans Pro" fonts
// The scaleRatio will be overwritten for smaller breakpoints in src/components/Layout

const typography = new Typography({
  title: 'Strata',
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerFontFamily: [
    'Lexend Deca', //'Muli',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  bodyFontFamily: [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  scaleRatio: 2,
  headerWeight: 100,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
})

export default typography
