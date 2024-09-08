import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { blue } from '@mui/material/colors';

function DrawerBox() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'relative', height: '100vh', rightt: '3rem'}}>
  <IconButton
    onClick={() => setOpen(true)}
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-70%, -60%)',
      userSelect: 'none',
      width: '2rem',
      height: '2rem',
      fontSize: '2rem',
      border: '1px solid grey',
      borderRadius: '10%',
      color: 'grey',
      fill: 'currentColor',
      flexShrink: 0,
      transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    }}
  >
    <MenuRoundedIcon />
  </IconButton>


      <Drawer
        anchor={'right'}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            background: 'var(--theme)', 
          },
        }}
      >
        <div className='drawer-div'>
          <a className='link' href="/" onClick={() => setOpen(false)}>Home</a>
          <a className='link' href="/works" onClick={() => setOpen(false)}>Projects</a>
          <a className='link' href="/contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerBox;
