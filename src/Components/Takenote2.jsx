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
import ColorPoppup from './ColorPoppup/colorpoppup';

export default function Takenote2(props) {

  const [noteobj,setnoteObj] = useState({title:'' , description:'',color:'',isArchived:false})

  const taketitle=(e) => {
    setnoteObj((prevstate) => ({...prevstate,title:e.target.value}))
  }

  const takedesc=(e) => {
    setnoteObj((prevstate) => ({...prevstate,description:e.target.value}))
  }

  const colornote=(e) => {
    //console.log("colornote called in parent takenote2 ",e)
    setnoteObj((prevstate) => ({...prevstate,color:e}))

  }

  const changearchieve=() => {
    setnoteObj((prevstate) => ({...prevstate,isArchived:true}))
  }

  const submitnote=() => {
    console.log("submitnote called")
    // console.log(noteobj)
    props.listentotakenote2()
    addnoteapi(noteobj).then((response) => {
      console.log(response)
  }).catch((error) => {
      console.log(error)
  })
  }
  return (
    <>
    <div className={Style.note2container} style={{backgroundColor:noteobj.color}}>
        <div className={Style.row1}>
            <input type={'text1'} placeholder="Title" onChange={taketitle}/>  
            <PushPinOutlinedIcon sx={{marginLeft:0,marginRight:1}}/>
        </div>
        <div className={Style.row2}>
            <input type={'text2'} placeholder="Take a note" onChange={takedesc}/>  
        </div>
        <div style={{display:'flex',backgroundColor:'',alignItems:'center',marginTop:-20}}>
        <AddAlertOutlinedIcon sx={{marginTop:5,marginLeft:1}} fontSize='small'/>
        <PersonAddAlt1OutlinedIcon sx={{marginTop:5,marginLeft:3.5}} fontSize='small'/>
        {/* <ColorLensOutlinedIcon sx={{marginTop:1,marginLeft:3.5}} fontSize='small'/> */}
        <ColorPoppup colornote={colornote} action='create'/>
        <ImageOutlinedIcon sx={{marginTop:5,marginLeft:3.5}} fontSize='small'/>
        <ArchiveOutlinedIcon sx={{marginTop:5,marginLeft:3.5}} fontSize='small' onClick={changearchieve}/>
        <MoreVertOutlinedIcon sx={{marginTop:5,marginLeft:3.5}} fontSize='small'/>
        <Button sx={{ marginTop:4,marginLeft: 31, marginRight: 1,marginBottom:0,color:'black' }} variant="text" onClick={submitnote}>Close</Button>
        </div>
        
        
        

    </div>
    </>
    
  )
}
