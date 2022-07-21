import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from ',/pages/About'
import Header from './src/Header'
import Review from './src/Review'
import RideList from './src/RideList'
import './App.css'
import { uesState, useState } from 'react'

const App = () => {
  // State
  const [something, setSomething] = useState('')
  //
let navigate = useNavigate()
const handleSelect = (xxx) => {
  //
}

  return (
    <div className='App'>
      // Stuff goes here
      <Header />
      <main>
        // Routes
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path='/about' element= { <About /> } />
          <Route path='/ride/:rideId' element= { <Review /> } />
          <Route path='/ride' element= { <RideList /> } />
        </Routes>
      </main>
    </div>
  )
}

export default App