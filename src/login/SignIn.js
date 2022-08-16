import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SignIn = () => {

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
            Sign In
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <form>
              <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="citizenship-id"
                  label="Citizenship-id"
                  name="cid"
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
                //   onChange={(e)=>{
                //     setPassword(e.target.value)
                //   }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            </form>
          </Box>
        </Container>
        </div>
    )
}

export default SignIn;