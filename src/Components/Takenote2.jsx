import React, { useState } from 'react'
import Style from './Takenote2.module.css';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import TextField from '@mui/material/TextField';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Button from '@mui/material/Button';
import { addnoteapi } from '../services/dataService';

export default function Takenote2(props) {

  const [noteobj,setnoteObj] = useState({title:'' , description:''})

  const taketitle=(e) => {
    setnoteObj((prevstate) => ({...prevstate,title:e.target.value}))
  }

  const takedesc=(e) => {
    setnoteObj((prevstate) => ({...prevstate,description:e.target.value}))
  }

  const submitnote=() => {
    console.log("submitnote called")
    props.listentotakenote2()
    addnoteapi(noteobj).then((response) => {
      console.log(response)
  }).catch((error) => {
      console.log(error)
  })
  }
  return (
    <>
    <div className={Style.note2container}>
        <div className={Style.row1}>
            <input type={'text1'} placeholder="Title" onChange={taketitle}/>  
            <PushPinOutlinedIcon sx={{marginLeft:0,marginRight:1}}/>
        </div>
        <div className={Style.row2}>
            <input type={'text2'} placeholder="Take a note" onChange={takedesc}/>  
        </div>
        <div>
        <AddAlertOutlinedIcon sx={{marginTop:2,marginLeft:1}} fontSize='small'/>
        <PersonAddAlt1OutlinedIcon sx={{marginTop:1,marginLeft:3.5}} fontSize='small'/>
        <ColorLensOutlinedIcon sx={{marginTop:1,marginLeft:3.5}} fontSize='small'/>
        <ImageOutlinedIcon sx={{marginTop:1,marginLeft:3.5}} fontSize='small'/>
        <ArchiveOutlinedIcon sx={{marginTop:1,marginLeft:3.5}} fontSize='small'/>
        <MoreVertOutlinedIcon sx={{marginTop:1,marginLeft:3.5}} fontSize='small'/>
        <Button sx={{ marginLeft: 31, marginRight: 1,marginBottom:1,color:'black' }} variant="text" onClick={submitnote}>Close</Button>
        </div>
        
        
        

    </div>
    </>
    
  )
}
