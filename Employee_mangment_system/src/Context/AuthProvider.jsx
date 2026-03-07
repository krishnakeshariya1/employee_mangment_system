import { createContext } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    return(
        <div>
            <AuthContext.Provider value={"krishna"} >
                {children}
            </AuthContext.Provider>
        </div>
    )
}