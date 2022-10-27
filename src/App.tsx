import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter } from 'react-router-dom'

import { ApiContextProvider } from './contexts/ApiContext'
import { Router } from './Router'

export function App() {
  return (
    <ApiContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
    </ApiContextProvider>
  )
}
