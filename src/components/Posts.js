import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import Post from "./Post";
const Posts = (props) => {
  const { queryResults } = props;
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState();
  let tempUser;
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        tempUser = user;
        setCurrentUser(tempUser);
      } else {
      }
    });
  }, []);

  let tempPosts = [];
  let temp = [];
  let sortedPost;

  if (queryResults) {
    tempPosts = JSON.parse(JSON.stringify(queryResults));
    tempPosts.map((item) => {
      if (!item[0]) {
        item.data.posts.map((post) => {
          temp.push({
            name: item.data.name,
            id: item.id,
            date: post.date,
            dt: post.dt,
            post: post.post,
          });
        });
      } else {
        item[0].data.posts.map((post) => {
          temp.push({
            name: item[0].data.name,
            id: item[0].id,
            date: post.date,
            dt: post.dt,
            post: post.post,
          });
        });
      }
    });
    sortedPost = temp.sort((prev, curr) => {
      return prev.dt >= curr.dt ? -1 : 1;
    });

    return (
      <div className="posts-container">
        {sortedPost.map((post) => (
          <Post
            key={uuidv4()}
            name={post.name}
            id={post.id}
            post={post.post}
            date={post.date}
            currentUser={currentUser}
          />
        ))}
        {/* {queryResults.map((query) => {
                
              return query[0].data.posts.map((post) => {
                return <Post 
                    data={query[0].data}
                    id={query[0].id}
                    post={post}
                    currentUser={currentUser}
                />
              });
            })} */}
      </div>
    );
  } else {
    return <h1>Something happened</h1>;
  }
};

export default Posts;
