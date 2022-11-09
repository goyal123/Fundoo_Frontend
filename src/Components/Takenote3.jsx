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
import ColorPoppup from './ColorPoppup/colorpoppup';
import { archieveapi, deletenoteapi } from '../services/dataService';

export default function Takenote3(props) {
  console.log(props.note)
  const updatearchieve=(id) => {
     let archievobj = {
      noteIdList:[id],
      isArchived:true
     }

     archieveapi(archievobj).then((response) => {
      console.log(response)
  }).catch((error) => {
      console.log(error)
  })

  }

  const deletednote=(id) => {
    let deleteobj = {
      noteIdList:[id],
      isDeleted:true
    }
    deletenoteapi(deleteobj).then((response) => {
      console.log(response)
  }).catch((error) => {
      console.log(error)
  })

  }

  const colorupdate=() => {
    props.getnotenew()
  }

  return (
    <>
        <div className={Style.note3container} style={{backgroundColor:props.note.color}}>
        <div className={Style.row2}>
            {/* <input type={'text2'} placeholder=""/>   */}
            <span>{props.note.title}</span>
            <span>{props.note.description}</span>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <AddAlertOutlinedIcon sx={{marginTop:5,marginLeft:1}} fontSize='small'/>
        <PersonAddAlt1OutlinedIcon sx={{marginTop:5,marginLeft:2.5}} fontSize='small'/>
        {/* { <ColorLensOutlinedIcon sx={{marginTop:1,marginLeft:2.5}} fontSize='small'/> } */}
        <ColorPoppup action='update' id={props.note.id} colorupdate={colorupdate}/>
        <ImageOutlinedIcon sx={{marginTop:5,marginLeft:2.5}} fontSize='small'/>
        <ArchiveOutlinedIcon sx={{marginTop:5,marginLeft:2.5}} fontSize='small' onClick={() => updatearchieve(props.note.id)}/>
        <MoreVertOutlinedIcon sx={{marginTop:5,marginLeft:2.5}} fontSize='small' onClick={() => deletednote(props.note.id)}/>
        </div>
        </div>
        
    

        
    </>
  )
}
