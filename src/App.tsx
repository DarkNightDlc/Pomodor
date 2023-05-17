import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CycleContextProvider } from './context/CyclesContext'
import './styles/GlobalStyles.scss'

function App() {

  return (
    <BrowserRouter>
      <CycleContextProvider>
        <Router/>
      </CycleContextProvider>
    </BrowserRouter>
  )
}

export default App