
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from "styled-components"
import { CartContextProvider } from './Contexts'
import { Router } from './Routes'

import { GlobalStyles } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"
export function App() {
 

  return (
    <div>
      <ThemeProvider theme={defaultTheme} >
      <GlobalStyles />
      <BrowserRouter>
      <CartContextProvider>
      <Router />
      </CartContextProvider>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}


