import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc, getDoc, DocumentReference } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import LikeButton from "./LikeButton"
import { useNavigate } from "react-router-dom";

function Home({ isAuth }) {

  let navigate = useNavigate();


  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);


  const [userLists, setUserList] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUserList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="homePage">
      {userLists.map((user) => {
        const userRef = doc(db, "users", user.id);
      
        console.log(userRef);
        return (
          <div className="status">
            <div className="statusHeader">
              <div className="title">
                <h1> {user.name}</h1>
                {user.likeCount || 0}❤

                <LikeButton userRef = {userRef} />
                <br />
              </div>
              
            </div>
            <div className="statusTextContainer"> {user.status} </div>
            <hr />
                <small>
                Contact: {user.email}
                </small>
                <br />
          </div>
          
        );
      })}
    </div>
  );
}

export default Home;
