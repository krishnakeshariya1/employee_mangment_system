import { useContext, useEffect, useState } from "react"
import { Login } from "./Components/Auth/Login"
import { AdminDashboard } from "./Components/Dashboard/AdminDashboard"
import { EmployeeDashboard } from "./Components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./Context/AuthProvider"

const App =()=>{

  const [user, setUser] = useState(null);

  const handleLogin = (email, password)=>{
    console.log(email, password)
  }

  const data = useContext(AuthContext);

  return(
    < div className="w-screen">
      { !user && < Login  handleLogin={handleLogin}/>}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && < EmployeeDashboard />}
    </ div>
  )
}
export default App