import { useEffect, useState } from 'react'
import axios from 'axios'
import RideList from '../components/RideList'

const ReviewRide = (props) => {
  const [rideSelect, setRideSelect] = useState(false)
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
          {rideSelect ? <img src={props.image} alt={props.name} /> : null}
        </div>
      </section>
      <section className="ride-info">
        <div className="ride-description">
          {rideSelect ? <h2>{props.name}</h2> : null}
          {rideSelect ? <p>{props.description}</p> : null}
          {rideSelect ? <p>Park: {props.park}</p> : null}
        </div>
      </section>
      <section className="review-area">
        <div>
          <h3>Rate Your Experience</h3>
          <p>Avg Rating: </p>
          <input placeholder="Add Comments"></input>
          <button>Submit Review</button>
        </div>
      </section>
    </div>
  )
}

export default ReviewRide
