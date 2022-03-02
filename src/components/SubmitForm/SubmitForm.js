//Not using it right now
import React, { useState } from "react";
import { MDBCollapse, MDBBtn } from "mdb-react-ui-kit";
import { Form, Button } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SubmitForm() {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <div className="form-container">
      <MDBBtn onClick={toggleShow} className="create-experience-button">
        Create Experience
      </MDBBtn>
      <MDBCollapse show={showShow}>
        <Form className="signup-form">
          <Form.Group>
            <Form.Control
              className="title-input"
              type="text"
              placeholder="title"
              name="title"
            />
            <Form.Control
              className="location-input"
              type="text"
              placeholder="location"
              name="location"
            />
            <Form.Control
              className="date-input"
              type="text"
              placeholder="date"
              name="date"
            />
            <Form.Control
              className="description-input"
              type="text"
              placeholder="description"
              name="description"
            />
            <Form.Control
              className="image-input"
              type="img"
              placeholder="image"
              name="image"
            />
            <Form.Control
              className="price-input"
              type="price"
              placeholder="price"
              name="price"
            />
            <Button className="submit-button" value="submit" type="submit">
              submit
            </Button>
          </Form.Group>
        </Form>
      </MDBCollapse>
    </div>
  );
}

export default SubmitForm;

// import React, { useState } from 'react';
// import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "./SubmitForm.css"

// function SubmitForm() {
//   const [showShow, setShowShow] = useState(false);

//   const toggleShow = () => setShowShow(!showShow);

//   return (
//     <>

//       <MDBBtn onClick={toggleShow}>Button</MDBBtn>
//       <MDBCollapse show={showShow}>
//         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
//         keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
//       </MDBCollapse>
//     </>
//   );
// }

// export default SubmitForm

// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Form, Button } from 'react-bootstrap'
// import "./SubmitForm.css"

// function SubmitForm() {
//   return (
//     <div className="form-container">
//     <Button type="button" className="create-experience-button" class="btn btn-primary btn-lg btn-block">Create Experience</Button>
//         <Form className="signup-form">
//         <Form.Group>
//             <Form.Control className="title-input" type="text" placeholder="title" name="title"/>
//             <Form.Control className="location-input" type="text" placeholder="location" name="location" />
//             <Form.Control className="date-input" type="text" placeholder="date" name="date" />
//             <Form.Control className="description-input" type="text" placeholder="description" name="description" />
//             <Form.Control className="image-input" type="img" placeholder="image" name="image" />
//             <Form.Control className="price-input" type="price" placeholder="price" name="price" />
//             <Button className="submit-button" value="submit" type="submit">submit</Button>
//         </Form.Group>
//         </Form>
//     </div>
//   )
// }

// export default SubmitForm
