import {db} from '../Firebase'
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore"; 
import { getAuth, updateProfile } from "firebase/auth";
import { async } from '@firebase/util';
import { useState, useEffect } from 'react';

const auth = getAuth();
const user = auth.currentUser;

function StatusFetcher(){
    
    const [myStatus, setMyStatus] = useState("loading");
    const [myLikes, setmyLikes] = useState("loading");

    const fetchStatus = async () => {

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            console.log(docSnap.data().status);
            const sts = docSnap.data().status;
            const lks = docSnap.data().likes;
            setMyStatus(sts);
            setmyLikes(lks);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            const sts = "No status";
            setMyStatus(sts);
        }
    }

    const docRef = doc(db, "users", user.uid);

    const [NewStatus, setNewStatus] = useState("");
    const sub = async(e) => {

        e.preventDefault();
        
        await updateDoc(docRef, {
            capital: true,
            status: NewStatus
          });
        console.log("Status updated");
        setMyStatus(NewStatus);
    }

    useEffect(() => {
        fetchStatus()
    }, []); 
    
    return ( 
        <div>
            Your current status <br />
                {myStatus}
                <br />
            Likes: <br />
            {myLikes}
        
                <form style={{marginTop:"20px" }}
                  onSubmit={(event) => {sub(event)}}>
            
                    <input type="text" placeholder="Enter new status"
                      onChange={(e)=>{setNewStatus(e.target.value)}}/>
                      <br/><br/>
                    <button type="submit">Update status</button>
                </form>
            
        </div>
     );
    }
    
    export default StatusFetcher;