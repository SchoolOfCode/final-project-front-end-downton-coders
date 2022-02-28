
import React, { useState } from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./SubmitForm.css"

function SubmitForm() {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    
    <div className = "experience-form-container">      
        <MDBBtn onClick={toggleShow} className="create-experience-button"><h2>Create New Experience</h2></MDBBtn>
          <MDBCollapse show={showShow} className="show-container">
          <div className= "main-container">
          <div className="card">
            <div className = "create-experience-image">
                <fieldset><input type="file" className="form-image-file" ></input></fieldset>
            </div>
            <div className="mt-4 text-center">
              <fieldset> 
                <div className="mt-3 inputbox">
                  <input type="text" className="form-control" name="" placeholder="Title"></input>
                  <div className= "locaton-date-flex">
                    <input type="text" className="form-control" name="" placeholder="Location"></input>
                    <input type="text" className="form-control" name="" placeholder="Date / Time"></input>
                  </div>
                  <input type="text" className="form-control" name="" placeholder="Description"></input>
                  <input type="text" className="form-control" name="" placeholder="price"></input>
                  <div className="mt-2"> <button className="btn btn-primary btn-block">Submit</button> </div>
                </div> 
              </fieldset>
            </div>
          </div>
          </div>
      </MDBCollapse>
      </div>               
  );
}

export default SubmitForm










//  import React, { useState } from 'react';
//  import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
//  import { Form, Button } from 'react-bootstrap'
//  import "./SubmitForm.css"
//  import 'bootstrap/dist/css/bootstrap.min.css'
//  import "./SubmitForm.css"

//  function SubmitForm() {
//    const [showShow, setShowShow] = useState(false);

//    const toggleShow = () => setShowShow(!showShow);

//    return (
//      <div className = "experience-form-container">
              
//        <MDBBtn onClick={toggleShow} className="create-experience-button"><h2>Create New Experience</h2></MDBBtn>
//          <MDBCollapse show={showShow}>
//          <div className="container">
//            <form id="create-experience" action="" method="post">
//          <div className = "form-group-image">
//            <fieldset><input type="file" className="form-control-file" ></input></fieldset>
//          </div>
//          <fieldset> <input placeholder="title" className="title-input" name="title" type="text" tabindex="1" required autofocus></input> </fieldset>
//          <div className="location-date-container">
//            <fieldset> <input placeholder="location:" className="location-input" name="location" type="text" tabindex="2" required autofocus></input> </fieldset>
//            <fieldset> <input placeholder="date / time:" className="date-input" name="date" type="text" tabindex="3" required autofocus></input> </fieldset>
//          </div>
//            <fieldset> <input placeholder="categories:" className="categories-input" name="categories" type="text" tabindex="4" required autofocus></input> </fieldset> 
//            <fieldset> <textarea placeholder="Type your description here..." tabindex="5" required></textarea> </fieldset>
//            <fieldset> <input placeholder="Cost:" className="cost-input" name="cost" type="text" tabindex="6" required></input> </fieldset>
//            <fieldset> <button className="submit-button" type="submit"  data-submit="...Sending"><i id="icon" class=""></i> Submit</button> </fieldset>
//      </form>
//      </div>
//      </MDBCollapse>
//      </div>
                    
//    );
//  }

//  export default SubmitForm 


