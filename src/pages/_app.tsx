import '../interface/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import theme from '../interface/styles/themes/theme'
import { Header } from '../interface/components/header/header'
import HeaderAdmin from '../interface/components/headerAdmin/HeaderAdmin'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={theme}>
    <HeaderAdmin />
    <Component {...pageProps} />
  </ThemeProvider>
  );
}

export default MyApp
