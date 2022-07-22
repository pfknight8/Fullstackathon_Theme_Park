import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";


const About = () => {
  const [formBody, setFormBody] = useState({"rating":"A"})
  const [goodToGo, toggleGood] = useState(false)

  let navigate = useNavigate();

  // useEffect(() => {},[])

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

  const formToDB = async (formBody) => {
    // Let the fun begin!
    // Need the boolean to be true? Can we rely only on the try/catch? Find out next time...
    console.log(formBody)
    if (goodToGo) {
      // try {
        await axios.post('http://localhost:3001/rides', formBody)
        // set the boolean to false?
        console.log('Sent ride to list!')
        navigate('/')
      // } catch (error) {
      //   // Do something!
      //   console.log('What?!')
      // }
    } else {
      alert("Form incomplete.")
    }
  }
  
  // Neeh a submit button handler!
  const handleSubmit = (e) => {
    e.preventDefault()
    if (goodToGo) {
      //can submit thet form!
      formToDB(formBody)
    } else {
      //not ready
      alert('You are missing something')
    }
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
      <button type="submit" onClick={handleSubmit}>Submit Ride!</button>
    </div>
  )
}

export default About