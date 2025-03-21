import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import logo from '../data/images/logoPrimary.png';

const users = [
  ["utkarshkrr", "utk1"],
  ["sshivamshah", "shivam1"],
  ["shivamsah", "shivam2"],
  ["aayush", "aayush1"],
  ["alaukik", "alaukik1"],
];

function Home() {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const userFound = users.some(([username, pass]) => username === userID && pass === password);
    
    if (userFound) {
      navigate("/products");
    } else {
      setError("Invalid User ID or Password");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Container
      sx={{
        maxWidth: 400,
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Logo and Website Name Header */}
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <img 
          src={logo} 
          alt="Logo" 
          style={{ height: 200, filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.3))" }} 
        />
        <Typography 
          variant="h2" 
          sx={{ marginTop: 2, fontWeight: 'bold', color: '#2A2E45' }}
        >
          ElectroMart
        </Typography>
      </Box>

      {/* Login Form */}
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 4 }}>
        Login Page
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        value={userID}
        onChange={(e) => setUserID(e.target.value)}
        onKeyDown={handleKeyDown}
        sx={{ marginBottom: 2, maxWidth: 350 }}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeyDown}
        sx={{ marginBottom: 2, maxWidth: 350 }}
      />
      {error && (
        <Typography color="error" sx={{ textAlign: "center", marginBottom: 2 }}>
          {error}
        </Typography>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleLogin}
        sx={{
          alignSelf: "center",
          marginTop: 3,
          transition: "transform 0.3s ease",
          '&:hover': {
            backgroundColor: "#313D5A",
            transform: "scale(1.05)",
          }
        }}
      >
        Login
      </Button>
    </Container>
  );
}

export default Home;
