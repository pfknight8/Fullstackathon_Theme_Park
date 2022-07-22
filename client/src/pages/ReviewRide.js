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
          {rideSelected ? <p>Park: {rideSelect.park}</p> : null}
        </div>
      </section>
      <section className="review-area">
        <div>
          <h3>Rate Your Experience</h3>
          <select className="coasters-list" id="coasters">
            <option value="one-coaster">
              <span role="img" aria-label="one-coaster">
                🎢
              </span>
            </option>
            <option value="two-coasters">
              <span role="img" aria-label="two-coasters">
                🎢 🎢
              </span>
            </option>
            <option value="three-coasters">
              <span role="img" aria-label="three-coasters">
                🎢 🎢 🎢
              </span>
            </option>
            <option value="four-coasters">
              <span role="img" aria-label="four-coasters">
                🎢 🎢 🎢 🎢
              </span>
            </option>
            <option value="five-coasters">
              <span role="img" aria-label="five-coasters">
                🎢 🎢 🎢 🎢 🎢
              </span>
            </option>
          </select>
          <p>Avg Rating: </p>
          <textarea placeholder="Add Comments"></textarea>
          <button type="submit">Submit Review</button>
        </div>
      </section>
    </div>
  )
}

export default ReviewRide
