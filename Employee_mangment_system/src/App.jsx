import { useContext, useEffect, useState } from "react"
import { Login } from "./Components/Auth/Login"
import { AdminDashboard } from "./Components/Dashboard/AdminDashboard"
import { EmployeeDashboard } from "./Components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./Context/AuthProvider"

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null)
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser")
    
    if(loggedUser){
      const userData = JSON.parse(loggedUser)
      setUser(userData.role)
      setLoggedUser(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email === 'keshariyakrishna8@gmail.com' && password === "224755") {
      setUser("admin");
      setLoggedUser(authData.admin[0]);
      localStorage.setItem("loggedUser", JSON.stringify({ role: "admin",  data : authData.admin }))
    }
    else if (authData) {
      const employee = authData.employees.find((e) => e.email === email && e.password === password);

      if (employee) {
        setUser("employee");
        setLoggedUser(employee)
      }
      localStorage.setItem("loggedUser", JSON.stringify({ role: "employee", data : employee }))
    }
    else {
      alert("Invalide candential")
    }
  }

  const logOutFnc = () =>{
    localStorage.setItem("loggedUser", '')
    window.location.reload()
  }

  return (
    < div className="w-screen">
      {!user && < Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard user={loggedUser} logOutFnc={logOutFnc} />}
      {user === "employee" && < EmployeeDashboard user={loggedUser} logOutFnc={logOutFnc} />}
    </ div>
  )
}
export default App