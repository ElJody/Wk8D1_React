import React from 'react'
import {useContext} from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
//import { Book } from '@mui/icons-material';



export default function AddRemoveBook(book) {
  return (
    <ButtonGroup sx={{margin:"auto"}}>
        <IconButton key="add" onClick={()=>{console.log("Added Book ", book.title, " to your List")}}>
            <AddCircleTwoToneIcon fontSize='small'/>
        </IconButton>
        <IconButton key="remove" onClick={()=>{console.log('Removed', book.title)}}>
            <RemoveCircleTwoToneIcon fontSize='small'/>
        </IconButton>
    </ButtonGroup>
  )
}
