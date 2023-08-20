import React from 'react'
import { signOut } from 'firebase/auth';
import{useNavigate} from 'react-router-dom';
import {auth} from '../../config/Auth-firebase';
import Button from '@mui/material/Button';

export const Logout = () => {


    const navigate = useNavigate(); 

    const logOut =async  () => {
        await signOut(auth);
        window.location.replace('/login');
        
    }
  return (
    <>
    <Button
    type="button" 
    onClick={logOut}
    fullWidth
    variant="contained"
    sx={{ mt: 2, mb: 2 }}
  >
    Log Out
  </Button></>
  )
}
