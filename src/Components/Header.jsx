import React from 'react'
import Style from './Header.module.css'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



export default function Header() {
  return (
    <div className={Style.Header}>
        <DensityMediumIcon sx={{marginTop:3,marginLeft:3}}/>
        <div className={Style.imgset}>
            <img src='./keep.png' height="40"></img> 
        </div>
        <div className={Style.textset}>
            <p className={Style.normal}>Keep</p>
        </div>

        <TextField type={'text'} sx={{ marginLeft:10,marginTop:1, width:0.5}} placeholder="Search" />  
        <div className={Style.note1container2}>
            <SearchOutlinedIcon/>
        </div>
        <RefreshIcon sx={{ marginLeft: 20,marginTop:3}} />
        <GridViewOutlinedIcon sx={{ marginLeft: 2,marginTop:3}}/>
        <SettingsOutlinedIcon sx={{ marginLeft: 2,marginTop:3}}/>
        <AppsIcon sx={{ marginLeft:8,marginTop:3}}/>
        <AccountCircleOutlinedIcon sx={{ marginLeft:2,marginRight:2,marginTop:3}}/>
        
    </div>
  )
}
