import { useState } from "react";
import { firestoreApp, storageApp, timestamp } from "../components/config/firebase";


export default function useStorage(data){

    const [progress, setProgress] = useState(0)
    const [isCompleted, setIsCompleted] = useState(null)

    useState(()=>{

        const storageRef = storageApp.ref(data.vehicleImage.name)
        const collectionRef = firestoreApp.collection("lots")

        storageRef.put(data.vehicleImage).on("state_changed",(snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        }, (err) => {
            console.log(err.message)
        }, async()=> {
            const imgUrl = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            delete data.vehicleImage;
            await collectionRef.add({...data, createdAt,imgUrl})
            setIsCompleted(true)
        })

    }, [data])
    return {progress, isCompleted}
}