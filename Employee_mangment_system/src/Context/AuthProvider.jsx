import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../Ulits/localStorage"

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

    const [data, setData] = useState(null)

    
    useEffect(()=>{
        setLocalStorage()
        const {employees, admin} = getLocalStorage();
        setData({employees, admin})
    },[])

    return(
        <div>
            <AuthContext.Provider value={data} >
                {children}
            </AuthContext.Provider>
        </div>
    )
}