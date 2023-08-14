import React,{useState} from 'react'
import { signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/Auth-firebase';
import{useNavigate} from 'react-router-dom';
import { Button, TextField, Container, Paper, Typography } from '@mui/material';


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

  return (
    <Container maxWidth="xs" sx={{display: 'flex', alignItems:'center'}}>
      <Paper elevation={5} style={{ padding: '20px' }}>
        <Typography 
          className="test"
          variant="h5"
          sx={{ fontWeight: 800, color: "#212121", textDecoration: 'none',
          display: 'flex',
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%', 
         }}>Iniciar sesión</Typography>
        <form >
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
        <Button variant="contained" color="primary" fullWidth type="button" onClick={logIn}>
          Iniciar sesión
        </Button>
      </form>
    </Paper>
  </Container>
  )
}

