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
        border:'0.1mm',
        borderRadius: '2mm',
        outline:'0',
    },
    note1container2:{
        textAlign: 'center',
        marginTop: '0.7cm',
        marginLeft: '-4.5cm'
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
                    <CheckBoxOutlinedIcon sx={{marginTop:0,marginLeft:1}}/>
                </div>
                <BrushOutlinedIcon sx={{marginTop:3,marginLeft:4}}/>
                <InsertPhotoOutlinedIcon sx={{marginTop:3,marginLeft:4}}/>
            </Paper>
        </>

    )
}
