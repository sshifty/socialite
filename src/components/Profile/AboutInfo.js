import { useNavigate } from "react-router-dom";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

const AboutInfo = (props) => {
  let navigate = useNavigate();
  const { displayUser, currentUser } = props;
  const LoaderTemp = (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
  if (currentUser && displayUser) {
    const date = currentUser.auth.currentUser.metadata.createdAt;

    const editButton =
      displayUser[0].id === currentUser.uid ? (
        <div className="btn-edit-container">
          <button
            onClick={() => {
              navigate("../settings");
            }}
            className="btn-edit"
          >
            <FontAwesomeIcon icon={faUserEdit} />
          </button>
        </div>
      ) : null;
    const signInTime = new Date(date * 1).toLocaleDateString();
    return (
      <div className="info">
        <div className="info-header">
          <h3>About Me</h3>
          {editButton}
        </div>
        <div className="info-description">{displayUser[0].data.desc.text}</div>
        <div className="line-break"></div>
        <p className="created-p">Created on: {signInTime}</p>
      </div>
    );
  } else {
    return LoaderTemp;
  }
};

export default AboutInfo;
