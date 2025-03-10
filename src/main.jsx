import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apps from './Apps.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps />
  </StrictMode>,
)
