import {useEffect, useState} from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import apiCat from '../api/apiCategory';
import {CancelToken} from 'apisauce'

export default function SubjectBar(actSub, setActSub) {
  // const [actSub, setActSub] = useState({});
  //  const subject=[{id:1, name:'Fiction'}, {id:2, name:'Non-Fiction'}, {id:3, name:'Romance'}, {id:4, name:'Horror'}];

    const [categories, setCategories] = useState([]);


    useEffect(() => {
          const source= CancelToken.source()
          const apiCall=async () => {
              const {error, categories} = await apiCat.get(source.token);
              setCategories(categories);
          }
          apiCall()
          return () => {source.cancel()}
        },[])
      


    const handleActSub = (cat) => {
      if(cat.id === actSub.id) {
        setActSub({});
        } else {
          setActSub(cat);
        }    
      }
  return (
      <Stack direction="row" spacing={10}>
          {categories?.map((cat) =>( 
            cat.id === actSub.id?
            <Chip key={cat.id} size="large" label={cat.name} onClick={() => {handleActSub(cat)}} variant="contained" mx="auto" color="default" />
            :
            <Chip key={cat.id} size="large" label={cat.name} onClick={() => {handleActSub(cat)}} variant="outlined" mx="auto" color="default" />
          )
          )}
      </Stack>
  )}