import { useEffect, useState } from 'react'
// import axios from 'axios'
// import ReviewRide from './ReviewRide'
import RideList from '../components/RideList'
import rideSeed from '../rideList.json'

const Home = ({ handleRideSelect }) => {
  const [rides, setRides] = useState([])
  const [ridesGotten, toggleRidesGotten] = useState(false)

  useEffect(() => {
    const getRides = async () => {
      // const res = await axios.get(`./client/public/rideList.json`)
      const res = rideSeed
      setRides(res.results)
      toggleRidesGotten(true)
    }
    getRides()
  }, [])

  return (
    <div>
      <h1>Best Rides To Visit</h1>
      <div className="home-rides">
        {ridesGotten
          ? rides.map((ride, index) => (
              <div key={index}>
                <RideList
                  image={ride.image}
                  name={ride.name}
                  park={ride.park}
                  onClick={() => handleRideSelect(ride._id)}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

export default Home
