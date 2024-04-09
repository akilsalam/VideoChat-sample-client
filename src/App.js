import React from 'react';
import './App.css';
import { AppBar, Typography} from '@mui/material'
import VideoPlayer from './Components/VideoPlayer';
import Options from './Components/Options';
import Notifications from './Components/Notifications';


function App() {
  return (
    <div className="wrapper">
      <AppBar className='appBar' position="static" style={{backgroundColor:"white",margin:"30px 100px",width:"600px",borderRadius:"30px"}} color='inherit'>
        <Typography variant='h2' >Video Chat</Typography>
      </AppBar>
      {/* VideoPlayer */}
      <VideoPlayer/>
      {/* Options => Notifications */}
      <Options>
          <Notifications/>
      </Options>
    </div>
  );
}

export default App;
