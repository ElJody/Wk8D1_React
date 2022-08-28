import React, { useState } from 'react'
import BookForm from '../forms/BookForm';
// import {useFormik} from 'formik'
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import * as Yup from 'yup'
import { FormControl, MenuItem, InputLabel, Select, Typography} from '@mui/material'

//const subject=[{id:1, name:'Fiction'}, {id:2, name:'Non-Fiction'}, {id:3, name:'Romance'}, {id:4, name:'Horror'}];

const books = [{
    author: "Arlene Dahl",
    created_on: "Mon, 28 Feb 2022 19:21:17 GMT",
    id: 18,
    img: "https://s2982.pcdn.co/wp-content/uploads/2018/11/always-ask-a-man-book-cover.jpg",
    pages: 198,
    subject: "self help",
    summary: "For women traveling back to the US 1950",
    title: "ALWAYS ASK A MAN: THE KEY TO FEMININITY"
    },
    {
    author: "Arnetta R. Scales",
    created_on: "Mon, 28 Feb 2022 19:21:17 GMT",
    id: 19,
    img: "https://s2982.pcdn.co/wp-content/uploads/2018/11/and-on-the-eighth-day-god-created-hairdressers-book-cover.jpg",
    pages: 222,
    subject: "self help",
    summary: "Becuase I just gotta get my hair did",
    title: "AND ON THE EIGHTH DAY GOD CREATED HAIRDRESSERS"
    },
    {
    author: "James Maratta",
    created_on: "Mon, 28 Feb 2022 19:21:17 GMT",
    id: 20,
    img: "https://s2982.pcdn.co/wp-content/uploads/2018/11/brainwashing-is-a-cinch-book-cover.jpg",
    pages: 321,
    subject: "science",
    summary: "We bother making a rational argument?",
    title: "BRAINWASHING IS A CINCH!"
    }

    ];

export default function AdminSelectBook() {

    const [book, setBook] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value)
        if (event.target.value === 'default'){
            setBook('')
        }else{
            const newbook=books?.filter((s) => s.id === event.target.value)[0]
            setBook(newbook)
        }
               
    }
  return (
    <>
    <FormControl fullWidth>
            <InputLabel id="book-lable-id">Book</InputLabel>
            <Select
                labelid="book-lable-id"
                id="book-id"
                name="Book"
                sx={{mb: 2, mt:2}}
                value={book ? book.id :'default'}
                placeholder="Book"
                onChange={event => handleChange(event)}
                >
                <MenuItem value="default"><em>Select book To Edit</em></MenuItem>
                    {books.map((b)=> (
                <MenuItem key={b.id} value={b.id}>{b.title}</MenuItem>
                ))}
            </Select>
    </FormControl>
    {
        books? 
        <>
            <Typography sx={{p:4}} variant="h5">
                Edit {book.title}
            </Typography>
            <BookForm book={book}/>
        </>
        :
        <>
            <Typography sx={{p:4}} variant="h5">
                Add New Book
            </Typography>
            <BookForm/>
        </>
    }
    </>
    )
}