import React from 'react'
import {motion} from "framer-motion"



export const ProgressBar = ({setLot,lot}) => {

    return (
        <motion.div style={{height: "7px", background:"black"}} initial={{width: 0}} animate={{width: "7%"}}/>
    )
}
