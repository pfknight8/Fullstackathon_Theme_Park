import { useEffect, useState } from 'react'
import axios from 'axios'
import ReviewRide from '../pages/ReviewRide'
import RideList from '../components/RideList'

const Home = ({ handleRideSelect }) => {
  const [rides, setRides] = useState([])

  useEffect(() => {
    const getRides = async () => {
      const res = await axios.get(`./client/public/rideList.json`)
      getRides(res.results)
    }
  }, [])

  return (
    <div>
      <h1>Best Rides To Visit</h1>
      <div className="all-rides-list">
        {rides.map((ride, index) => (
          <div key={index}>
            <RideList
              image={ride.image}
              name={ride.name}
              park={ride.park}
              onClick={() => handleRideSelect(ride._id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
