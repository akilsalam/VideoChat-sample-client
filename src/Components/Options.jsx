import React, { useContext, useState } from 'react';
import {Button,TextField, Grid, Typography, Container, Paper} from '@mui/material'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { FaPhoneSlash,FaPhone } from "react-icons/fa6";
import { GrCopy } from "react-icons/gr";

import { SocketContext } from '../SocketContext';



const Options = ({children}) => {
    const {me,callAccepted,name,setName,callEnded,leaveCall,callUser} = useContext(SocketContext)
    const [idToCall,setIdToCall]= useState('');


    return (
    <Container className='container'>
        <Paper className='paper2' elevation={10} style={{borderRadius:"30px"}}>
            <form className='root' noValidate autoComplete='off'>
                <Grid container className='gridContainer2'>
                    <Grid item xs={12} md={6} className='padding'>
                        <Typography gutterBottom variant='h6'>Account Info</Typography>
                        <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} fullWidth/>
                        <br /><br />
                        <CopyToClipboard text={me} className='margin'>
                            <Button variant='contained' color='primary' fullWidth >
                                <GrCopy/> Copy Your ID
                            </Button>
                        </CopyToClipboard>
                    </Grid>
                    <Grid item xs={12} md={6} className='padding'>
                        <Typography gutterBottom variant='h6'>Make a Call</Typography>
                        <TextField label='ID to call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth/>
                        <br /><br />
                        {callAccepted && !callEnded ? (
                            <Button variant='contained' color='secondary' fullWidth onClick={leaveCall} className='margin'>
                                <FaPhoneSlash/>Hang Up
                            </Button>
                        ):(
                            <Button variant='contained' color='primary' fullWidth onClick={() => callUser(idToCall)} className='margin'>
                                <FaPhone/>Call
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </form>
      {children} 
        </Paper>
    </Container>
  );
}

export default Options;
