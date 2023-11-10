import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CurrentUserContextProvider } from './contexts/authContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrentUserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CurrentUserContextProvider>
  </React.StrictMode>
)
