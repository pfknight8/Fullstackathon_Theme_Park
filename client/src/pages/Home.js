import { useEffect, useState } from 'react'
import axios from 'axios'
// import ReviewRide from './ReviewRide'
import RideList from '../components/RideList'
// import rideSeed from './seed/rides.js'

const Home = ({ handleRideSelect }) => {
  const [rides, setRides] = useState([])

  useEffect(() => {
    const getRides = async () => {
      const res = await axios.get(`http://localhost:3001/rides`)
      // const res = rideSeed
      console.log(res)
      setRides(res.data.rides)
    }
    getRides()
  }, [])

  return (
    <div>
      <h1>Best Rides To Visit</h1>
      <div className="home-rides">
        {rides?.map((ride, index) => (
          <div key={index}>
            <RideList
              image={ride.image}
              name={ride.name}
              park={ride.park}
              rating={ride.rating}
              onClick={() => handleRideSelect(ride)} // change "name" to "_id"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
