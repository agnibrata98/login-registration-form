import React, { useState } from 'react';
import { Box, Paper, Button, Container } from '@mui/material';
import './auth.css'; // External CSS for the layout styles
import Login from '../login/login';
import Register from '../register/Register';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleView = () => {
    setIsRegister(!isRegister);
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className={`container ${isRegister ? 'active' : ''}`}>
        <div className="form-container sign-in">
            <Paper elevation={6} sx={{ width: 400, borderRadius: 5, padding: 3 }}>
            <Login toggleView={toggleView} />
            </Paper>
        </div>
        <div className="form-container sign-up">
            <Paper elevation={6} sx={{ width: 400, borderRadius: 5, padding: 3 }}>
            <Register toggleView={toggleView} />
            </Paper>
        </div>
        <div className="toggle-container">
            <div className="toggle">
            <div className="toggle-panel toggle-left">
            <h3>Already have an account?</h3>
            <p>Sign in and manage your account</p>
                <Button className="button" onClick={toggleView}>
                Sign In
                </Button>
            </div>
            <div className="toggle-panel toggle-right">
            <h3>New here?</h3>
            <p>Sign up and start managing your account</p>
                <Button className="button" onClick={toggleView}>
                Sign Up
                </Button>
            </div>
            </div>
        </div>
        </div>
    </Container>
  );
};

export default Auth;
