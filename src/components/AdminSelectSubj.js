import React, { useState } from 'react'
import SubjForm from '../forms/SubjForm';
// import {useFormik} from 'formik'
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import * as Yup from 'yup'
import { FormControl, MenuItem, InputLabel, Select, Typography} from '@mui/material'




const subject=[{id:1, name:'Fiction'}, {id:2, name:'Non-Fiction'}, {id:3, name:'Romance'}, {id:4, name:'Horror'}];

export default function AdminSelectSubj() {

    const [subj, setSubj] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value)
        if (event.target.value === 'default'){
            setSubj('')
        }else{
            const newsubj=subject.filter((s) => s.id === event.target.value)[0]
            setSubj(newsubj)
        }
               
    }
  return (
    <>
    <FormControl fullWidth>
            <InputLabel id="subject-lable-id"></InputLabel>
            <Select
                labelid="subject-lable-id"
                id="subject-id"
                name="subject"
                sx={{mb: 2, mt:2}}
                value={subj ? subj.id :'default'}
                placeholder="Subject"
                onChange={event => handleChange(event)}
                >
                <MenuItem value="default"><em>Select Subject To Edit</em></MenuItem>
                    {subject.map((subj1)=> (
                <MenuItem key={subj1.id} value={subj1.id}>{subj1.name}</MenuItem>
                ))}
            </Select>
    </FormControl>
    {
        subj? 
        <>
            <Typography sx={{p:4}} variant="h5">
                Edit {subj.name}
            </Typography>
            <SubjForm subject={subj}/>
        </>
        :
        <>
            <Typography sx={{p:4}} variant="h5">
                Create New Subject
            </Typography>
            <SubjForm/>
        </>
    }
    </>
    )
}