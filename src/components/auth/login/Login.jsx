import React from 'react';
import { Button, TextField, Link, Box, Typography } from '@mui/material';

const Login = ({ toggleView }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={3}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Sign In
      </Typography>
      <Typography variant="body2">or use your email and password</Typography>

      <TextField
        fullWidth
        variant="outlined"
        label="Email"
        margin="normal"
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Password"
        type="password"
        margin="normal"
      />
      <Link href="#" variant="body2" margin="normal">
        Forgot Password?
      </Link>

      <Button
        variant="contained"
        sx={{ marginTop: 2, background: 'linear-gradient(to right, #ff8763, #79bbff)' }}
        fullWidth
      >
        Sign In
      </Button>

      <Box mt={3}>
        <Typography variant="body2">New here?</Typography>
        <Button onClick={toggleView} variant="text">
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
