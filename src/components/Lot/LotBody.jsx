import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/UseContext'
import { AddLoot } from './AddLoot'
import { ProgressBar } from './ProgressBar'


export const LootBody = () => {

    const {user} = useContext(AuthContext)
    const [lot, setLot] = useState(null)

    return (
        <div>
            <div className="py-5">
                <div className="container">
                    {lot? <ProgressBar lot={lot} setLot={setLot}/> : ""}
                    {user? <AddLoot setLot={setLot}/> : ""}
                </div>
            </div>
        </div>
    )
}
