import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { addnoteapi } from '../../services/dataService';
import { addcolorapi } from '../../services/dataService';


export default function ColorPoppup(props) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]

  const colorpicker=(colour) =>{
        // props.colornote(colour)
        if(props.action==='create'){
            props.colornote(colour)
        }
        if(props.action==='update'){
          console.log("id = ",props.id)
            let colorobj = {
                noteIdList:[props.id],
                color:colour
            }
        console.log(colorobj)
        addcolorapi(colorobj).then((response) => {
            console.log(response)
            props.colorupdate()
        }).catch((error) => {
            console.log(error)
        })

        console.log(colour,"updateing color")
        }



  }

  const handleClick = (event) => {
    console.log("handleclick function called in child colorpop.js",event)
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <div style={{marginTop:-7,marginLeft:-1,marginRight:1}}>
      <ColorLensOutlinedIcon sx={{marginTop:6,marginLeft:2.5}} fontSize='small' onClick={handleClick}/>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper',display:'flex',flexDirection:'row'}}>
              {
                colors.map((color) => (
                    <div style={{height:25,width:25,border:'1px solid red',backgroundColor:color,borderRadius:50,marginRight:'10px'}} onClick={() => colorpicker(color)} ></div>

                ))
              }
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
