import React, { useEffect } from 'react'
import {motion} from "framer-motion"
import useStorage from '../../Hooks/useStorage'



export const ProgressBar = ({setLot,lot}) => {
    const {progress, isCompleted} = useStorage(lot)

    useEffect(()=>{
        if (isCompleted){
            setLot(null)
        }
    },[isCompleted,setLot])
    return (
        <motion.div style={{height: "7px", background:"black"}} initial={{width: 0}} animate={{width: `${progress}%`}}/>
    )
}
