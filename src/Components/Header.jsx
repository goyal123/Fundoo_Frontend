import React from 'react'
import Style from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { blue, green, red } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height:50,
  borderRadius:3,
  marginTop:10,
  border: '1px solid black',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '50%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '50%',
    [theme.breakpoints.up('md')]: {
      width: '80ch',
    },
  },
}));

export default function Header() {
  return (
    <div className={Style.Header}>
      <MenuIcon style={{marginTop:20,marginLeft:22}}/>
        <div className={Style.imgset}>
            <img src='./keep.png' height="40"></img> 
        </div>
        <div className={Style.textset}>
            <p className={Style.normal}>Keep</p>
        </div>
        <Search style={{width:'52vw',marginLeft:'80px',marginTop:10,borderRadius:7}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search'}}
            />
          </Search>

        <RefreshIcon sx={{ marginLeft: 20,marginTop:3}} />
        <GridViewOutlinedIcon sx={{ marginLeft: 2,marginTop:3}}/>
        <SettingsOutlinedIcon sx={{ marginLeft: 2,marginTop:3}}/>
        <AppsIcon sx={{ marginLeft:8,marginTop:3}}/>
        <AccountCircleOutlinedIcon sx={{ marginLeft:1.5,marginRight:4,marginTop:3}}/>
        
    </div>
  )
}
