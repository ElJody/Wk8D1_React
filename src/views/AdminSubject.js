import React from 'react'
import {useTheme} from '@mui/material/styles'
import {Typography, Paper} from '@mui/material'
import AdminSelectSubj from '../components/AdminSelectSubj'

export default function AdminSubject() {
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
      <AdminSelectSubj/>
    </Paper>
  )
}
