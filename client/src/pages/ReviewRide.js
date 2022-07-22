import { useEffect, useState } from 'react'

const ReviewRide = ({ rideSelect }) => {
  const [rideSelected, setRideSelect] = useState(false)

  useEffect(() => {
    const getRideReviews = async () => {
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
          <h3>
            Avg Rating:{' '}
            {rideSelected ? (
              <span className="selectRating">{rideSelect.rating}</span>
            ) : null}
          </h3>
        </div>
      </section>
    </div>
  )
}

export default ReviewRide
