import React from 'react'
import TextField from '@mui/material/TextField';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import { SosOutlined } from '@mui/icons-material';


const useStyle = makeStyles({
    
    note1container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop:'30px',
        marginLeft: '36%',
        width:'46vw',
        height:'8vh',
        
    },
    iconset:{
        marginRight:'30px'
    },
    textset:{
        width:'46vw',
    },
    note1container2:{
        display:'flex',
        width:'10vw',
        textAlign: 'center',
        marginTop: '20px',
        marginLeft: '-25%',
        

    },
    ['@media screen and (min-width:421px) and (max-width : 768px)']:{
        note1container:{
            backgroundColor:'red'
        },
        note1container2:{
            backgroundColor:'red'
        },
        iconset:{
            backgroundColor:'red'
        },
        textset:{
            backgroundColor:'red'
        }



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
                <TextField  type={'text'} className={classes.textset}  placeholder="Take a note" />  
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
