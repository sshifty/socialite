import { createPost } from "../firebase";


const PostText =props=>{
    const {clearPost,handlePost,createPost,currentUser,postInfo}=props;
    return (
        <div className="post-textarea">
            <textarea  value={postInfo.post} className="textarea-style" onChange={handlePost} name="" id=""  placeholder="Make A post">
            </textarea>
            <div className="btn-post-container">
                <button onClick={createPost.bind(this,currentUser.uid,postInfo.post,clearPost)} className="btn btn-post">Post</button>
            </div>
            
        </div>
    )
}

export default PostText;