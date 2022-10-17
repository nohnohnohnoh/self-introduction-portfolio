import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/Main/Main'
import App from './App'
import './styles/common.scss'
import './styles/reset.scss'
import Router from './Router/Router'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Router />)
