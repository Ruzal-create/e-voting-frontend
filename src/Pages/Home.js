import React from 'react';
import './styles.css'
import photo from './img.svg'
import {Button} from '@mui/material'
const Home = () => {
    return(
        <div className='main'>
            <div className='text'>
                <h1 className='tag'>WELCOME</h1>
                <h1 className='tag1'>TO E-VOTING</h1>
            </div>
            <div className='imgdiv'>
                <img className='img' src={photo}></img>
            </div>
            <div className='btn'>
                <div >
                <Button  variant="contained" size="large">
                Sign In    
                </Button>
                </div>
                <div className='btn1'>
                <Button variant="contained" size="large">
                Sign Up    
                </Button>
                </div>
            </div>
        </div>
    )

}

export default Home;