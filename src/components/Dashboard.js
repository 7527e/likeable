import { signOutHandler } from "../Firebase";
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { getAuth, updateProfile } from "firebase/auth";
import Logout from "./Logout";
import {db} from "../Firebase"

const auth = getAuth();
const user = auth.currentUser;

async function addUserToDB(){
    await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        status: "Hey there! I am using Likeable",
        email: user.email,
        isUserAnon: user.isAnonymous,
        photo: user.photoURL,
    });
}

const Dashboard = () => {

    addUserToDB();
    return ( 
        <div className="Dashboard">
            This is Dashboard
            <br />
            {user.displayName}
        <Logout />         
        </div>
     );
}
 
export default Dashboard;

