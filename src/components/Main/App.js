import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useNavigate,Outlet} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { ListenForDocuments } from "../../firebase";
import Nav from './Nav';


import AppStyle from '../../style/AppStyle.css';

const  App=props=> {  
  const{setAvatar,signInfo}=props;
  const auth = getAuth();
  const [loading,setLoading]=useState(true);  
  const [currentUser,setCurrentUser]=useState();
  let navigate = useNavigate();    
  let tempUser,userInfo;
  const [queryResults,setQueryResults]=ListenForDocuments();


   useEffect(()=>{        
      onAuthStateChanged(auth, async (user) => {
          if (user) {
            tempUser=user; 
            setAvatar(tempUser.uid);                   
            setCurrentUser(tempUser);
            setLoading(false);
          } else {
            navigate('/login');
          };
      });
      
  },[])
  
 

  if(queryResults && currentUser){    
    queryResults.map(query=>{
      if(query[0].id===currentUser.uid){
        userInfo=query;        
      }
      
    })
  }


 if (loading) {
   return <h1>Loading...</h1>
 } else {
   return (
     <div className="App">
       <Nav 
       setAvatar={setAvatar}
       signInfo={signInfo}
       userInfo={userInfo}
       currentUser={currentUser}/>
       <div className="center">
        <Outlet />

       </div>
       
     </div>
   );
 }
}

export default App;

