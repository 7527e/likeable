import { signOutHandler } from "../Firebase";

const Logout = () => {
    return ( 
        <div className="Logout">
            {/* This is Logout */}
            <button class="login-with-google-btn" onClick={signOutHandler}>
                Sign out
            </button>
        </div>
     );
}
 
export default Logout;