import React from 'react'
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
import { connect } from 'react-redux'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  Header:{
    display: 'flex',
    flexDirection: 'row',
    width:'99.7vw',
    height: '10.5vh',
    marginTop: '-3.5%',

  },
  normal:{
    display: 'flex',
    fontWeight: 'normal',
    fontSize:'x-large',
    marginLeft: '5mm',
    marginTop: '4mm',
    marginRight: '4mm',
    width:'7vw'
  },
  normal2:{
    display: 'flex',
    fontWeight: 'normal',
    fontSize:'x-large',
    marginLeft: '2mm',
    marginTop: '1mm',
    marginRight: '4mm',
    width:'7vw'
  },
  normal3:{
    width: '52vw',
    marginLeft: '80px',
    marginTop: '1px',
    borderRadius: 7
  },
  normal4:{
    marginLeft: '11%',
     marginTop: '23px',
     marginRight:'10px'
  },
  normal5:{
     marginTop: '23px',
     marginRight:'15px'
  },
  normal6:{
    marginTop: '23px',
    marginRight:'5px'
 },
 normal7:{
  marginLeft:'5%',
  marginTop: '23px',
  marginRight:'15px'
},
normal8:{
  marginTop: '23px',
  marginRight:'5px'
},


  ['@media screen and (min-width:200px) and (max-width : 768px)']:{
    Header:{

    },
    normal:{

    },
    normal2:{

    },
    normal3:{

    },
    normal4:{

    },
    normal5:{

    },
    normal6:{

    },
    normal7:{

    },
    normal8:{

    }



  }
})

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: 50,
  borderRadius: 3,
  marginTop: 10,
  border: '0px solid black',
  backgroundColor:'lightgray'
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

function Header(props) {
  const classes = useStyle()   
  const menubutton = () => {
    props.listentoheader()
  }

  const mapStateToProps = (state) => {
    console.log(state)
    return {
      label: state.drawerReducer.label
    }
  }

  return (
    <>
      <Box className={classes.Header}>
          <MenuIcon style={{ marginTop: 20, marginLeft: 20 }} onClick={menubutton} />

        <div>
            <p className={classes.normal}>{props.label}
            <p className={classes.normal2}>{props.label2}</p>
             </p>
        </div>
        <div className={classes.normal3}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        </div>
        
        <div className={classes.normal4}>
        <RefreshIcon/>
        </div>
        <div className={classes.normal5}>
        <GridViewOutlinedIcon/>
        </div>

        <div className={classes.normal6}>
        <SettingsOutlinedIcon/>
        </div>
        <div className={classes.normal7}>
        <AppsIcon/>
        </div>
        <div className={classes.normal8}>
        <AccountCircleOutlinedIcon/>
        </div>
        
      </Box>
    </>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    label: state.drawerReducer.label,
    label2: state.drawerReducer.label2
  }
}

export default connect(mapStateToProps)(Header)