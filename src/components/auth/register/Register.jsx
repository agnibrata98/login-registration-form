import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';

const Register = ({ toggleView }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={3}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Create Account
      </Typography>
      {/* <Typography variant="body2">or use your email for registration</Typography> */}

      <TextField
        style={{ marginTop: '0px' }}
        fullWidth
        variant="outlined"
        label="First Name"
        margin="normal"
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Last Name"
        margin="normal"
      />
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
      <TextField
        fullWidth
        variant="outlined"
        label="Profile Photo"
        type="file"
        margin="normal"
      />

      <Button
        variant="contained"
        sx={{ marginTop: 2, background: 'linear-gradient(to right, #ff8763, #79bbff)' }}
        fullWidth
      >
        Sign Up
      </Button>

      <Box mt={3}>
        <Typography variant="body2">Already have an account?</Typography>
        <Button onClick={toggleView} variant="text">
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
