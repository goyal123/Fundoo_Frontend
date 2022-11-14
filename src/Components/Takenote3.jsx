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
import ColorPoppup from './ColorPoppup/colorpoppup';
import { addcolorapi, archieveapi, deletenoteapi, updatenoteapi } from '../services/dataService';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  note3container:{
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1cm',
    marginLeft: '0cm',
    width: '6.5cm',
    height: '18vh',
    border:'0.1mm',
    borderStyle:'double',
    borderRadius: '0.5mm'
  },
  row2:{
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '1ch',
    marginTop: '1ch'
  },
  note3box:{
    position: 'absolute',
    top: '40%',
    left: '55%',
    transform: 'translate(-50%, -50%)',
    width: 551,
    height: 125,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  },
  row3:{
    display: 'flex',
    flexDirection: 'row'
  },
  row4:{
    display: 'flex',
    flexDirection: 'column'
  }
})

const style = {
  position: 'absolute',
  top: '40%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
  width: 551,
  height: 125,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function Takenote3(props) {
  const classes = useStyle()   
  const [open, setOpen] = React.useState(false);
  const [updateNote, setUpdateNote] = useState({ noteId: '', title: '', description: ''} )
  const handleOpen = (noteobj) => {
    console.log("noteobj in handleopen",noteobj)
    setOpen(true);
    setUpdateNote({
      noteId: noteobj.id,
      title: noteobj.title,
      description: noteobj.description,

    })
  }
  const handleClose = () => setOpen(false);

  console.log(props.note)
  const updatearchieve = (id) => {
    let archievobj = {
      noteIdList: [id],
      isArchived: true
    }

    archieveapi(archievobj).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })

  }

  const deletednote = (id) => {
    let deleteobj = {
      noteIdList: [id],
      isDeleted: true
    }
    deletenoteapi(deleteobj).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })

  }

  const colorupdate = () => {
    props.getnotenew()
  }



  const close = () => {
    setOpen(false)
    updatenoteapi(updateNote).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

  const newtitle = (e) => {
    setUpdateNote((prevstate) => ({ ...prevstate, title: e.target.value }))
  }

  const newdesc = (e) => {
    setUpdateNote((prevstate) => ({ ...prevstate, description: e.target.value }))
  }

  return (
    <>
      <Card variant="outlined" style={{marginTop:20,borderRadius:5,backgroundColor: props.note.color }}>
        <Box className={classes.row2}>
          <span onClick={() => handleOpen(props.note)}>{props.note.title}</span>
          <span onClick={() => handleOpen(props.note)}>{props.note.description}</span>
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <AddAlertOutlinedIcon sx={{ marginTop: 5, marginLeft: 1 }} fontSize='small' />
          <PersonAddAlt1OutlinedIcon sx={{ marginTop: 5, marginLeft: 2.5 }} fontSize='small' />
           <ColorPoppup action='update' id={props.note.id} colorupdate={colorupdate} />
          <DeleteOutlineOutlinedIcon sx={{ marginTop: 5, marginLeft: 2.5 }} fontSize='small' onClick={() => deletednote(props.note.id)} />
           <ArchiveOutlinedIcon sx={{ marginTop: 5, marginLeft: 2.5 }} fontSize='small' onClick={() => updatearchieve(props.note.id)} />
          <MoreVertOutlinedIcon sx={{ marginTop: 5, marginLeft: 2.5 }} fontSize='small' />
        </Box>
        </Card>

        <Modal open={open} onClose={handleClose}>
        <Paper elevation={3}>
          <Box sx={style} style={{ backgroundColor: props.note.color,borderRadius:8 }}> 
            <div className={classes.row3}>
              <input type={'text1'} defaultValue={updateNote.title} style={{backgroundColor:props.note.color}} onChange={newtitle}></input>
            </div>
            <div className={classes.row4}>
              <input type={'text2'} defaultValue={updateNote.description} style={{backgroundColor:props.note.color}} onChange={newdesc}></input>
            </div>
            <div style={{ display: 'flex', backgroundColor: '', alignItems: 'center', marginTop: 0 }}>
              <AddAlertOutlinedIcon sx={{ marginTop: 5, marginLeft: 1, marginRight: 1 }} fontSize='small' />
              <PersonAddAlt1OutlinedIcon sx={{ marginTop: 5, marginLeft: 3.5, marginRight: 1 }} fontSize='small' />
              <ColorPoppup/>
              <ArchiveOutlinedIcon sx={{ marginTop: 5, marginLeft: 3.5, marginRight: 1 }} fontSize='small' />
              <MoreVertOutlinedIcon sx={{ marginTop: 5, marginLeft: 3.5, marginRight: 1 }} fontSize='small' />
              <Button sx={{ marginTop: 5, marginLeft: 30, marginBottom: 0, color: 'black' }} variant="text" onClick={close}>Close</Button>
            </div>
           </Box> 
           </Paper>
        </Modal>
        
       
    </>
  )
}
