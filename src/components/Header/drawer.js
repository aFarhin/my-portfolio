import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { blue } from '@mui/material/colors';

function DrawerBox() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          userSelect: 'none',
          width: '2.6rem',
          height: '2.6rem',
          fontSize: '2rem',
          display: 'inline-block',
          color: '#76b6e0',
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
