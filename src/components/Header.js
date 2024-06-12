import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './../utils/firebase-config';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_CDN } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  
  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName} = user;
            dispatch(addUser({uid:uid, email: email, displayName: displayName}))
            navigate("/browse")
        } else {
            dispatch(removeUser())
            navigate("/")
        }
      });
      return () => unsubscribe
      // unsubscribe when component is unmounts
  },[]);

  const signOutAction = () =>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error - "something went wrong with signout button")
    });
  }
  const handleSearchGpt = () =>{
    dispatch(toggleGptSearchView)
  }

  return (
    <>
      <div className='z-10 absolute w-[100%] flex justify-between items-center container-fluid px-6'>
        <div className=''>
            <img className='w-60' src={LOGO_CDN} alt='logo' />
        </div>
        <div className='d-flex flex-col'>
          {user &&
            <div>
              <button onClick={signOutAction} className='bg-brand-red rounded-full px-5 py-2 text-white'>Sign Out</button>
              
            </div>
          }
          <div><button onClick={handleSearchGpt} className='btn btn-primary'>Search GPT</button></div>
        </div>
      </div>
    </>
    
  )
}

export default Header;