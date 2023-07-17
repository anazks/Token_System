import React, { useEffect } from 'react'
import './action.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Axios from '../../Axios/Axios'

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

function ActionDiv() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);


  const clearToken = ()=>{
    Axios.post('/Clean_Tokens').then((response)=>{
      console.log(response);
      setOpen(true)
    })
  }
  return (
    <div className='ActionDiv'>
            <h1>Admin Actions</h1>
            <div className='btns'>
                    <button onClick={clearToken}>Reset Token</button>
                    <button>Clear History</button>
                    <button>Generate Report</button>
                    <button>Now Serving</button>
                    <button>All Tokens</button>
            </div>


            <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
<Box sx={style}>
      <h2 style={{color:"Green",textAlign:"center"}}><b>Token Cleared Successfully</b></h2>
  <Button onClick={handleClose}>Close</Button>
</Box>
</Modal>
    </div>
  )
}

export default ActionDiv