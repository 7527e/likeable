import React, { useState, useEffect } from "react";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function SetStatus({ isAuth }) {
  const [statusText, setStatusText] = useState("");

  let navigate = useNavigate();

  const setstatus = async () => {
    await setDoc(doc(db, "users", auth.currentUser.uid ), {
      status: statusText,
      name: auth.currentUser.displayName, 
      email: auth.currentUser.email
    },{merge:true});
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="setstatusPage">
      <div className="cpContainer">
        <h1>Add or update status</h1>
        <div className="inputGp">
          <label> Status:</label>
          <textarea
            placeholder="Write here..."
            onChange={(event) => {
              setStatusText(event.target.value);
            }}
          />
        </div>
        <button onClick={setstatus}> Update</button>
      </div>
    </div>
  );
}

export default SetStatus;
