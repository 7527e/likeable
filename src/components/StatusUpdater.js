import {db} from '../Firebase'
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore"; 
import { getAuth, updateProfile } from "firebase/auth";
import { async } from '@firebase/util';
import { useState, useEffect } from 'react';

const auth = getAuth();
const user = auth.currentUser;

//ToDo :
//input field for new status
//update button

//update status

function StatusUpdater(){
    
    const docRef = doc(db, "users", user.uid);

    const [myStatus, setMyStatus] = useState("");
    const sub = async(e) => {

        e.preventDefault();
          
        await updateDoc(docRef, {
            capital: true,
            status: myStatus
          });
    }
   
    
    return ( 
        <div>
            <center>
                <form style={{marginTop:"200px" }}
                  onSubmit={(event) => {sub(event)}}>
            
                    <input type="text" placeholder="Course Enrolled"
                      onChange={(e)=>{setMyStatus(e.target.value)}}/>
                      <br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </center>
        </div>
     );
}
 
export default StatusUpdater;