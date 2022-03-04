import styles from "./userCreateEvent.module.css"
import CreateHeader from "./userCreateHeader/createheader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faXmark,faPencil } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react"

function UserCreateEvent({DummyData}){
    // form placeHolder value
    const [location, setLocation]=useState("");
    const [date, setDate]=useState("");
    const [desc, setDesc]=useState("");
    const [image, setImage]=useState("");
    const [category, setCategory]=useState("");
    const [price, setPrice] = useState("");


    //when click edit button lets populate the button
    function populateEditForm(input){
        setLocation(input.location)
        setDate(input.date)
        setDesc(input.description)
        setImage(input.image)
        setCategory(input.categories)
        setPrice(input.price)
    }

    function populateClearForm(){
        setLocation("")
        setDate("")
        setDesc("")
        setImage("")
        setCategory("")
        setPrice("")
    }

    //delete function is not yet been implemented
    function deleteData(){
        console.log("delete this one")
    }
    return(<>
        <div className={styles.UserContainerEvent}>
            <div className={styles.userCreateContainer}>
                {/* This is for event you host section */}
                <CreateHeader Title={"Event You Host"}/>
                <div className={styles.tileMain}>
                    {/* This is for tile its here because we need to be able to transfer data from button click edit to populate the form */}
                    {DummyData.map((input)=>{ return(
                    <div className={styles.tileContainer} key={input.id}>
                        <div className={styles.tileContainerMain}>
                            <p className={styles.tileTitleNDate}>{input.title}</p>
                            <p className={styles.tileTitleNDate}>{input.date}</p>
                            <p className={styles.tileNumberGoing}>{input.id}</p>
                            <div className={styles.buttonContainer}>  
                                <button className={styles.buttonStyle} onClick={()=>{populateEditForm(input)}}>
                                    <FontAwesomeIcon icon={faPencil} className={styles.editBtn}/>
                                </button>
                                <button className={styles.buttonStyle} onClick={()=>{deleteData()}}>
                                    <FontAwesomeIcon icon={faXmark} className={styles.deleteBtn}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    )})}
                </div>
                {/* This is end of event you host section */}
                <CreateHeader Title={"Edit Your Event"}/>
                {/*  form  */}
                <div className={styles.formContainer}>
                    <form className={styles.formStyle}>
                        <div className={styles.formStyleDateNLocation}>
                            <input type="text" name="" id="" placeholder="Location" required onChange={(e)=> setLocation(e.target.value) } value={location}/>

                            <input type="text" name="" id="" placeholder="Date" required onChange={(e)=> setDate(e.target.value) } value={date}/>
                        </div>

                        <input type="text" name="" id="" placeholder="Description" required onChange={(e)=> setDesc(e.target.value) } value={desc}/>

                        <input type="text" name="" id="" placeholder="image" required onChange={(e)=> setImage(e.target.value) } value={image}/>

                        <input type="text" name="" id="" placeholder="category" required onChange={(e)=> setCategory(e.target.value) } value={category}/>

                        <div className={styles.formStylePriceNSubmit}>
                            <input type="text" name="" id="" placeholder="Price" required onChange={(e)=> setPrice(e.target.value) } value={price}/>

                            <input type="submit" className={styles.formSubmitBtn}/>
                           
                            <input type="button" className={styles.formClearBtn} value="Clear" onClick={(e)=>{populateClearForm()}}/>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </>)
}

export default UserCreateEvent