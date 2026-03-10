import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../Ulits/localStorage"

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

    const [data, setData] = useState(null)

    
    useEffect(()=>{
        setLocalStorage()
        const {employees} = getLocalStorage();
        setData(employees)
    },[])

    return(
        <div>
            <AuthContext.Provider value={[data , setData]} >
                {children}
            </AuthContext.Provider>
        </div>
    )
}

