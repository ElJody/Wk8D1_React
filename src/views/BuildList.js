import React, {useState} from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import BookBrowser from '../components/BookBrowser'
import SubjectBar from '../components/SubjectBar'


export default function BuildList() {
    const [actSub, setActSub] = useState({});
  return (
    <>
    <Box  sx={{minWidth:"300px", maxWidth:"1000px", display:"flex", justifyContent:"center",  mx:"auto" }}>
    <Typography variant='h3' mb={5}> Build A Book List </Typography>
    </Box>
    <Box  sx={{minWidth:"300px", maxWidth:"600px", display:"flex", justifyContent:"center",  mx:"auto" }}>
        <SubjectBar actSub={actSub} setActSub={setActSub}/>
    </Box>
    <Box sx={{minWidth:"300px", maxWidth:"600px", display:"flex", justifyContent:"center",  mx:"auto" }}>
        <BookBrowser subject_id={actSub?.id}/>
    </Box>
    </>
  )
}
