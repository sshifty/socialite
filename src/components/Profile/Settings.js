import { createDesc } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import DescText from "../DescText";
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
const Settings = (props) => {
  const { fillAvatar, signInfo, handleDesc, clearDesc } = props;
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState();
  const auth = getAuth();
  const navigate = useNavigate();
  let tempUser;

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        tempUser = user;
        setCurrentUser(tempUser);
        setLoading(false);
      } else {
        navigate("/login");
      }
    });
  }, []);
  if (!loading && currentUser) {
    return (
      <div className="settings">
        <h1 className="settings-name">Settings</h1>
        <h3>Profile Picture</h3>
        <div className="settings-picture">
          <div className="settings-picture-container">
            <img src={signInfo.avatar} alt="" />
          </div>

          <input
            onChange={fillAvatar.bind(this, currentUser.uid)}
            type="file"
          />
        </div>
        <div className="settings-about">
          <h4>About me</h4>
          <DescText
            clearDesc={clearDesc}
            handleDesc={handleDesc}
            createDesc={createDesc}
            currentUser={currentUser}
            signInfo={signInfo}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Loader
          className="settings-loading"
          type="TailSpin"
          color="#00BFFF"
          height={50}
          width={50}
          timeout={3000}
        />
      </div>
    );
  }
};

export default Settings;
