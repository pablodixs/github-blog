import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
