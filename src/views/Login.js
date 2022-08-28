import { Typography, Paper } from '@mui/material'
import React from 'react'
import LogInForm from '../forms/LogInForm'
import {useTheme} from '@mui/material/styles'

export default function Login() {
    const theme = useTheme()
  return (
    <Paper sx ={{
        m:5, p:5, 
        justifyContent: 'center', 
        backgroundColor: theme.palette.background.paper, 
        backgroundImage: theme.palette.background.paper,
        maxWidth: "600px",
        mx:"auto"}}>
        {console.log(theme)}
        <Typography variant='h4'> Login </Typography>
        <LogInForm/>
    </Paper>
  )
}
