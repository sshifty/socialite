import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useRef,useEffect,useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { logInFunc } from '../../firebase';



const Login=props=>{
    
   
    const {handleEmail,handlePassword,signInfo}=props;
    const emailRef=useRef();
    const emailError=useRef();
    const passwordRef=useRef();
    const passwordError=useRef();
    const formRef=useRef();
    let navigate = useNavigate();
    const auth=getAuth();
   
    const [loading,setLoading]=useState(true);
    useEffect(()=>{        
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              
              navigate('/');
              // ...
            } else {
              setLoading(false);
              
            }
        });
    },[])

  
    const handleLogin=async e=>{
        e.preventDefault();
        try{
            await logInFunc(signInfo.email,signInfo.password);
            navigate('/');

        }catch(err){
           
            console.log(err)
            alert("Could not login")
        }
    }




    const showError=(e)=>{
        
        
        if(emailRef.current.validity.valueMissing){
            emailError.current.textContent="Cannot be empty";
        }else if(emailRef.current.validity.tooShort){
            e.target.setCustomValidity("email must be valid");
            emailError.current.textContent="Email must be valid";
        }else if(emailRef.current.validity.tooLong){
            emailError.current.textContent="To long";
        }else if(emailRef.current.validity.typeMismatch){
            emailError.current.textContent="Enter an email";

        }else{
            e.target.setCustomValidity("");
            emailError.current.textContent="";
        }

       
    }
    
        useEffect(()=>{
            if(!loading){
                const cleanIt=formRef.current;
                formRef.current.addEventListener("input",e=>{            
                        showError(e);            
                 });

                 return ()=>{
                     
                     cleanIt.removeEventListener("input",e=>{
                         showError(e);
                     })
                 }
            }
            
            
        })

    
    if(loading){
        return <h1>Loading...</h1>
    }else{
        return(
            
            <div className="form-page">
                <form  onSubmit={handleLogin} ref={formRef} className="form-container login">                
                    <h1 className="app-name">Socialite</h1>
                    <div className="input-wrapper">
                        <label htmlFor="login-email">Email</label>
                        <input onChange={handleEmail} ref={emailRef} minLength={7} maxLength={30} type="email" name="email" id="login-email" placeholder="Type your email" required/>
                        <span ref={emailError} className='error span-email'></span>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="login-password">Password</label>
                        <input onChange={handlePassword} ref={passwordRef} minLength={6} maxLength={20}  type="password" name="password" id="login-password" placeholder="Type your password" required/>
                        <span ref={passwordError} className='error span-password'></span>
                    </div>
                    <div className="button-flex-container">
                        <div className="btn-div">
                            <button  type="submit"  className='btn btn-submit' type="submit">Login</button>
                            
                        </div>
                        <div className="btn-div">
                            <Link to="../signup">
                                <button className='btn btn-signup'>Sign up</button>                            
                            </Link>
                        </div>

                    </div>
                </form>
            </div>
        );
        
    }
};

export default Login;