import { useState, useEffect } from "react"
import axios from "axios"


const About = () => {
  const [formBody, setFormBody] = useState({})
  const [goodToGo, toggleGood] = useState(false)

  useEffect(() => {
    const fillForm = async () => {
      // Let the fun begin!
      // Need the boolean to be true? Can we rely only on the try/catch? Find out next time...
      try {
        const something = await axios.post('localhost:3001/rides')
        // set the boolean to false?
      } catch (error) {
        // Do something!
      }
    }
  },[])

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
    // Also need that drop down to convert to a stringified number...hope it's simple.
  }
  
  // Neeh a submit button handler!
  const handleSubmit = () => {
    //What to do?
  }
  
  // The return...can change the div structure by giving textareas a className and implementing css. Did it this way due to 2:00AM
  return (
    <div>
      <h1>Howdy!</h1>
      <p>We'll talk about some stuff here...<br />Care for some Scotch?</p>
      <div>
        <textarea id="name" placeholder="Ride Name" onChange={handleFormChange}></textarea>
      </div>
      <div>
        <textarea id="park" placeholder="Park Name" onChange={handleFormChange}></textarea>
      <div>
        <textarea id="description" placeholder="Short Description" onChange={handleFormChange}></textarea>
      </div>
        <textarea id="image" placeholder="Image Url" onChange={handleFormChange}></textarea>
      </div>
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
      <button type="submit" onClick={handleSubmit}>Submit Ride!</button>
    </div>
  )
}

export default About