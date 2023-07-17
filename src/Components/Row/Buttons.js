import React, { useState } from 'react'
import './Buttons.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Axios from '../../Axios/Axios';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Buttons({getAllToken,nowServing}) {
  const [open, setOpen] = React.useState(false);
  const [newToken,setNewToken] = useState([])
  
  const handleClose = () => setOpen(false);

  const generateToken=()=>{
    Axios.get('/Generate_Token').then((response)=>{
      setNewToken(response.data);
      setOpen(true)
      getAllToken();
      nowServing();
    })
  }
  const callToken =()=>{
      Axios.post('/TokenCount').then((res)=>{
        console.log("token called successfully");
        getAllToken();
        nowServing();
      })
  }

  return (
    <div className='buttons'>
            <div className='buutonDiv'>
                    <button>HOME</button>
                    <button onClick={generateToken}>GENERATE TOKEN</button>
                    {/* <Button onClick={handleOpen}>Open modal</Button> */}
                    <button>UTILITY</button>
                    <button>HISTORY</button>
                    <button style={{backgroundColor:"green"}} onClick={callToken}>CALL TOKEN</button>
            </div>
{
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
<Box sx={style}>
      <h2 style={{color:"Green",textAlign:"center"}}><b>Token Genarated Successfully</b></h2>
  <Typography id="modal-modal-title" variant="h6" component="h2">
{  newToken ? <h3>New Token No : <span style={{color:"red"}}>{newToken.tokens}</span></h3> :""}
  </Typography>
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  {  newToken ? <h5>Genarated Time : <span style={{color:"green"}}>{newToken.generate_time}</span></h5> :""} 
  </Typography>
  <Button onClick={handleClose}>Close</Button>
</Box>
</Modal>
}
            
    </div>
  )
}

export default Buttons