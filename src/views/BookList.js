import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import ListPage from '../components/List/ListPage'
import Box from '@mui/material/Box'



export default function BookList() {
  
  return (
    <>
    <Box  sx={{maxWidth:"75%", mx:"auto" }}>
    <Typography variant="h3" ml={4}>Your Book List</Typography>
    <ListPage />
    </Box>
    </>
  )
}
