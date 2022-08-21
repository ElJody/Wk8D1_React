import React, {useState} from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function CategoryBar() {
    const [actCat, setActCat] = useState({});
    const categories=[{id:1, name:'Fiction'}, {id:2, name:'Non-Fiction'}, {id:3, name:'Romance'}, {id:4, name:'Horror'}];
    
    const handleActCat = (cat) => {
      if(actCat.id === cat.id) {
        setActCat({});
        } else {
          setActCat(cat);
        }    
      }
  return (
      <Stack direction="row" spacing={8}>
          {categories.map((cat) =>( 
            cat.id === actCat.id?
            <Chip key={cat.id} size="small" label={cat.name} onClick={() => {handleActCat(cat)}} variant="contained" mx="auto" color="primary" />
            :
            <Chip key={cat.id} size="small" label={cat.name} onClick={() => {handleActCat(cat)}} variant="outlined" mx="auto" color="primary" />
          )
          )}
      </Stack>
  )}