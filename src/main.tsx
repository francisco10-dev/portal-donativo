import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Appp from './components/Layout/app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Appp />
  </StrictMode>,
)
