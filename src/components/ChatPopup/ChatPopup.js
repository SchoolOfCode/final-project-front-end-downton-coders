import React, { useState } from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./ChatPopup.module.css";



function JoinChatButton({ onMessageSubmit, onTextChange, renderChat, chatUser }) {

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
        <form onSubmit={onMessageSubmit} className={styles["form-container"]}>
          <h1>Chat</h1>
          <div className="name-field">
					<input type="text" name="name" onChange={(e) => onTextChange(e)} value={chatUser.name} placeholder="Enter your name" className={styles.nameInput} label="Name" />
				</div>
          <label for="msg"><b>Message</b></label>
          <textarea placeholder="Type message..." name="message" onChange={(e) => onTextChange(e)} value={chatUser.message} label="Message" required></textarea>

          <button className={styles.btn}>Send</button>
          <button type="button" className={styles.cancelButton} onClick={closeForm}>Close</button>
        </form>
      </div>
    </section>
  );
}

export default JoinChatButton;
