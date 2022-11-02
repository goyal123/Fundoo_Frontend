import React from 'react'
import Style from './Takenote1.module.css';
import TextField from '@mui/material/TextField';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

export default function Takenote1() {
    return (
        <>
            <div className={Style.note1container}>
                <TextField type={'text'} sx={{ marginLeft:20,marginTop:1, width:0.5}} placeholder="Take a note"/>  
                <div className={Style.note1container2}>
                    <CheckBoxOutlinedIcon/>
                </div>
                <BrushOutlinedIcon sx={{marginTop:3,marginLeft:4}}/>
                <InsertPhotoOutlinedIcon sx={{marginTop:3,marginLeft:4}}/>
            </div>

        </>

    )
}
