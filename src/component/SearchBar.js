import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar({data,setDisplayData,...props}) {
  const [text,setText] = useState("");

  function changeHandler(value){
    let matches = []
    if(text.length>0){
      matches = data.filter((obj) =>{
        const regex = new RegExp(`${value}`,"gi")
        return obj.title.match(regex)
      })
    }
    setDisplayData(matches)
    setText(value);
  }

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth value={text} label="Search" id="fullWidth" onChange={(e)=>changeHandler(e.target.value)} />
    </Box>
  );
}
