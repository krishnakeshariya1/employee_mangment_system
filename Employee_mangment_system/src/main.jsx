import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthProvider } from './Context/AuthProvider.jsx'
import { AdminProvider } from './Context/AdminProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < AdminProvider >
    < AuthProvider >
      <App />
    </AuthProvider>
    </AdminProvider>
  </StrictMode>,
)
