import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import './styles/GlobalStyles.scss'

function App() {

  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}

export default App
