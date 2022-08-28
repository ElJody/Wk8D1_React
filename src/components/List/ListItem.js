import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
//import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import BookCard from './BookCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ListItem({list}) {

  return (
    <Grid container spacing={2} sx={{m:1, pr:2, borderRadius:1, alignItems: 'stretch'}}>
        <Grid item md={4} sm={6} xs={12}>
            <Item sx={{height:'100%'}}>
                <Avatar alt={list.title} variant="rounded" src={list.img} sx={{height:'100%', width:'100%'}}/>
            </Item>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
            <Item sx={{height:'100%'}}>
                <BookCard list={list}/>
            </Item>
        </Grid>

     </Grid>
  )
}
