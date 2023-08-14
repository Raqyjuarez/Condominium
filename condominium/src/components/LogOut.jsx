import React from 'react'
import {auth} from '../config/Auth-firebase';
import { signOut } from 'firebase/auth';
import{useNavigate} from 'react-router-dom';

export const LogOut = () => {
    const navigate = useNavigate(); 

    const logOut =async  () => {
        await signOut(auth);
        navigate('/login');
    }
  return (
    <>
    <button onClick={logOut}>LogOut</button>
    </>
  )
}
