import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import './Body.css';
import App from './App.jsx'
import {routerProvider} from './AppLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {routerProvider}
  </StrictMode>,
)
