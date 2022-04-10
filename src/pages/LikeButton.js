import {auth, db} from '../firebase-config'
import { setDoc } from 'firebase/firestore';
import { doc, getDoc, increment, updateDoc, deleteDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';

const Like= ({userRef}) => {
    const [liked, setLiked] = useState(false);
    const likeRef = doc(userRef, "likes", auth.currentUser.uid);

    const fetchStatus = async () => {

        const docSnap = await getDoc(likeRef);
            
        if (docSnap.exists()) {
            setLiked(true);
        } else {
            setLiked(false);
            // doc.data() will be undefined in this case
        }
    }

    

    const addLike = async () => {

        await setDoc(doc(userRef, "likes", auth.currentUser.uid), {
            testimony: "I like this"
          });
          
        await updateDoc(userRef, {
            likeCount: increment(1)
        });

        setLiked(true);
    };

    const removeLike = async () => {

        await deleteDoc(doc(userRef, "likes", auth.currentUser.uid));
        await updateDoc(userRef, {
            likeCount: increment(-1)
        });

        setLiked(false);

        
    };

    useEffect(()=>{
        fetchStatus();
    }, [liked]);

    return liked ? ( 
        <button onClick={removeLike}>Unlike </button>
     ) : (
        <button onClick={addLike}>👍Like</button>
     );
}
 
export default Like