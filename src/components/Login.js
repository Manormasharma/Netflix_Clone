import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './../utils/firebase-config';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { addUser } from './../utils/userSlice'

const Login = () => {
    const [isSigninForm, setIsSigninForm ] = useState(true)
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [ errorMessage, setErrorMessage ] = useState(null)
    const dispatch = useDispatch();
    const toggleSignIn = () =>{
        setIsSigninForm(!isSigninForm);
    }
    const handleSubmitButton = () => {
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
        if(!isSigninForm){
            // SignUP Form
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name.current.value,
                })
                
            }).then(() => {
                const {uid, email, displayName} = auth.currentUser;    
                dispatch(
                    addUser({
                        uid:uid,
                        email: email, 
                        displayName: displayName
                    })
                )
            })
            .catch((error) => {
                setErrorMessage(error)
            });

        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                setErrorMessage(error.message)
            });
        }
    }
    
  return (
    <>  
        <Header/>
        <div className='flex h-screen items-center justify-center bg-login-bg-banner'>
            <form onSubmit={(e)=> e.preventDefault()} className='p-12 bg-black w-[450px] flex flex-col text-white bg-opacity-90'>
                <h3 className='text-slate-300 mb-5 text-2xl'>{isSigninForm ? "Sign In" : "Sign Up"}</h3>
                {!isSigninForm  && 
                    <input ref={name} type='text' placeholder='Name' className='p-3 mb-3 bg-gray-700' />
                
                }
                <input ref={email} type='text' placeholder='Email Address' className='p-3 mb-3 bg-gray-700' />
                <input ref={password} type='password' placeholder='Password' className='p-3 mb-5 bg-gray-700' />
                <p className='text-slate-300 mb-3'>{errorMessage}</p>
                <button className='p-4 bg-brand-red mb-5' onClick={handleSubmitButton}>{isSigninForm ? "Sign In" : "Sign Up"}</button>
                <div>
                    <p className='text-slate-300' onClick={toggleSignIn} >{isSigninForm ? "New to Netflix? Signup Now" : "Already Registered? Sign in Now"}</p>
                </div>
            </form>
            
        </div>
    </>
    
  )
}

export default Login