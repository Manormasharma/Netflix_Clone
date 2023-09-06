import React, { useState } from 'react'

const Login = () => {
    const [isSigninForm, setIsSigninForm ] = useState(true)

    const toggleSignIn = () =>{
        setIsSigninForm(!isSigninForm);
    }
    
  return (
    <>
        <div className='flex h-screen items-center justify-center bg-login-bg-banner'>
            <form className='p-12 bg-black h-[500px] w-[450px] flex flex-col text-white bg-opacity-90'>
                <h3 className='text-slate-300 mb-5 text-2xl'>{isSigninForm ? "Sign In" : "Sign Up"}</h3>
                {!isSigninForm  && 
                    <input type='text' placeholder='Name' className='p-3 mb-3 bg-gray-700' />
                
                }
                <input type='text' placeholder='Email Address' className='p-3 mb-3 bg-gray-700' />
                <input type='password' placeholder='Password' className='p-3 mb-5 bg-gray-700' />
                <button className='p-4 bg-brand-red mb-5'>{isSigninForm ? "Sign In" : "Sign Up"}</button>
                <div className='flex justify-between mb-10'>
                {isSigninForm  &&
                    <div>
                        <input type='checkbox' className='mr-2'/>
                        <label className='text-slate-300'>Remember me?</label>
                    </div>
                }
                    <div>
                        <p className='text-slate-300'>Need Help?</p>
                    </div>
                </div>
                <div>
                    <p className='text-slate-300' onClick={toggleSignIn}>{isSigninForm ? "New to Netflix? Signup Now" : "Already Registered? Sign in Now"}</p>
                </div>
            </form>
            
        </div>
    </>
    
  )
}

export default Login