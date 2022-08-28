import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
//import ListSubheader from '@mui/material/ListSubheader';
import { Box } from '@mui/system';
import Error from './Error';
import { CircularProgress } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import AllInclusiveSharpIcon from '@mui/icons-material/AllInclusiveSharp';
import SubjectBar from './SubjectBar';




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
    },
    {
        author: "Stephanie Jackson",
        created_on: "Mon, 28 Feb 2022 19:21:17 GMT",
        id: 21,
        img: "https://s2982.pcdn.co/wp-content/uploads/2018/11/cat-flexing.jpg",
        pages: 1295,
        subject: "self help",
        summary: "Who needs heavy weights when a fat cat will do",
        title: "CATFLEXING: A CATLOVER'S GUIDE TO WEIGHTLIFTING, AEROBICS & STRETCHING"
        },
        {
        author: "Micheala Giles",
        created_on: "Mon, 28 Feb 2022 19:21:17 GMT",
        id: 22,
        img: "https://s2982.pcdn.co/wp-content/uploads/2018/11/commuter-pig-keeper-book-cover.jpg",
        pages: 87,
        subject: "science",
        summary: "Not in Kansas anymore? Raising pigs in the City with a full time job?",
        title: "THE COMMUTER PIG KEEPER"
        },
        {
        author: "Elizabeth Worthington Strong",
        created_on: "Mon, 28 Feb 2022 19:21:17 GMT",
        id: 24,
        img: "https://s2982.pcdn.co/wp-content/uploads/2018/11/how-to-cook-husbands-book-cover.jpg",
        pages: 199,
        subject: "marriage advice",
        summary: "For when you are tired of the question What's for dinner?",
        title: "HOW TO COOK HUSBANDS"
        },
        {
        author: "Lois Bird",
        created_on: "Mon, 28 Feb 2022 19:21:17 GMT",
        id: 25,
        img: "https://s2982.pcdn.co/wp-content/uploads/2018/11/how-to-make-your-wife-your-mistress-book-cover.jpg",
        pages: 111,
        subject: "marriage advice",
        summary: "Living with two women can be hard: Consolidate",
        title: "HOW TO MAKE YOUR WIFE YOUR MISTRESS"
        },
        {
        author: "Brenda Bence",
        created_on: "Mon, 28 Feb 2022 19:21:17 GMT",
        id: 26,
        img: "https://s2982.pcdn.co/wp-content/uploads/2018/11/how-you-are-like-shampoo-book-cover.jpg",
        pages: 222,
        subject: "self help",
        summary: "Lather, rinse, repeat.",
        title: "HOW YOU ARE LIKE SHAMPOO"
        },
        {
        author: "Aqua Boil",
        created_on: "Mon, 28 Feb 2022 19:21:17 GMT",
        id: 27,
        img: "https://s2982.pcdn.co/wp-content/uploads/2018/11/the-joy-of-waterboiling-book-cover-759x1024.jpg",
        pages: 12,
        subject: "entertainment",
        summary: "For when you need to have fun on a budget ",
        title: "THE JOY OF WATER BOILING"
        },
        {
        author: "Drew Emborsky",
        created_on: "Mon, 28 Feb 2022 19:21:17 GMT",
        id: 28,
        img: "https://s2982.pcdn.co/wp-content/uploads/2018/11/men-who-knit-and-the-dogs-who-love-them-book-cover.jpg",
        pages: 397,
        subject: "entertainment",
        summary: "Nothing finer than knitting matching sweaters for you and your dog",
        title: "MEN WHO KNIT & THE DOGS WHO LOVE THEM"
        },
        {
        author: "Matthew Voggel",
        created_on: "Mon, 28 Feb 2022 19:21:17 GMT",
        id: 30,
        img: "https://s2982.pcdn.co/wp-content/uploads/2018/11/natural-history-of-vacant-lots-book-cover-178x300.jpg",
        pages: 452,
        subject: "science",
        summary: "Seinfeld for Property",
        title: "NATURAL HISTORY OF VACANT LOTS"
        },
];

export default function BookBrowser({ }) {
    const handleAddBook = (books) => {
        console.log("Added", books.title, "to the list")
    }
  return (    
    
    <ImageList cols={3}>
        {books.map((books)=>(
            <ImageListItem key={books.id}>
                <img src={books.img} srcSet={books.img} alt={books.title} loading="lazy"/>
                <ImageListItemBar
                title={books.title}
                subtitle={'By '+books.author}
                actionIcon={<>
                        <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${books.title}`} onClick={()=>console.log(`Get More Info on `+books.title)}>
                    {/* <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${book.title}`} onClick={()=>navigate(`/buildlist/${book.id}`)}> */}
                        <InfoIcon/>
                    </IconButton>
                    <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${books.title}`} onClick={()=>handleAddBook(books)}>
                        <AllInclusiveSharpIcon/>
                    </IconButton>

                </>}
                />

            </ImageListItem>
        ))}

    </ImageList>
  )
}
