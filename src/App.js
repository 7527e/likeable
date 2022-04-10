import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SetStatus from "./pages/SetStatus";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      window.location.pathname = "/login";
      localStorage.clear();
      setIsAuth(false);
    });
  };

  return (
    <Router>
      <nav>
        <h1 style={{color: "red", padding: "40px"}}>
        Likable
        </h1>
        
       

        {!isAuth ? (
          <Link to="/login" style={{padding: "40px"}}> Login </Link>
        ) : (
          <>
             <Link to="/"> Home </Link>
            <Link to="/setstatus" style={{padding: "40px"}}> Set your status </Link>
            <button className="logout-with-google-btn" onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/setstatus" element={<SetStatus isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />

      </Routes>
    </Router>
  );
}

export default App;
