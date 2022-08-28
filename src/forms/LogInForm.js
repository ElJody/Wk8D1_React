//import { Password } from '@mui/icons-material'
import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { apiBasicAuth } from '../api/client'

// {    HeroKu Profile Details
// admin: true,
// created_on: "Sun, 31 Jul 2022 20:52:37 GMT",
// email: "jodycontigo@gmail.com",
// first_name: "Jody",
// last_name: "Sheffield",
// modified_on: "Sun, 28 Aug 2022 21:33:45 GMT",
// token: "PYjWcn2T7beREYiOBgX5xwdTMYzjy-8l2G4Z9dwGjWE",
// user_id: 367
// }


const FormSchema = Yup.object(
    {
        email: Yup.string().email('Email is required').required(),
        password: Yup.string().required()
    }
)

const initalValues = {
    email: '',
    password: ''
}


export default function LogInform() {
    const handleSubmit = (values) => {
        apiBasicAuth().get('/login', values);
    }
    const formik = useFormik({
        initialValues: initalValues,
        validationSchema: FormSchema,
        onSubmit: (values) => handleSubmit(values)
    })
   
  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
            id="email" 
            name="email"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="Email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean (formik.errors.email)}
            // error={formik.touched.email && Boolean (formik.errors.email) ? true : false}}
            helperText={formik.touched.email && formik.errors.email}
            variant="outlined" mx={20}
        />
        <TextField
            id="password" 
            name="password"
            type="password"
            fullWidth
            sx={{mb: 2, mt:2}}
            //sx={{marginBottom: '.75rem'}}
            label="Password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean (formik.errors.password)}
            // error={formik.touched.email && Boolean (formik.errors.email) ? true : false}}
            helperText={formik.touched.password && formik.errors.password}
            variant="outlined" mx={20}
        />
        <Button type="submit" sx={{width:"100%"}} variant="outlined" color='inherit'>Login</Button>
    </form>
  )
}
