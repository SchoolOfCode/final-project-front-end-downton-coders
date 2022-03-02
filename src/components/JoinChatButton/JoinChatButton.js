import React, { useState } from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./JoinChatButton.module.css";



function JoinChatButton() {
    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);


    function openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }


    return (


<section id="chat-container" className={styles["chat-container"]}>
<button className={styles["open-button"]} onClick={openForm}>Chat</button>
<div className={styles["chat-popup"]} id="myForm">
  <form action="/action_page.php" className={styles["form-container"]}>
    <h1>Chat</h1>

    <label for="msg"><b>Message</b></label>
    <textarea placeholder="Type message.." name="message" required></textarea>

    <button type="submit" className={styles.btn}>Send</button>
    <button type="button" className={styles.cancelButton} onClick={closeForm}>Close</button>
  </form>
</div>
</section>
    );
}
  
export default JoinChatButton;
