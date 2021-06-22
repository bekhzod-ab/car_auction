import { createContext, useState, useEffect } from "react";
import { authApp } from "../components/config/firebase";

export const AuthContext = createContext();

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const login = (email,password) => {
        return authApp.signInWithEmailAndPassword(email,password)
    }

    const register = (email,password) => {
        return authApp.createUserWithEmailAndPassword(email,password)
    }

    const logout = () => {
        return authApp.signOut()
    }

    useEffect(() => {
        const name = authApp.onAuthStateChanged((user) => {
            setUser(user)
        });
        return name  
    }, [])


    return(
        <AuthContext.Provider value={{login,register,user,logout}}>
            {children}
        </AuthContext.Provider>
    )
}