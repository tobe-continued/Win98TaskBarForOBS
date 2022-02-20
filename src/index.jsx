import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { TwitchProvider } from './contexts/twitchContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TwitchProvider>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </TwitchProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()
