import './App.css'
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'

import Contacto from './views/Contacto'
import NotFound from './views/NotFound'
import HomePage from './views/HomePage'

function App() {

  return (
    <>
      <div>
      <Navigation />
      <Routes>
        <Route 
        path="/Contacto" 
        element={<Contacto />} />

        <Route 
        path="/" 
        element={<HomePage />} />

        <Route
        path="*"
        element={<NotFound />} />
      </Routes>
      </div>
    </>
  )
}

export default App
