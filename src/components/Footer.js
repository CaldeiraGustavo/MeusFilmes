import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function Footer() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, backgroundColor: '#5e5353' }}>
        <Toolbar>
        </Toolbar>
    </AppBar>
  );
}

export default Footer;