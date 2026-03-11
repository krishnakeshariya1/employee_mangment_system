import { Children, createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Ulits/localStorage";

export const AdminContext = createContext();

export const AdminProvider = ({children}) =>{
     
    const [admin, setAdmin] = useState(() => {
        if(!localStorage.getItem("admin")){
            setLocalStorage()
        }
        const {admin: adminData} = getLocalStorage();
        return adminData;
    });

    return(
                <AdminContext.Provider value={admin} >
                    {children}
                </AdminContext.Provider>
        )
}