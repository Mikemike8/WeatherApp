import React from 'react'
import Weather from './components/Weather'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Weather/>
    </div>
  )
}

export default App