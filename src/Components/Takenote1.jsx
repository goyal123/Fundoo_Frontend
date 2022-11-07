import React from 'react'
import Style from './Takenote1.module.css';
import TextField from '@mui/material/TextField';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

export default function Takenote1(props) {
    const funhandlenote1=() => {
        props.listentotakenote1()
    }

    return (
        <>
            <div className={Style.note1container} onClick={funhandlenote1}>
                <TextField type={'text'} sx={{ marginLeft:0,marginTop:0, width:1}} placeholder="Take a note" />  
                <div className={Style.note1container2}>
                    <CheckBoxOutlinedIcon sx={{marginTop:0,marginLeft:1}}/>
                </div>
                <BrushOutlinedIcon sx={{marginTop:3,marginLeft:4}}/>
                <InsertPhotoOutlinedIcon sx={{marginTop:3,marginLeft:4}}/>
            </div>

        </>

    )
}
