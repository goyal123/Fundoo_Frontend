import React, { useState } from 'react'
// import Style from './Takenote2.module.css';
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
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  note2container:{
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
    marginLeft: '36%',
    width: '46vw',
    height: '20vh'
  },
  row1:{
    display: 'flex',
    flexDirection: 'row'
  },
  row2:{
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px',
    marginTop: '10px'
  },
  text1:{
    marginLeft: '2mm',
    outline:0,
    border:'none',
    fontSize: '16px',
    height: '30px',
    width: '40vw',
    
  },
  text2:{
    marginLeft: '0mm',
    outline:0,
    border:'none',
    fontSize: '15px',
    height: '30px',
    width: '40vw',
   
  },
  ['@media screen and (min-width:421px) and (max-width : 768px)']:{
    note2container:{
      
    },
    row1:{
      
    },
    text1:{
      
    },
    row2:{
      
    },
    text2:{
      
    }




  }


})

export default function Takenote2(props) {
  const classes = useStyle()   

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
      props.getnote()
  }).catch((error) => {
      console.log(error)
  })
  }
  return (
    <>
    <Paper elevation={3} className={classes.note2container} style={{backgroundColor:noteobj.color}}>
        <Box className={classes.row1}>
            <input type={'text'} className={classes.text1} placeholder="Title" onChange={taketitle} style={{backgroundColor:noteobj.color}}/>  
            <PushPinOutlinedIcon sx={{ marginLeft:35, marginRight: 1}}/>
        </Box>
        <Box className={classes.row2}>
            <input type={'text'} className={classes.text2} placeholder="Take a note" onChange={takedesc} style={{backgroundColor:noteobj.color}}/>  
        </Box>
        <Box style={{display:'flex',backgroundColor:'',alignItems:'center',marginTop:-20}}>
        <AddAlertOutlinedIcon sx={{marginTop:5,marginLeft:1}} fontSize='small'/>
        <PersonAddAlt1OutlinedIcon sx={{marginTop:5,marginLeft:3.5}} fontSize='small'/>
        {/* <ColorLensOutlinedIcon sx={{marginTop:1,marginLeft:3.5}} fontSize='small'/> */}
        <ColorPoppup colornote={colornote} action='create'/>
        <ImageOutlinedIcon sx={{marginTop:5,marginLeft:3.5}} fontSize='small'/>
        <ArchiveOutlinedIcon sx={{marginTop:5,marginLeft:3.5}} fontSize='small' onClick={changearchieve}/>
        <MoreVertOutlinedIcon sx={{marginTop:5,marginLeft:3.5}} fontSize='small'/>
        <Button sx={{ marginTop:4,marginLeft:35, marginRight: 1,marginBottom:0,color:'black' }} variant="text" onClick={submitnote}>Close</Button>
        </Box>

        </Paper>
    
    </>
    
  )
}
