import React, { useEffect, useState } from 'react'
import MiniDrawer from '../../Components/drawer/MiniDrawer'
import Header from '../../Components/Header'
import Takenote1 from '../../Components/Takenote1'
import Takenote2 from '../../Components/Takenote2'
import Takenote3 from '../../Components/Takenote3'
import { getNoteListApi } from '../../services/dataService'
import Style from './dashboard.module.css'


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
        let filterNote = [] 
        if(noteChoice==='Notes')
            {
                filterNote = response.data.data.data.filter((notes) => {
                    if(notes.isArchived===false && notes.isDeleted===false)
                    return notes
                })
            }
            else if (noteChoice==='Archive')
            {
                filterNote = response.data.data.data.filter((notes) => {
                    if(notes.isArchived===true && notes.isDeleted===false)
                    return notes
                })
            }
            else if (noteChoice==='Trash')
            {
                filterNote = response.data.data.data.filter((notes) => {
                    if(notes.isArchived===false && notes.isDeleted===true)
                    return notes
                })
            }
        console.log("getnote",response)
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
      setnoteSwitch(false)
  }

  return (
    <div>
        <Header listentoheader={listentoheader}/>
        <MiniDrawer drawerToggle={drawerToggle} listenToDrawer={listenToDrawer}/>
       {/* <Headernew/> */}
        {
            noteSwitch ? <Takenote2 listentotakenote2={listentotakenote2}/> : <Takenote1 listentotakenote1={listentotakenote1}/>
        }
        <div className={Style.container}>
          { 
            note3List.map((note) => (<Takenote3 note={note} getnotenew={getnotenew}/>))
          }
        </div>
        
    </div>
  )
}
