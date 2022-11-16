import React from 'react'
import TextField from '@mui/material/TextField';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';


const useStyle = makeStyles({
    
    note1container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop:'1cm',
        marginLeft: '11cm',
        width:'50vw',
        height:'8vh',
        
    },
    iconset:{
        marginRight:'30px'
    },
    note1container2:{
        display:'flex',
        width:'10vw',
        textAlign: 'center',
        marginTop: '20px',
        marginLeft: '-4cm',

    },
    ['']:{
        
    }
    
})

export default function Takenote1(props) {
    const classes = useStyle()   
    const funhandlenote1=() => {
        props.listentotakenote1()
    }

    return (
        <>
            <Paper elevation={3} className={classes.note1container} onClick={funhandlenote1}>
                <TextField  type={'text'} sx={{ marginLeft:0,marginTop:0, width:1}} placeholder="Take a note" />  
                <div className={classes.note1container2}>
                    <div className={classes.iconset}>
                    <CheckBoxOutlinedIcon/>
                    </div>
                    <div className={classes.iconset}>
                        <BrushOutlinedIcon/>
                    </div>
                    <div className={classes.iconset}> 
                        <InsertPhotoOutlinedIcon/>
                    </div>

                </div>
                
            </Paper>
        </>

    )
}
