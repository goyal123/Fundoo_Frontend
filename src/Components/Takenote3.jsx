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
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const useStyle = makeStyles({
  note3container:{
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
    width: '18vw',
    height: '18vh',
  },
  row2:{
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px',
    marginTop: '10px'
  },
  row3:{
    display: 'flex',
    flexDirection: 'row'
  },
  row4:{
    display: 'flex',
    flexDirection: 'column'
  },
  box1:{
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop:'-20px'
  },
  row5:{
    display: 'flex',
    alignItems: 'center'

  },
  row7:{
    marginTop:'50px',
    marginLeft:'10px',
    marginRight:'15px'
  },
  row8:{
    marginTop: '50px', 
    marginLeft: '55%',  
    color: 'black'
  },
  row9:{
    marginTop:'40px',
    marginLeft:'10px',
    marginRight:'8px'
  },
  row10:{
    marginTop:'40px',
    marginLeft:'18px',
    marginRight:'5px'
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
    row1:{
     
    },
    row2:{
      
    },
    row3:{
      
    },
    row4:{
      
    },
    text2:{
      
    },
    note3container:{
      
    },
    box1:{
      
    },
    row5:{
      
    },
    row6:{
      
    },
    row7:{
      
    },
    row8:{
      
    },
    row9:{
      
    },
    row10:{
      
    }

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
  console.log("props = ",props)
  const classes = useStyle()   
  const [open, setOpen] = React.useState(false);
  const [updateNote, setUpdateNote] = useState({ noteId: '', title: '', description: '',color:''} )
  const handleOpen = (noteobj) => {
    console.log("noteobj in handleopen",noteobj)
    setOpen(true);
    setUpdateNote({
      noteId: noteobj.noteID,
      title: noteobj.title,
      description: noteobj.description,
      color:noteobj.color

    })
  }
  const handleClose = () => setOpen(false);

  //console.log(props.note)
  const updatearchieve = (id) => {
    let archievobj = {
      //noteIdList: [id],
        noteId:[id]
      //isArchived: true
      //archieve:true
    }

    archieveapi(id).then((response) => {
      console.log(response)
      props.getnotenew()
    }).catch((error) => {
      console.log(error)
    })

  }

  const deletednote = (id) => {
    let deleteobj = {
      //noteIdList: [id],
      noteID:[id],
      
      //trash: true
    }
    deletenoteapi(id).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
    props.getnotenew()

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

  
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  return (
    <>
    
      <Card variant="outlined" className={classes.note3container} style={{backgroundColor: props.note.color }}>
     
        <Box className={classes.row2} sx={{ flexGrow: 1 }}>
          <span onClick={() => handleOpen(props.note)}>{props.note.title}</span>
          <span onClick={() => handleOpen(props.note)}>{props.note.description}</span>
        </Box>
        <Box className={classes.box1}>
            <div className={classes.row9}>
              <AddAlertOutlinedIcon fontSize='small' />
            </div>
            <div className={classes.row9}>
              <PersonAddAlt1OutlinedIcon fontSize='small' />
            </div>
            <ColorPoppup action='update' id={props.note.noteID} colorupdate={colorupdate} />
            <div className={classes.row10}>
            <DeleteOutlineOutlinedIcon fontSize='small' onClick={() => deletednote(props.note.noteID)} />
            </div>
            <div className={classes.row10}>
            <ArchiveOutlinedIcon fontSize='small' onClick={() => updatearchieve(props.note.noteID)} />
            </div>
            <div className={classes.row10}>
            <MoreVertOutlinedIcon fontSize='small' />
            </div>
           
        </Box>       
        </Card>

        <Modal open={open} onClose={handleClose} >
        <Paper elevation={3}>
          <Box sx={style} style={{ backgroundColor: props.note.color}}> 
            <div className={classes.row3}>
              <input type={'text'} className={classes.text2}  defaultValue={updateNote.title} style={{backgroundColor:props.note.color}} onChange={newtitle}></input>
            </div>
            <div className={classes.row4} style={{ backgroundColor: props.note.color}}>
              <input type={'text'} className={classes.text2} defaultValue={updateNote.description} style={{backgroundColor:props.note.color}} onChange={newdesc}></input>
            </div>
            <div className={classes.row5} style={{ backgroundColor: props.note.color}}>
              <div className={classes.row7}>
                <AddAlertOutlinedIcon fontSize='small'/>
              </div>
              <div className={classes.row7}>
              <PersonAddAlt1OutlinedIcon fontSize='small' />
              </div>
              <div className={classes.row7}>
              <ArchiveOutlinedIcon  fontSize='small' />
              </div>
              <div className={classes.row7}>
              <MoreVertOutlinedIcon fontSize='small' />
              </div>
              <div className={classes.row8}>
              <Button  variant="text" onClick={close}>Close</Button>
              </div>

            </div>
           </Box> 
           </Paper>
        </Modal>
        
       
    </>
  )
}
