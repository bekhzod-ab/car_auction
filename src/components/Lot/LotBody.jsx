import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/UseContext'
import { useFirestoreDB } from '../../Hooks/useFirestoreDB'
import { AddLoot } from './AddLoot'
import { ProgressBar } from './ProgressBar'
import { LotCard } from './LotCard'


export const LootBody = () => {

    const {user} = useContext(AuthContext)
    const [lot, setLot] = useState(null)
    const {docs} = useFirestoreDB("lots")
    console.log(docs)

    return (
        <div>
            <div className="py-5">
                <div className="container">
                    {lot && <ProgressBar lot={lot} setLot={setLot}/>}
                    {user && <AddLoot setLot={setLot}/>}

                    {docs && (
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {docs.map((doc)=> {
                                return <LotCard item={doc} key={doc.id}/>
                            })}
                        </div>) }
                </div>
            </div>
        </div>
    )
}
