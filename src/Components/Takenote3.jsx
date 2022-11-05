import React from 'react'
import Style from './Takenote2.module.css';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import TextField from '@mui/material/TextField';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


export default function Takenote3(props) {

  return (
    <>
    
        <div className={Style.note3container}>
        <div className={Style.row2}>
            {/* <input type={'text2'} placeholder=""/>   */}
            <span>{props.note.title}</span>
            <span>{props.note.description}</span>
        </div>
        <div>
        <AddAlertOutlinedIcon sx={{marginTop:6,marginLeft:1}} fontSize='small'/>
        <PersonAddAlt1OutlinedIcon sx={{marginTop:1,marginLeft:2.5}} fontSize='small'/>
        <ColorLensOutlinedIcon sx={{marginTop:1,marginLeft:2.5}} fontSize='small'/>
        <ImageOutlinedIcon sx={{marginTop:1,marginLeft:2.5}} fontSize='small'/>
        <ArchiveOutlinedIcon sx={{marginTop:1,marginLeft:2.5}} fontSize='small'/>
        <MoreVertOutlinedIcon sx={{marginTop:1,marginLeft:2.5}} fontSize='small'/>
        </div>
        </div>
        
    

        
    </>
  )
}
