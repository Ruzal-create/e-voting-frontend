import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid, Button, Paper, TextField } from '@mui/material';
import './styles.css'




import Axios from 'axios';

const Voting = () => {

    const [cid, setCid] = useState('')
 


    // useEffect(()=>{
    //     Axios.get('http://localhost:3005/api/v1/getmembers')
    //         .then(function (response) {
    //             setMembers(response.data);
    //         })
    // }, [])
const [open, setOpen] = React.useState(false);
const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClosedefault = () => {
    setOpen(false);
  };
  const handleCloseInput = () => {
    setOpen1(false);
  };
  const handleClose1 = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen(false)
    setOpen1(true);
  };
  const party = [
    {
      id: "1",
      name: "Communist Party of Nepal",
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Nepal_Communist_Party_symbol.svg/800px-Nepal_Communist_Party_symbol.svg.png'
    },
    {
      id: "2",
      name: "Nepali Congress",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Nepalese_Election_Symbol_Tree.svg/800px-Nepalese_Election_Symbol_Tree.svg.png"
    },
    {
      id: "3",
      name: "Communist Party of Nepal (Maoist Centre)",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Nepalese_Election_Symbol_Hammer_and_sickle.svg/800px-Nepalese_Election_Symbol_Hammer_and_sickle.svg.png"
    }
  ]
    return(
        <div className='mainvote'>
          <div className='inner'>
            <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Paper elevation={3}>
                                  <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img style={{width:50 + 'px', heigh:50+'px', marginTop: 20 + 'px', marginBottom: 20 + 'px' }} src={party[0].image}></img>
                                </div>
                                <div className='heading'>
                                  <p className='party'>{party[0].name}</p>
                                </div>
                                <div className='buttons'>
                                  <Button onClick={handleClickOpen} variant="outlined" >Vote</Button>  
                                </div>
                                </Paper>
                            </Grid>
                            
                            <Grid item xs={4}>
                              <Paper elevation={3}>
                                  <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img style={{width:50 + 'px', heigh:50+'px', marginTop: 20 + 'px', marginBottom: 20 + 'px' }} src={party[1].image}></img>
                                </div>
                                <div className='heading'>
                                  <p className='party'>{party[1].name}</p>
                                </div>
                                <div className='buttons'>
                                  <Button onClick={handleClickOpen} variant="outlined" >Vote</Button>   
                                </div> 
                                </Paper> 
                            </Grid>
                            <Grid item xs={4}>
                              <Paper elevation={3}>
                                  <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img style={{width:50 + 'px', heigh:50+'px', marginTop: 20 + 'px', marginBottom: 20 + 'px' }} src={party[2].image}></img>
                                </div>
                                <div className='heading'>
                                  <p className='party'>{party[2].name}</p>
                                </div>
                                <div className='buttons'>
                                  <Button onClick={handleClickOpen} variant="outlined" >Vote</Button>
                                  </div>  
                                </Paper> 
                            </Grid>
                    </Grid>
                     <Dialog
        open={open}
        onClose={handleClosedefault}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirmation
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Vote this Party? 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>No</Button>
          <Button onClick={handleClose2} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open1} onClose={handleCloseInput}>
        <DialogTitle>One last step</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter your citizenship_id
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Citizenship id"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e)=>{
                    setCid(e.target.value)
                  }}
          />
        </DialogContent>
        <DialogActions>
          <Button  >Done</Button>
        </DialogActions>
      </Dialog>
          </div>
        </div>
  );
}
export default Voting;
