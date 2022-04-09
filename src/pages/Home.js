import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
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
        return (
          <div className="status">
            <div className="statusHeader">
              <div className="title">
                <h1> {user.name}</h1>
              </div>
              
            </div>
            <div className="statusTextContainer"> {user.status} </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
