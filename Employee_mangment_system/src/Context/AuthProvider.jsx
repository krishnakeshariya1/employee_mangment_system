import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../Ulits/localStorage"

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{


    const [data, setData] = useState(() => {
        if(!localStorage.getItem("employees")){
            setLocalStorage()
        }
        const {employees} = getLocalStorage();
        return employees;
    },[]);

    useEffect(() => {
        setLocalStorage({ employees: data });
    }, [data]);

    return(
        <div>
            <AuthContext.Provider value={[data , setData]} >
                {children}
            </AuthContext.Provider>
        </div>
    )
}

