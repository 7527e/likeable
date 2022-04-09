import {db} from '../Firebase'
import { doc, setDoc, getDoc, updateDoc, getDocs, collection } from "firebase/firestore"; 
import { getAuth, updateProfile } from "firebase/auth";
import { async } from '@firebase/util';
import { useState, useEffect } from 'react';

const auth = getAuth();
const user = auth.currentUser;


function Feeds(){
    
    const [usernames, setUsernames] = useState();

    const fetchStatus = async () => {

        const querySnap = await getDocs(collection(db, "users"));
        
        let arr = [];
        querySnap.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().name);
            arr.push(doc.data().name);
          });
          setUsernames(arr);
    }

    useEffect(() => {
        fetchStatus()
    }, []); 
    
    return ( 
            <div>
                dfd
                <ul>
                {usernames.map(usere => <div key={usere}> <li>{usere}</li>  </div>)} 

                </ul>
            </div>
     );
    }
    
    export default Feeds;