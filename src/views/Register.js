import React from 'react'
import FormOutline from '../components/FormOutline'
import RegisterForm from '../forms/RegisterForm'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'

export default function RegisterView() {
  return (
    <FormOutline>
        <RegisterForm/>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <p>Have an account? Login <Link to='/login'>here</Link></p>
        
        </Box>
    </FormOutline>
  )
}