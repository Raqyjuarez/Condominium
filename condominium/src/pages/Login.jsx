import React,{useState} from 'react'
import { signInWithEmailAndPassword, sendPasswordResetEmail} from 'firebase/auth';
import {auth} from '../config/Auth-firebase';
import{useNavigate} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



export default function Login() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate =useNavigate();
    


    const logIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth,email,pass);
            console.log(user);
            navigate('/home');

        } catch (error) {
            console.log(error.message);
        }
    }

    const resetPass = async () =>{
      try{
        await sendPasswordResetEmail(auth, email);
        console.log('Correo electrónico de recuperación de contraseña enviado');
    } catch (error) {
      alert("Antes de darle click en el boton, ingrese su correo.")
      console.log(error.message);
    }
    }

  

return (
  
    <Container component="main" maxWidth="xs" sx={{display: 'flex', alignItems:'center'}}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>
        <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
          
          <Button
            type="button" 
            onClick={logIn}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          
          <Link
            component="button"
            variant="body2"
            onClick={resetPass}
            sx={{ mt: 1, mb: 2, textDecoration: 'underline', cursor: 'pointer' }}
>
              Olvidó la contraseña?
          </Link>
          
        </Box>
      </Box>
      
    </Container>
  
);
}