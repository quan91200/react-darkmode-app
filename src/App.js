import React from 'react'
import DarkModeToggle from './components/DarkModeToggle'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>React Dark Mode Toggle</h1>
      <DarkModeToggle />
      <p>Toggle between light and dark modes using the button above.</p>
    </div>
  )
}

export default App