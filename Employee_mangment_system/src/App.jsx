import { useContext, useEffect, useState } from "react"
import { Login } from "./Components/Auth/Login"
import { AdminDashboard } from "./Components/Dashboard/AdminDashboard"
import { EmployeeDashboard } from "./Components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./Context/AuthProvider"

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null)
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  //     console.log(loggedUser)
  //   }
    
  // },[authData])

 const handleLogin = (email, password) => {
  if (authData) {
    const employee = authData.employees.find((e) => e.email === email && e.password === password);
    
    if(employee){
      setUser("employee");
      setLoggedUser(employee)
    }
    localStorage.setItem("loggedUser", JSON.stringify({role : "employee"}))
  }
  else {
    alert("Invalide candential")
  }
}

  return (
    < div className="w-screen">
      {!user && < Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && < EmployeeDashboard user={loggedUser}/>}
    </ div>
  )
}
export default App