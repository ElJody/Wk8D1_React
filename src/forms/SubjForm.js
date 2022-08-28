import React from 'react'
import {useFormik} from 'formik'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import * as Yup from 'yup'
// import MUIButton from '../components/button'
// import { Category } from '@mui/icons-material'

const FormSchema = Yup.object(
  {
      name: Yup.string().required(),
  }
)

//const subject=[{id:1, name:'Fiction'}, {id:2, name:'Non-Fiction'}, {id:3, name:'Romance'}, {id:4, name:'Horror'}];

export default function SubjForm({ subject }) {
  
  const initialValues = {
    name: subject?.name ?? '',
    
  }
  const handleSubmit = (values, resetForm) => {
    if (subject){
      console.log("Editing ", values)

    }else{
      console.log("Creating ", values)
    }
    resetForm(initialValues)
  }

const handleDelete = () => {
  console.log("Deleting ", subject.name) 
}

const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    onSubmit: (values, {resetForm}) => handleSubmit(values, resetForm),
    enableReinitialize: true
})  

  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
            id="subject" 
            name="subject"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="Subject"
            placeholder="Subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            error={formik.touched.subject && Boolean (formik.errors.subject)}
            //error={formik.touched.email && Boolean (formik.errors.email) ? true : false}
            helperText={formik.touched.subject && formik.errors.subject}
            variant="outlined" mx={20}
        />
        

        <Button type="submit" sx={{width:"100%", my:1}} variant="outlined" color='inherit'>
          {subject ? 'Edit Subject' : 'Add Subject'}
        </Button>
    { subject ?
        <Button color="error" onClick={() =>handleDelete()} sx={{width:"100%"}} variant="outlined" >
          Delete 
        </Button>
    : ''}
    </form>
  )
}
