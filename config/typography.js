import Typography from 'typography'

//import 'typeface-muli'
import 'typeface-inter'
import 'typeface-lexend-deca'
import 'typeface-averta-pe'

// This website uses the system font stack after the placed "Montserrat" and "Source Sans Pro" fonts
// The scaleRatio will be overwritten for smaller breakpoints in src/components/Layout

const typography = new Typography({
  title: 'Strata',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerFontFamily: [
    'Averta PE', //'Lexend Deca', //'Muli',
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
    'Averta PE',
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
  headerWeight: 600,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
})

export default typography
