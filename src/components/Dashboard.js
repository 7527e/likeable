import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { getAuth, updateProfile } from "firebase/auth";
import Logout from "./Logout";
import {db} from "../Firebase"
import StatusFetcher from "./StatusFetcher";
import Feeds from "./Feeds";

const auth = getAuth();
// user is null for some time, make this thing wait



const Dashboard = () => {
    
    const user = auth.currentUser;
    async function addUserToDB(){
        await setDoc(doc(db, "users", user.uid), {
            name: user.displayName,
            email: user.email,
            isUserAnon: user.isAnonymous,
            photo: user.photoURL,
        },{merge:true});
        console.log("This User is Added to the DB");
    }
    
    addUserToDB();

    return ( 
        <div className="Dashboard">
            This is Dashboard
            <br />
            {user.displayName}
        <Logout />    
        <StatusFetcher />  
        <Feeds />
        </div>
     );
}
 
export default Dashboard;

//add current user to firebase 
// do it only first to first timers
