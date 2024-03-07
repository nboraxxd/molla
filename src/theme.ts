import { extendTheme } from '@chakra-ui/react'
import '@fontsource/poppins'

const theme = extendTheme({
  colors: {
    primary: {
      light: '#ccc',
      text: '#777',
      title: '#333',
      orange: '#fcb941',
      red: '#ef837b',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'primary.text',
        fontWeight: 400,
        a: {
          _hover: {
            color: 'primary.orange',
          },
        },
      },
    },
  },
})

export default theme
