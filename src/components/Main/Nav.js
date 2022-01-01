import dummy from '../../images/dummy.png'
import nav from '../../style/nav.css';
import { Link } from 'react-router-dom';
import { logOut } from '../../firebase';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Nav = props=>{
    const {setAvatar,signInfo,userInfo}=props;
    let name,id;
    if(!userInfo){
        name='';
        id='';
    }else{
        name=userInfo[0].data.name;
        id=userInfo[0].id
    };

    const handleLogOut= async()=>{
        try{
          await logOut();    
        }catch{
          alert("ERROR LOGGING OUT")
        }
      }
    
    return(
        <nav className="navbar">
            <div className="nav-container">
                <Link className='app-logo' to="">
                 <h1 >Socialite</h1>
                </Link>
                <div className="nav-right">
                    <div className="avatar-container container">
                        <img src={signInfo.avatar?signInfo.avatar:dummy} alt="" />
                    </div>
                    <Link className="username" to={id}>
                        <div >{name}</div>

                    </Link>                    
                    <div className="settings-container container">
                        <button onClick={handleLogOut} className="btn-settings ">
                            <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
                         </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;