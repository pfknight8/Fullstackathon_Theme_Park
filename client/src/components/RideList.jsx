const RideList = (props) => {

  return (
    <div>
      {
        props.rides.map((ride) => (
      <div className="coasterCard">
        <div className="img-container">
          <img src={ride.image} alt={ride.name} />
        </div>
        <div className="name-container">
          <h2>{ride.name}</h2>
          <p>Overall Rating: {ride.avg_rating}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default RideList