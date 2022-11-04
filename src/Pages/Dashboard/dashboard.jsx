import React, { useState } from 'react'
import Header from '../../Components/Header'
import Takenote1 from '../../Components/Takenote1'
import Takenote2 from '../../Components/Takenote2'

export default function Dashboard() {
    const [noteSwitch,setnoteSwitch] = useState(false)

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

    </div>
  )
}
