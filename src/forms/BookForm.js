import React from 'react'
import {useFormik} from 'formik'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import * as Yup from 'yup'
import { FormControl, MenuItem, FormHelperText, InputLabel, Select} from '@mui/material'
//import MUIButton from '../components/button'

const FormSchema = Yup.object(
  {
      title: Yup.string().required(),
      author: Yup.string().required(),
      img: Yup.string().url().required(),
      subject: Yup.string().required(),
      summary: Yup.string().required(),
      book_id:Yup.number().integer().required(),
  }
)

const subject=[{id:1, name:'Fiction'}, {id:2, name:'Non-Fiction'}, {id:3, name:'Romance'}, {id:4, name:'Horror'}];

export default function BookForm({book={
    author: "Arlene Dahl",
    created_on: "Mon, 28 Feb 2022 19:21:17 GMT",
    id: 1,
    img : "./always-ask-a-man-book-cover.jpeg",
    pages: 198,
    subject: "self help",
    summary: "For women traveling back to the US 1950",
    title: "ALWAYS ASK A MAN: THE KEY TO FEMININITY"
    }
   })


// export default function BookForm({book})
        {
        const initalValues = {
            
            author: book?.author ?? "",   
            img: book?.img??  "",
            subject: book?.subject ?? "",
            summary: book?.summary ?? "",    
            book_id: book?.id ?? 0,
            title: book?.title ?? "",
        }
       
    const handleSubmit = (values, resetForm) => {
        if (book){
            console.log("Editing", values)
        }else{
            console.log("Creating", values)
        }
        resetForm(initalValues)
    }

    const handleDelete = () => {
        console.log("Deleting ", book.title) 
      }
       

    const formik = useFormik({
        initialValues: initalValues,
        validationSchema: FormSchema,
        onSubmit: (values, {resetForm}) => handleSubmit(values, resetForm),
        enableReinitialize: true
        
    })
        return (
        <form onSubmit={formik.handleSubmit}>
        <TextField
            id="title" 
            name="title"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="Title"
            placeholder="Book Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean (formik.errors.title)}
            //error={formik.touched.email && Boolean (formik.errors.email) ? true : false}
            helperText={formik.touched.title && formik.errors.title}
            variant="outlined" mx={20}
        />
        <TextField
            id="author" 
            name="author"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="Author"
            placeholder="Book Author"
            value={formik.values.author}
            onChange={formik.handleChange}
            error={formik.touched.author && Boolean (formik.errors.author)}
            // error={formik.touched.email && Boolean (formik.errors.email) ? true : false}}
            helperText={formik.touched.author && formik.errors.author}
            variant="outlined" mx={20}
        />
        <TextField
            id="img" 
            name="img"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="Book Image"
            placeholder="Image URL"
            value={formik.values.img}
            onChange={formik.handleChange}
            error={formik.touched.img && Boolean (formik.errors.img)}
            // error={formik.touched.email && Boolean (formik.errors.email) ? true : false}}
            helperText={formik.touched.img && formik.errors.img}
            variant="outlined" mx={20}
        />
        
        <TextField
            id="summary" 
            name="summary"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="Summary"
            placeholder="Book Summary"
            value={formik.values.summary}
            onChange={formik.handleChange}
            error={formik.touched.summary && Boolean (formik.errors.summary)}
            // error={formik.touched.email && Boolean (formik.errors.email) ? true : false}}
            helperText={formik.touched.summary && formik.errors.summary}
            variant="outlined" mx={20}
        />
        <FormControl fullWidth>
            <InputLabel id="subject-lable-id">Subject</InputLabel>
            <Select
                labelid="subject-lable-id"
                id="subject-id"
                name="subject"
                sx={{mb: 2, mt:2}}
                value={formik.values.subject}
                placeholder="Subject"
                onChange={formik.handleChange}
                error={formik.touched.subject && Boolean (formik.errors.subject)}
                >
                <MenuItem value={0}><em>None</em></MenuItem>
                {subject.map((subj)=> (
            <MenuItem key={subj.id} value={subj.id}>{subj.name} | {subj.id}</MenuItem>
                ))}
            </Select>
            <FormHelperText>{formik.touched.subject && formik.errors.subject}</FormHelperText>
        </FormControl>
        
        <Button type="submit" sx={{width:"100%", my:1}} variant="outlined" color='inherit'>{book?"Edit Book": "Add Book"}</Button>
        { book ?
        <Button color="error" onClick={() =>handleDelete()} sx={{width:"100%"}} variant="outlined" >
          Delete 
        </Button>
    : ''}
    </form>
)   
}   
