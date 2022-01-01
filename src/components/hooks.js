import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { ListenForDocuments } from "../firebase";

export const GetUserStats = () => {
  let userStats;

  const auth = getAuth();
  let tempUser;
  const [currentUser, setCurrentUser] = useState();
  const [queryResults, setQueryResults] = ListenForDocuments();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        tempUser = user;
        setCurrentUser(tempUser);
      }
    });
  }, []);
  if (queryResults && currentUser) {
    queryResults.map((query) => {
      if (query[0].id === currentUser.uid) {
        userStats = query;
      }
    });
  }
  return userStats;
};
