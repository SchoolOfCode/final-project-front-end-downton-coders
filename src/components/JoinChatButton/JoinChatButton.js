import React from 'react';
import "./JoinChatButton.css";



function JoinChatButton() {


    return (
 <div className="container d-flex justify-content-center">
    <div className="card mt-5">
        <div className="d-flex flex-row justify-content-between p-3 adiv text-white">
            <i className="fas fa-chevron-left"></i> <span class="pb-3">Live chat</span> <i class="fas fa-times"></i> 
        </div>
        <div className="d-flex flex-row p-3"> 
            <img src={"https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png"} alt="chat" width="30" height="30"/>
        </div>
            <div className="chat ml-2 p-3">
                Hello and thankyou for visiting birdlymind. Please click the video above
            </div>
        <div className="d-flex flex-row p-3">
            <div className="bg-white mr-2 p-3">
                <span className="text-muted">Hello and thankyou for visiting birdlynind.</span>
            </div>
            <div>
                <img src={"https://img.icons8.com/color/48/000000/circled-user-male-skin-type-7.png"}  alt="chat" width="30" height="30"/>
            </div>
        </div>

        <div className="d-flex flex-row p-3"> 
            <img src={"https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png"}  alt="chat" width="30" height="30"/>
            <div className="myvideo ml-2">
             <img src={"https://imgur.com/GOxU1jx.png"}  alt="chat" width="200"/>
            </div>
        </div>
        <div className="d-flex flex-row p-3"> 
            <img src={"https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png"}  alt="chat" width="30" height="30"/>
            <div className="chat ml-2 p-3">
                <span className="text-muted dot">. . .</span>
            </div>
        </div>

        <div className="form-group px-3">
            <textarea className="form-control" rows="5" placeholder="Type your message"></textarea> 
        </div>
    </div> 
</div>
 
);

}








export default JoinChatButton;








// import React, { useState } from 'react';
// import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
// import { Form, Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "./JoinChatButton.css";



// function JoinChatButton() {
//     const [showShow, setShowShow] = useState(false);

//     const toggleShow = () => setShowShow(!showShow);

//     return (

//     <div className = "form-container">

// <MDBBtn onClick={toggleShow} className="JoinChatButton">Join Chat</MDBBtn>
// <MDBCollapse show={showShow}>
// <Form className="signup-form">
//   <Form.Group>
//   <Form.Control className="image-input" type="img" placeholder="image" name="image" />
//       <Form.Control className="name-input" type="text" placeholder="name" name="name"/>
//       <Form.Control className="description-input" type="text" placeholder="description" name="description" />
//       <Form.Control className="image-input" type="img" placeholder="image" name="image" />
//       <Form.Control className="price-input" type="price" placeholder="price" name="price" />
//       <Button className="submit-button" value="submit" type="submit">submit</Button>
//   </Form.Group>
//   </Form>
// </MDBCollapse>
// </div>

//     );

// }
  







// export default JoinChatButton;
