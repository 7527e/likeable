import '../App.css';
import { signInWithGoogle } from "../Firebase";

function Login() {
  return (
    <div className="Login">
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
