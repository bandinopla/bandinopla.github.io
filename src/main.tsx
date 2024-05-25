import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' 
import './index.css'
import { Loader } from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
        <App /> 
        <Loader />
  </React.StrictMode>,
)
