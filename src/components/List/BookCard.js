import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddRemoveBook from './AddRemoveBook';

export default function BookCard(book) {
  return (
    <Card sx={{ height:"100%"}}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
            {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {/* {book.summary.slice(0,25)}             */}
        </Typography>
        <Typography variant="h6" color="text.secondary">
            {book.author}
        </Typography>
      </CardContent>
      <CardActions>
        <AddRemoveBook book={book} />
      </CardActions>
    </Card>
  );
      
}
