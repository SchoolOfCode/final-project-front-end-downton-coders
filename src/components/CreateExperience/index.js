import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./createExperience.module.css"

function CreateExperience() {
  return (
    <div className={styles.container}>

        <div className={styles.leftImage}>
            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80" alt="people" className={styles.formImage}></img>
        </div>

        <div className={styles.rightForm}>
            <div className={styles.mainContainer}>

           <div className={styles.card}>
           <h2>Create Your Xpeerience!</h2>
                <div className ={styles.createExperienceImage}>
                    <fieldset><input type="file" className={styles.formImageFile} ></input></fieldset>
                </div>
               <fieldset> 
                 <div className="mt-3 inputbox">
                   <input type="text" className="form-control" name="" placeholder="Title"></input>
                   <div className= "locaton-date-flex">
                     <input type="text" className="form-control" name="" placeholder="Location"></input>
                     <input type="text" className="form-control"  name="" placeholder="Date / Time"></input>
                   </div>
                   <input type="text" className="form-control" name="" placeholder="Description"></input>
                   <input type="text" className="form-control" name="" placeholder="price"></input>
                   <div className="mt-2"> <button class="btn btn-primary btn-block" className={styles.button}>submit</button> </div> 
                 </div> 
               </fieldset>

        
           </div>
           </div>
        </div>
    </div>
  )
}

export default CreateExperience
