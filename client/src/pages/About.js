import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const About = () => {
  const [formBody, setFormBody] = useState({})
  const [goodToGo, toggleGood] = useState(false)

  let navigate = useNavigate();

  //Check to see if the formBody has 5 key:value pairs in it to toggle true.
  useEffect(() => {
    let formBodyCount = Object.keys(formBody).length
    formBodyCount === 5 ? toggleGood(true) : toggleGood(false)
  }, [formBody] )

  // Will gather the inputs and place them in formBody appropriately
  const handleFormChange = (e) => {
    let formItem = e.target.value
    switch(e.target.id) {
      case "name":
        setFormBody({...formBody, name: formItem})
        break
      case "park":
        setFormBody({...formBody, park: formItem})
        break
      case "description":
        setFormBody({...formBody, description: formItem})
        break
      case "image":
        setFormBody({...formBody, image: formItem})
        break
      default:
        toggleGood(false)
    }
  }
  // Handles the selector box and puts it in the formBody
  const handleDropdown = (e) => {
    console.log(typeof e.target.value)
    let rateValue = e.target.value
    setFormBody({...formBody, rating: rateValue})
  }
  
  const formToDB = async (formBody) => {
    console.log(formBody)
    if (goodToGo) {
        await axios.post('http://localhost:3001/rides', formBody)
        console.log('Sent ride to list!')
        toggleGood(false)
        navigate('/')
    } else {
      alert("Form incomplete.")
    }
  }

  // Neeh a submit button handler!
  const handleSubmit = (e) => {
    e.preventDefault()
    if (goodToGo) {
      formToDB(formBody)
    } else {
      alert('You are missing something')
    }
  }
  
  return (
    <div>
      <h1>Howdy!</h1>
      <p>We'll talk about some stuff here...<br />Care for some Scotch?</p>
      <section className="form">
        <div className="formTxt">
          <textarea className="formField" id="name" placeholder="Ride Name" onChange={handleFormChange}></textarea>
          <textarea className="formField" id="park" placeholder="Park Name" onChange={handleFormChange}></textarea>
          <textarea className="formField" id="description" placeholder="Short Description" onChange={handleFormChange}></textarea>
          <textarea className="formField" id="image" placeholder="Image Url" onChange={handleFormChange}></textarea>
        </div>
        <select className="coasters-list" id="coasters" onChange={handleDropdown}>
          <option value="1" role="img" aria-label="one-coaster">
              🎢
          </option>
          <option value="2" role="img" aria-label="two-coasters">
              🎢 🎢
          </option>
          <option value="3" role="img" aria-label="three-coasters">
              🎢 🎢 🎢
          </option>
          <option value="4" role="img" aria-label="four-coasters">
              🎢 🎢 🎢 🎢
          </option>
          <option value="5" role="img" aria-label="five-coasters">
              🎢 🎢 🎢 🎢 🎢
          </option>
        </select>
      </section>
      <button type="submit" onClick={handleSubmit}>Submit Ride!</button>
    </div>
  )
}

export default About