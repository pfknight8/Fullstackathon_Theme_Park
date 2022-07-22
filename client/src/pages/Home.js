import { useEffect, useState } from 'react'
import axios from 'axios'
import RideList from '../components/RideList'

const Home = ({ handleRideSelect }) => {
  const [rides, setRides] = useState([])

  useEffect(() => {
    const getRides = async () => {
      const res = await axios.get(`http://localhost:3001/rides`)
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
              onClick={() => handleRideSelect(ride)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
