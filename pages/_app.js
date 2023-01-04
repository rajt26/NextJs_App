import '../styles/globals.css'
import MainLayout from '../components/layout/layout'
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../util/theme/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        < MainLayout >
          <Component {...pageProps} />
        </MainLayout >
      </ThemeProvider>
    </>
  )
}
