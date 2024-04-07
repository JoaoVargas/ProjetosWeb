import React from 'react'
import ReactDOM from 'react-dom/client'

import LoginPage from './src/components/login-page/LoginPage'

import './src/assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
)
