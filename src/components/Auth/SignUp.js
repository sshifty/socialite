import formstyle from '../../style/formstyle.css';
import {useRef,useEffect,useState} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import { signUpFunc } from '../../firebase';
import dummy from '../../images/dummy.png';




const SignUp=props=>{

    const [loading, setLoading] =useState(true);
    
    let navigate = useNavigate();

    const nameRef=useRef();
    const nameError=useRef();
    const userRef=useRef();
    const userError=useRef();
    const emailRef=useRef("");
    const emailError=useRef();
    const passwordRef=useRef("");
    const passwordError=useRef();
    const confirmRef=useRef();
    const confirmError=useRef();
    const formRef=useRef("");
    const auth=getAuth();
    const {setSignInfo,signInfo,handleName,handleEmail,handlePassword,handleUser,handleConfirm}=props;
    
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
  
    const handleSignUp= async(e)=>{
        setLoading(true);
        e.preventDefault();
        try{
            
             await signUpFunc(signInfo.name,signInfo.user,signInfo.email,signInfo.password);        
             setSignInfo(prevState=>{
                 return {
                     ...prevState,
                     avatar:dummy
                 }
             })  
             navigate('/');
             
             
        }catch(err){
           alert("errorxd",err)
           setLoading(false);
           
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

        if(nameRef.current.validity.valueMissing){
            nameError.current.textContent="Cannot be empty";
        }else if(nameRef.current.validity.tooShort){
            
            nameError.current.textContent="To short";
        }else if(nameRef.current.validity.tooLong){
            nameError.current.textContent="To long";
        }else if(nameRef.current.validity.typeMismatch){
            nameError.current.textContent="Enter an name";

        }else{
            
            nameError.current.textContent="";
        }

        if(userRef.current.validity.valueMissing){
            userError.current.textContent="Cannot be empty";
        }else if(userRef.current.validity.tooShort){
            
            userError.current.textContent="To short";
        }else if(userRef.current.validity.tooLong){
            userError.current.textContent="To long";
        }else if(userRef.current.validity.typeMismatch){
            userError.current.textContent="Enter an user";

        }else{
            
            userError.current.textContent="";
        }

        if(passwordRef.current.validity.valueMissing){
            passwordError.current.textContent="Cannot be empty";
        }else if(passwordRef.current.validity.tooShort){
            
            passwordError.current.textContent="To short";
        }else if(passwordRef.current.validity.tooLong){
            passwordError.current.textContent="To long";
        }else if(passwordRef.current.validity.typeMismatch){
            passwordError.current.textContent="Enter an password";

        }else{
            
            passwordError.current.textContent="";
        }
        
        
        if(confirmRef.current.validity.valueMissing){
            confirmError.current.textContent="Cannot be empty";
        }else if(confirmRef.current.validity.tooShort){
            
            confirmError.current.textContent="Too short";
        }else if(confirmRef.current.validity.tooLong){
            confirmError.current.textContent="Too long";
        }else if(confirmRef.current.validity.typeMismatch){
            confirmError.current.textContent="Enter an confirm";

        }else if(confirmRef.current.value!== passwordRef.current.value){
            e.target.setCustomValidity("Password must match");
            confirmError.current.textContent="Password must match";

        }else{
            confirmError.current.textContent="";

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
                <form  ref={formRef} onSubmit={handleSignUp} className="form-container">
                    <h1 className="app-name">Socialite</h1>
                    <div className="input-wrapper">
                        <label htmlFor="signUp-fullName">Full Name</label>
                        <input ref={nameRef} onChange={handleName} type="text" minLength={2} maxLength={30} name="name" id="signUp-fullName" required />
                        <span ref={nameError} className='error span-error'></span>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="signUp-userName">User Name</label>
                        <input ref={userRef} onChange={handleUser}  minLength={2} maxLength={20} type="text" name="user" id="signUp-userName" required/>
                        <span ref={userError} className='error span-username'></span>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="signUp-email">Email</label>
                        <input ref={emailRef} onChange={handleEmail} minLength={7} maxLength={30} type="email" name="email" id="signUp-email" required/>
                        <span ref={emailError} className='error span-email'></span>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="signUp-password">Password</label>
                        <input ref={passwordRef} onChange={handlePassword} minLength={6} maxLength={20}  type="password" name="password" id="signUp-password" required/>
                        <span ref={passwordError} className='error span-password'></span>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="signUp-confirm">Confirm Password</label>
                        <input ref={confirmRef} onChange={handleConfirm} minLength={6} maxLength={20} type="password" name="confirm" id="signUp-confirm" required/>
                        <span ref={confirmError} className='error span-confirm'></span>
                    </div>
                    <div className="button-flex-container">
                        <button className='btn btn-signup' disabled={loading} type="submit">Sign Up</button>
                        <button className='btn btn-submit' onClick={()=>navigate('../login')} disabled={loading} type="submit">Back To Login</button>
    
                    </div>
                </form>
            </div>
        );

    }
   

    
};

export default SignUp;