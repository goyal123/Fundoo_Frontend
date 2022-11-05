import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Takenote1 from '../../Components/Takenote1'
import Takenote2 from '../../Components/Takenote2'
import Takenote3 from '../../Components/Takenote3'
import { getNoteListApi } from '../../services/dataService'
import Style from './dashboard.module.css'

export default function Dashboard() {
    const [noteSwitch,setnoteSwitch] = useState(false)
    const [note3List,setNote3List] = useState([])

    useEffect(() => {
      getNoteListApi().then((response) => {
        console.log(response)
        setNote3List(response.data.data.data)
      }).catch((error) => {
        console.log(error)
      })
    },[])

    const listentotakenote1=() => {
        setnoteSwitch(true)
    }

    const listentotakenote2=() => {
      setnoteSwitch(false)
  }

  return (
    <div>
        <Header/>
        {
            noteSwitch ? <Takenote2 listentotakenote2={listentotakenote2}/> : <Takenote1 listentotakenote1={listentotakenote1}/>
        }
        <div className={Style.container}>
          {
            note3List.map((note) => (<Takenote3 note={note}/>))
          }
        </div>
    </div>
  )
}
