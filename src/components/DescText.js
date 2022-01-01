import { createPost } from "../firebase";
import AppStyle from '../style/AppStyle.css';

const DescText =props=>{
    const {clearDesc,handleDesc,createDesc,currentUser,signInfo}=props;
    
    if(currentUser){
        return (
            <div className="post-textarea">
                <textarea  id="about-textarea" value={signInfo.desc}  onChange={handleDesc} name="" id=""  placeholder="Share something about yourself!:)">
                </textarea>
                <div className="btn-post-container">
                    <button  className="btn" onClick={createDesc.bind(this,currentUser.uid,signInfo.desc,clearDesc)} >Post</button>
                </div>
                
            </div>
        )

    }else{
        return <h1>Loading...</h1>
    }
}

export default DescText;