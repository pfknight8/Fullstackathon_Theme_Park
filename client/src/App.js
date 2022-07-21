import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import ReviewRide from './pages/ReviewRide'
import RideList from './components/RideList'
import './App.css'
import { useState } from 'react'

const App = () => {
  // // State
  const [rideId, setRideId] = useState('')

  let navigate = useNavigate()

  // // Functions
  const handleRideSelect = (ride) => {
    setRideId(ride)
    navigate(`/ride/:${ride}`)
  }

  // Display returns
  return (
    <div className="App">
      // Stuff goes here
      <Header />
      <main>
        // Routes
        <Routes>
          <Route
            path="/"
            element={<Home handleRideSelect={handleRideSelect} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/ride/:rideId"
            element={<ReviewRide rideId={rideId} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
