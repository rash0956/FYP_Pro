import React from 'react'
import Sidenav from '../Sidenav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Subject() {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <h1>Subject</h1>
      </Box>
    </Box>
    </>
  )
}

