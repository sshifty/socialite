import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from 'react';
import { createPost } from '../../firebase';
import Posts from '../Posts';
import PostText from '../PostText';
import { ListenForDocuments } from "../../firebase";




const  SocialPage=props=> {  
  const{signInfo,clearPost,handlePost,postInfo}=props;
  const auth = getAuth();  
  const [currentUser,setCurrentUser]=useState();
  const [loading,setLoading]=useState(true);      
  let tempUser,userInfo;
  const [queryResults,setQueryResults]=ListenForDocuments();


   useEffect(()=>{        
      onAuthStateChanged(auth, async (user) => {
          if (user) {
            tempUser=user;         
            setCurrentUser(tempUser);    
            setLoading(false);        
          }
      });      
  },[])
  
 
  if(queryResults && currentUser){ 
    console.log("social",queryResults)
    queryResults.map(query=>{
      if(query[0].id===currentUser.uid){
        userInfo=query;     
           
      }
      
    })
  }





    if(loading){
        return <h1>Loading...</h1>
    }
    else{
        return (   
          
            <div className="social-page">
                <PostText  
                    handlePost={handlePost}
                    createPost={createPost} 
                    currentUser={currentUser}
                    postInfo={postInfo}
                    clearPost={clearPost}
                    
                    />
              
              <Posts 
                signInfo={signInfo}
                queryResults={queryResults}
              />
            </div>
         
        );

    }
 }


export default SocialPage;
