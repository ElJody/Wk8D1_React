import React from 'react'
import {useTheme} from '@mui/material/styles'
import {Paper} from '@mui/material'
import AdminSelectBook from '../components/AdminSelectBook'

export default function AdminBook() {
  const theme = useTheme()
  return (
    <Paper sx={{
      m:5, p:5, 
      justifyContent:"center", 
      backgroundColor: theme.palette.background.paper, 
      backgroundImage: theme.palette.background.paper,
      maxWidth:"600px",
      mx:"auto"
  }}>
      <AdminSelectBook/>
    </Paper>
  )
}
