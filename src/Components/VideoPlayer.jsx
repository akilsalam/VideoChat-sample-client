import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (
        <Grid container className='gridContainer' spacing={2}>
            {/* Our own video */}
            {stream && (
                <Grid item xs={12} md={6} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <Typography variant='h6' gutterBottom>{name || 'Name'}</Typography>
                    {/* <Paper className='paper'> */}
                        <video src="" playsInline ref={myVideo} autoPlay className='video'></video>
                    {/* </Paper> */}
                </Grid>
            )}
            {/* Users Video */}
            {callAccepted && !callEnded && (
                <Grid item xs={12} md={6} style={{display:"flex",justifyContent:"center"}}>
                    {/* <Paper className='paper'> */}
                        <Typography variant='h5' gutterBottom>{call.name || 'Name'}</Typography>
                        <video src="" playsInline ref={userVideo} autoPlay className='video'></video>
                    {/* </Paper> */}
                </Grid>
            )}
        </Grid>
    );
}

export default VideoPlayer;
