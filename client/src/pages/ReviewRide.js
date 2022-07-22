import { useEffect, useState } from 'react'
import axios from 'axios'
import RideList from '../components/RideList'

const ReviewRide = ({ rideSelect }) => {
  const [rideSelected, setRideSelect] = useState(false)
  const [rideReview, setRideReview] = useState(null)

  useEffect(() => {
    const getRideReviews = async () => {
      // const res = await axios.get(`API call here`)
      // setRideReview(res.data....)
      setRideSelect(true)
    }
    getRideReviews()
  }, [])

  return (
    <div className="review-page">
      <section className="ride-image-box">
        <div>
          {rideSelected ? (
            <img src={rideSelect.image} alt={rideSelect.name} />
          ) : null}
        </div>
      </section>
      <section className="ride-info">
        <div className="ride-description">
          {rideSelected ? <h2>{rideSelect.name}</h2> : null}
          {rideSelected ? <p>{rideSelect.description}</p> : null}
          {rideSelected ? (
            <p>
              <strong>Park:</strong> {rideSelect.park}
            </p>
          ) : null}
        </div>
      </section>
      <section className="review-area">
        <div>
          <h3>Rate Your Experience</h3>
          <p>
            Avg Rating: {rideSelected ? <span>{rideSelect.rating}</span> : null}
          </p>
        </div>
      </section>
    </div>
  )
}

export default ReviewRide
