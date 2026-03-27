import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Sapps from './Sapps.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sap />
  </StrictMode>,
)
