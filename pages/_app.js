// 1. import `NextUIProvider` component
import { createTheme, NextUIProvider } from "@nextui-org/react"
import '../styles/globals.css'

// 2. Call `createTheme` and pass your custom theme values
const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#CAD2C5',
      error: '#FCC5D8',
    },
  }
})

// 3. Pass the new `theme`` to the `NextUIProvider`
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp