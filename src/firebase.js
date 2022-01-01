// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {useState,useEffect} from 'react';
import {getDocs, query, getFirestore , collection, onSnapshot,doc,setDoc,updateDoc,arrayUnion, orderBy} from "firebase/firestore"
import { getDownloadURL, getStorage, ref, uploadBytesResumable , uploadBytes} from "firebase/storage";


import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqwurAoUtTmnIn_PhuZrZ5Z_1Ih647Nc0",
  authDomain: "socialite-adbf5.firebaseapp.com",
  projectId: "socialite-adbf5",
  storageBucket: "socialite-adbf5.appspot.com",
  messagingSenderId: "17842913995",
  appId: "1:17842913995:web:70a4c7963d399447b7d14e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth();
const db = getFirestore();
const storage=getStorage();
export const logInFunc=(email,password)=>{    
    return signInWithEmailAndPassword(auth ,email,password);
}

export const signUpFunc=async (name,username,email,password)=>{    
  let {user}= await createUserWithEmailAndPassword(auth ,email,password);
  const userColl=doc(db,`users/${user.uid}`);
        const data={
            name,
            username,
            posts:[
              {
              }
            ],
            desc:{
              text:''
            },
            email:user.email,                
        };
  await setDoc(userColl,data);
  return user;
}

export const createPost = async (userID,text,clearPost)=>{
  const dt=Date.now();
  const now=new Date().toLocaleDateString();
  const userColl=doc(db,`users/${userID}`);
  await updateDoc(userColl, {
    posts: arrayUnion({post:text,date:now,dt:dt})
});
  clearPost();
}

export const createDesc = async (userID,text,clearDesc)=>{
  const dt=Date.now();
  const now=new Date().toLocaleDateString();
  const userColl=doc(db,`users/${userID}`);
  await updateDoc(userColl, {
    desc: {
      text:text,
      date:now
    }
});
  clearDesc();
};


export const useAuth=()=>{
  const [currentUser,setCurrentUser]=useState();
  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      const unsub=setCurrentUser(user);
      return unsub;
    })
  },[])
  return currentUser;
}

export const logOut=()=>{
  return signOut(auth);
}



export const ListenForDocuments = () => {
  const [queryResults, setQueryResults] = useState(null);
  let unsubscribe;

  const loadAllDocuments = () => {
    const q = query(collection(db, "users"));
    unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push([
          {
            id: doc.id,
            data: doc.data(),
          },
        ]);
      });
      setQueryResults(users);
    });
  };

  useEffect(() => {
    loadAllDocuments();
    return () => {
      unsubscribe();
    };
  }, []);
  return [queryResults, setQueryResults];
};


export const uploadFiles=(file,id)=>{
 if(!file) return;

console.log(file)
const metadata={
  contentType: file.type
}
 const storageRef=ref(storage,`files/${id}`);
 const uploadTask=uploadBytesResumable(storageRef,file);

uploadBytes(storageRef, file,metadata).then((snapshot) => {
  console.log('Uploaded a blob or file!',snapshot);
});
}

export const getAvatar=async id=>{
  const pathRef=ref(storage,`files/${id}`);
  const avatarUrl=await getDownloadURL(pathRef)
 
  
  
  return avatarUrl;
}