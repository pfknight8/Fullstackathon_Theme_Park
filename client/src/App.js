import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import ReviewRide from "./pages/ReviewRide";
// import RideList from './components/RideList'
import "./App.css";
import { useState } from "react";

const App = () => {
  // // State
  const [rideSelect, setRideSelect] = useState("");

  let navigate = useNavigate();

  // // Functions
  const handleRideSelect = (ride) => {
    setRideSelect(ride);
    navigate(`/ride/:${ride.name}`); // change "name" to "_id"
  };

  // Display returns
  return (
    <div className="App">
      <Header />
      <h1>Hello!</h1>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home handleRideSelect={handleRideSelect} />}
          />
          <Route path="/share" element={<About />} />
          <Route
            path="/ride/:rideId"
            element={<ReviewRide rideSelect={rideSelect} />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
