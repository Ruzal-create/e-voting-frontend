import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Axios from 'axios'

const SignUp = ()=> {
  
  const[fname, setFname] = useState('')
  const[lname, setLname] = useState('')
  const[cid, setCid] = useState('')
  const[dob, setDob] = useState('')
  const[pwd, setPassword] = useState('')
  const[confirmPassword, setConfirmPassword] = useState('');

  const[state, setState] = useState('error');
  // console.log(typeof fname)


  const validateInput = () => {
    if(pwd !== confirmPassword){
      alert('incorrect')
    }else{
      Axios.post('http://localhost:3005/api/v1/addUser', {
      citizenship_id: cid,
      first_name: fname,
      last_name: lname,
      password: pwd
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  }

  const finallyy = ()=> {
    Axios.get('http://localhost:3005/api/v1/validate/', {
    first_name: fname,
    last_name: lname,
    citizenship_id: cid
  })
  .then(function (response) {
    console.log(response);
    console.log(fname, lname)
    // if(response.data[0].checked == 'true'){
    //   insertUser();
    // }

  })
  .catch(function (error) {
    console.log(error);
  });
  }

  return(
        <div>
          <Container  component="main" maxWidth="xs">
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        ></Box>
        <Typography component="h1" variant="h5" align='center' >
            Sign up
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <form>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e)=>{
                    setFname(e.target.value)
                  }}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e)=>{
                    setLname(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="citizenship-id"
                  label="Citizenship-id"
                  name="cid"
                  onChange={(e)=>{
                    setCid(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="date"
                  label="Date-of-birth"
                  type="date"
                  fullWidth
                  onChange={(e)=>{
                    setDob(e.target.value)
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  helperText="Password must be at least 8 characters long"
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>{
                    setConfirmPassword(e.target.value)
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInput}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            </form>
          </Box>
        </Container>
        </div>
    )
}

export default SignUp;