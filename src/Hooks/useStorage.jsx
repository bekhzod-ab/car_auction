import { useState } from "react";
import { firestoreApp, storageApp, timestamp } from "../components/config/firebase";


export default function useStorage(lotItem){

    const [progress, setProgress] = useState(0)
    const [isCompleted, setIsCompleted] = useState(null)

    useState(()=>{

        const storageRef = storageApp.ref(lotItem.itemImage.name)
        const collectionRef = firestoreApp.collection("lots")

        storageRef.put(lotItem.itemImage).on("state_changed",(snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        }, (err) => {
            console.log(err.message)
        }, async()=> {
            const imgUrl = await storageRef.getDownloadURL();
            const createdAt = timestamp;
            delete lotItem.itemImage;
            await collectionRef.add({...lotItem, createdAt,imgUrl})
        })

    }, [lotItem])
}