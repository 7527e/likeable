import {db} from '../Firebase'
import { doc, setDoc, getDoc } from "firebase/firestore"; 
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
    
    const [myStatus, setMyStatus] = useState("loading");

    const fetchStatus = async () => {

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            console.log(docSnap.data().status);
            const sts = docSnap.data().status;
            setMyStatus(sts);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            const sts = "No status";
            setMyStatus(sts);
        }
    }

    useEffect(() => {
        fetchStatus()
    }, []); 
    
    return ( 
        <div>
            Your currenth status <br />
                {myStatus}
        </div>
     );
}
 
export default StatusUpdater;