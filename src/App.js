import './App.css';
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { useAuthState } from 'react-firebase-hooks/auth';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

import {auth} from './Firebase'

// const auth = firebase.auth();
// const firestore = firebase.firestore();


function App(){
  
  const [user] = useAuthState(auth);

  return (  
    <div> 
      {user ? <Dashboard /> : <Login />}
    </div>
   );
}
 
export default App;