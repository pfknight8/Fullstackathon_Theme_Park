const RideList = (props) => {

  return (
    <div>
      <div className="coasterCard" onClick={props.onClick}>
        <div className="img-container">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="name-container">
          <h2>{props.name}</h2>
          <p>Park: {props.park}</p>
        </div>
      </div>
    </div>
  )
}

export default RideList