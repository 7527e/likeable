import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { getAuth, updateProfile } from "firebase/auth";
import Logout from "./Logout";
import {db} from "../Firebase"
import StatusFetcher from "./StatusFetcher";
import StatusUpdater from "./StatusUpdater";
// import Status from "./Status";

const auth = getAuth();
const user = auth.currentUser;


async function addUserToDB(){
    await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        isUserAnon: user.isAnonymous,
        photo: user.photoURL,
    });
    console.log("This User is Added to the DB");
}

const Dashboard = () => {

    addUserToDB();

    return ( 
        <div className="Dashboard">
            This is Dashboard
            <br />
            {user.displayName}
        <Logout />    
        <StatusFetcher />   
        </div>
     );
}
 
export default Dashboard;

//add current user to firebase 
// do it only first to first timers
