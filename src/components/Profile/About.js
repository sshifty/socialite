import {useState, useEffect} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GetUserStats } from '../hooks';
import { ListenForDocuments } from '../../firebase';
import { useParams } from 'react-router-dom';
import { getAvatar,createPost } from "../../firebase";
import dummy from '../../images/dummy.png';
import PostText from '../PostText';
import Posts from '../Posts';
import AboutInfo from './AboutInfo';




const About=props=>{
    let { id } = useParams();
    const auth=getAuth();
    let tempUser,userInfo,displayUser;
    const [queryResults,setQueryResults]=ListenForDocuments();
    const [currentUser,setCurrentUser]=useState();
    const [avatar,setAvatar]=useState();
    const userStats=GetUserStats();
    
    const {fillAvatar,clearPost,handlePost,postInfo}=props;
    
     useEffect(()=>{        
        onAuthStateChanged(auth, async (user) => {
            if (user) {
              tempUser=user;         
              setCurrentUser(tempUser);
              
            } 
        });
        
    },[]);
    if(queryResults && currentUser){
        getAvatar(id)
        .then(url=>{
            setAvatar(url);
        })    
        queryResults.map(query=>{
          if(query[0].id===currentUser.uid){
            userInfo=query;        
          }
          if(query[0].id === id){
              displayUser=query;
          }
          
        })
      }

      console.log(displayUser)
    
    console.log(userStats)
    if(userInfo && displayUser){
        
        return (
            <div className="about-page">
            <div className="about-header">
                <div className="about-img-container">
                    <img src={avatar?avatar:dummy} alt="" className="avatar" />
                </div>
                <h1 className="about-name">{displayUser[0].data.name}</h1>
            </div>
            <div className="about-main">
                <div className="about-info">
                    <AboutInfo 
                    displayUser={displayUser}
                    currentUser={currentUser}
                    fillAvatar={fillAvatar}
                    />

                </div>
                <div className="about-posts">
                     { currentUser.uid===id?<PostText 
                         clearPost={clearPost}
                         handlePost={handlePost}
                         createPost={createPost}
                         postInfo={postInfo}
                         currentUser={currentUser}
                     />:null}
                    <Posts queryResults={displayUser} />

                </div>
            </div>
            </div>
        );

    }else{
        return (
            <h1>Loading...</h1>
        )
    }
};

export default About;