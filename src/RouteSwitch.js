import { HashRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import App from "./components/Main/App";
import About from "./components/Profile/About";
import SocialPage from "./components/Main/SocialPage";
import Settings from "./components/Profile/Settings";

import { useState } from "react";
import { uploadFiles, getAvatar } from "./firebase";
import dummy from "./images/dummy.png";

const RouteSwitch = (props) => {
  const [signInfo, setSignInfo] = useState({});
  const [postInfo, setPostInfo] = useState({});
  const [currentUser, setCurrentUser] = useState();

  const fillAvatar = (id, e) => {
    setSignInfo((prevState) => {
      let av = e.target.files[0];
      uploadFiles(av, id);
      return { ...prevState, avatar: URL.createObjectURL(av) };
    });
  };

  const setAvatar = async (id) => {
    const tempAv = await getAvatar(id);
    if (tempAv) {
      setSignInfo((prevState) => {
        return {
          ...prevState,
          avatar: tempAv,
        };
      });
    } else {
      setSignInfo((prevState) => {
        return {
          ...prevState,
          avatar: dummy,
        };
      });
    }
  };
  const clearPost = () => {
    setPostInfo((prevState) => {
      return {
        ...prevState,
        post: "",
      };
    });
  };
  const handleDesc = (e) => {
    setSignInfo((prevState) => {
      return {
        ...prevState,
        desc: e.target.value,
      };
    });
  };

  const clearDesc = (e) => {
    setSignInfo((prevState) => {
      return {
        ...prevState,
        desc: "",
      };
    });
  };
  const handleName = (e) => {
    setSignInfo((prevState) => {
      return {
        ...prevState,
        name: e.target.value,
      };
    });
  };
  const handlePost = (e) => {
    setPostInfo((prevState) => {
      return { ...prevState, post: e.target.value };
    });
  };
  const handleEmail = (e) => {
    setSignInfo((prevState) => {
      return {
        ...prevState,
        email: e.target.value,
      };
    });
  };
  const handlePassword = (e) => {
    setSignInfo((prevState) => {
      return {
        ...prevState,
        password: e.target.value,
      };
    });
  };

  const handleConfirm = (e) => {
    setSignInfo((prevState) => {
      return {
        ...prevState,
        confirm: e.target.value,
      };
    });
  };

  const handleUser = (e) => {
    setSignInfo((prevState) => {
      return {
        ...prevState,
        user: e.target.value,
      };
    });
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <App
              signInfo={signInfo}
              postInfo={postInfo}
              handlePost={handlePost}
              setAvatar={setAvatar}
            />
          }
        >
          <Route
            path=""
            element={
              <SocialPage
                clearPost={clearPost}
                postInfo={postInfo}
                signInfo={signInfo}
                handlePost={handlePost}
              />
            }
          />
          <Route
            path=":id"
            element={
              <About
                fillAvatar={fillAvatar}
                clearPost={clearPost}
                handlePost={handlePost}
                postInfo={postInfo}
              />
            }
          />
          <Route
            path="settings"
            element={
              <Settings
                signInfo={signInfo}
                handleDesc={handleDesc}
                clearDesc={clearDesc}
                currentUser={currentUser}
                fillAvatar={fillAvatar}
              />
            }
          />
        </Route>
        <Route
          path="signup"
          element={
            <SignUp
              signInfo={signInfo}
              handleName={handleName}
              handleEmail={handleEmail}
              handlePassword={handlePassword}
              handleConfirm={handleConfirm}
              handleUser={handleUser}
              setSignInfo={setSignInfo}
            />
          }
        />
        <Route
          path="login"
          element={
            <Login
              signInfo={signInfo}
              handleEmail={handleEmail}
              handlePassword={handlePassword}
            />
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
