import React, { useEffect, useState } from 'react'
import MiniDrawer from '../../Components/drawer/MiniDrawer'
import Header from '../../Components/Header'
import Takenote1 from '../../Components/Takenote1'
import Takenote2 from '../../Components/Takenote2'
import Takenote3 from '../../Components/Takenote3'
import { getNoteListApi } from '../../services/dataService'
import Style from './dashboard.module.css'
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';


export default function Dashboard() {
    const [noteSwitch,setnoteSwitch] = useState(false)
    const [note3List,setNote3List] = useState([])
    const [drawerToggle,setdrawerToggle] = useState(false)
    const [noteChoice,setNoteChoice] = useState("Notes")

    const listentoheader=() => {
        setdrawerToggle(!drawerToggle)
    }

    const listenToDrawer = (options) => {
      setNoteChoice(options)
  }

    const getnotenew=() => {
      getNoteListApi().then((response) => {
        console.log(response)
        let filterNote = [] 
        if(noteChoice==='Notes')
            {
                filterNote = response.data.data.filter((notes) => {
                    if(notes.archieve===false && notes.trash===false)
                    return notes
                })
            }
            else if (noteChoice==='Archive')
            {
                filterNote = response.data.data.filter((notes) => {
                    if(notes.archieve===true && notes.trash===false)
                    return notes
                })
            }
            else if (noteChoice==='Trash')
            {
                filterNote = response.data.data.filter((notes) => {
                    if(notes.archieve===false && notes.trash===true)
                    return notes
                })
            }
            
        //console.log("getnote",response)
        // setNote3List(response.data.data.data)
        setNote3List(filterNote)
      }).catch((error) => {
        console.log(error)
      })
    }

    useEffect(() => {
      getnotenew()
    },[noteChoice])

    const listentotakenote1=() => {
        setnoteSwitch(true)
    }

    const listentotakenote2=() => {
      getnotenew()
      setnoteSwitch(false)
  }

  return (
    <div>
       <Grid container spacing={1}>
       <Grid item xs={12}>
        <Header listentoheader={listentoheader}/>
       </Grid>
       <Grid item xs={3}>
        <MiniDrawer drawerToggle={drawerToggle} listenToDrawer={listenToDrawer}/>
       </Grid>
       
        {
            noteSwitch ? <Grid item xs={4}> <Takenote2 listentotakenote2={listentotakenote2}/> </Grid> : <Grid item xs={4}> <Takenote1 listentotakenote1={listentotakenote1}/> </Grid>
        }
        <Grid item xs={6}>
        <div className={Style.container}>
          { 
            note3List.map((note) => (<Takenote3 note={note} getnotenew={getnotenew}/>))
          }
        </div>
        </Grid>
        
        </Grid>
        
    </div>
  )
}
