import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from './../utils/firebase-config';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName} = user;
            dispatch(addUser({uid:uid, email: email, displayName: displayName}))
            navigate("/browse")
        } else {
            dispatch(removeUser())
            navigate("/")
        }
      });
  },[]);
  const signOutAction = () =>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error - "something went wrong with signout button")
    });
  }
  return (
    <>
      <div className='absolute w-[100%] flex justify-between items-center container-fluid px-6'>
        <div className=''>
            <img className='w-60' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
        </div>
        {user &&
          <div>
            <button onClick={signOutAction} className='bg-brand-red rounded-full px-5 py-2 text-white'>Sign Out</button>
          </div>
        }
      </div>
    </>
    
  )
}

export default Header;