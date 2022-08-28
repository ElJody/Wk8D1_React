import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function MyBook() {
    const book={
        author: "Arlene Dahl",
        created_on: "Mon, 28 Feb 2022 19:21:17 GMT",
        id: 1,
        img : "./always-ask-a-man-book-cover.jpeg",
        pages: 198,
        subject: "self help",
        summary: "For women traveling back to the US 1950",
        title: "ALWAYS ASK A MAN: THE KEY TO FEMININITY"
    }

  return (
    
      <Grid container spacing={1} sx={{m:1, pr:2, border:'1px solid', borderRadius:1}}>
        <Grid item sm={12} xs={12} md={12}>
          <Item sx={{display: 'flex', justifyContent: 'center'}}>
            <Avatar alt={book.title} sx={{height:'1%', width:'10%'}} variant="rounded"src={book.img}/>
          </Item>
        </Grid>
        <Grid item sm={12} xs={12} md={12}>
          <Item sx={{height:'100%', alignContent:'center'}}>
            <Typography variant='subtitle1'><strong>Book Title:</strong></Typography>
            <Typography variant='body1'>{book.title}</Typography>
                </Item>
        </Grid>
       
        <Grid item sm={6} xs={6} md={6}>
            <Item sx={{height:'100%'}}>
                <Typography variant='subtitle1'><strong>Number of Pages:</strong></Typography>
                <Typography variant='body1'>{book.pages}</Typography>
            </Item>
        </Grid>
        <Grid item sm={6} xs={6} md={6}>
            <Item sx={{height:'100%'}}>
                <Typography variant='subtitle1'><strong>Book ID:</strong></Typography>
                <Typography variant='body1'>{book.id}</Typography>
            </Item>
        </Grid>
        <Grid item sm={12} xs={12} md={12}>
            <Item sx={{height:'100%'}}>
                <Typography variant='subtitle1'><strong>Summary:</strong></Typography>
                <Typography variant='body1'>{book.summary}</Typography>
            </Item>
        </Grid>
        <Grid item sm={12} xs={12} md={12}>
            <Item sx={{height:'100%'}}>
                <Typography variant='subtitle1'><strong>Subject:</strong></Typography>
                <Typography variant='body1'>{book.subject}</Typography>
            </Item>
        </Grid>
    </Grid>
    
  );
}