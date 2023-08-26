import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../app/userSlice";
import { allowAccess, setActual } from "../app/actualSlice";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const logData = useSelector((state) => state.user.usersArray);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSignIn = () => {
    const foundUser = logData.find((userData) => userData.user.username === user && userData.user.password === pass);
    console.log(foundUser);
    if (foundUser) {
      dispatch(setActual(foundUser));
      dispatch(allowAccess());
      navigate("/Home");
    } else {
     alert("Credenciales incorrectas");
    }
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: 'center', width: '100%', height: '100vh', bgcolor: '#EDE7F6' }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: '#FFF',
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            value={user}
            onChange={(e) => setUser(e.target.value)}
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
            onClick={handleSignIn}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
