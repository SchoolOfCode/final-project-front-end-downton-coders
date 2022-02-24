import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Form() {
  return (
    <div className="form-container">
        <form className="signup-form">
            <input className="title-input" type="text" placeholder="title" name="title"/>
            <input className="location-input" type="text" placeholder="location" name="location" />
            <input className="date-input" type="text" placeholder="date" name="date" />
            <input className="description-input" type="text" placeholder="description" name="description" />
            <input className="image-input" type="img" placeholder="image" name="image" />
            <input className="price-input" type="price" placeholder="price" name="price" />
            <button className="submit-button" value="submit" type="submit">submit</button>
        </form>
    </div>
  )
}

export default Form