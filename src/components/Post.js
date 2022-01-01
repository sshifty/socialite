import { getAvatar } from "../firebase";
import dummy from "../images/dummy.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import deleteIcon from '../images/delete.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Post = (props) => {
    let navigate=useNavigate();
  const [avatar, setAvatar] = useState();
  const { name, id, post, date, currentUser } = props;
  
  if (id) {
    getAvatar(id).then((url) => {
      setAvatar(url);
    });
  }
  
  if (currentUser) {
    const delBut = currentUser.uid === id ?
     <button className="btn-del">
       <FontAwesomeIcon icon={faTrash}>

       </FontAwesomeIcon>
     </button> : null;
    if(!post){
      return null;
    }else{
      return (
        <div className="post-card">
          <div className="post-header">
            <div className="user-avatar">
              <div className="post-avatar-container">
                <img
                  src={avatar ? avatar : dummy}
                  alt="avatar pics"
                  className="post-avatar"
                />
              </div>
              <p className="post-name" onClick={()=>navigate(`../${id}`)}>{name}</p>
              
              <p className="date">posted {date}</p>
            </div>
            <div className="delete-btn-container">
              {delBut}
  
            </div>
          </div>
          <div className="post-content">{post}</div>
          
        </div>
      );

    }
  }else {
    return <h1>Loading...</h1>;
  }
};

export default Post;
