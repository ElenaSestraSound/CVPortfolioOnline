import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export const colors = {
  brand: {
    'highlight': '#A4031F',
    'accent': '#FA8C0F ',
    'lightText1': '#070707',
    'lightText2': '#7D8491',
    'darkText': '#FFF',
    'darkBg': '#070707',
    'lightBg': '#f5f0f6ff',
    'buttonSecondary': '#070707'
  },
}

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}