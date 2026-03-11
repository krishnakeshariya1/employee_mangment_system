import { useContext, useEffect, useState } from "react"
import { Login } from "./Components/Auth/Login"
import { AdminDashboard } from "./Components/Dashboard/AdminDashboard"
import { EmployeeDashboard } from "./Components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./Context/AuthProvider"
import { AdminContext } from "./Context/AdminProvider"

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null)
  const [authData, setAuthData] = useContext(AuthContext);
  const admin = useContext(AdminContext);

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser")

    if (loggedUser) {
      const userData = JSON.parse(loggedUser);

      if (userData.role && userData.data) {
        setUser(userData.role)
        setLoggedUser(userData.data)
      }
    }
  }, [])

  const handleLogin = (email, password) => {
  
    const ad = admin.find((e)=>{
      return e.email === email && password === e.password;
    })

  if(ad){
    setUser("admin");
    setLoggedUser(ad);
    localStorage.setItem(
      "loggedUser",
      JSON.stringify({ role: "admin", data: ad })
    );
    return;
  }

  const employee = authData?.find(e =>
    e.email === email && e.password === password
  );

  if(employee){
    setUser("employee");
    setLoggedUser(employee);
    localStorage.setItem(
      "loggedUser",
      JSON.stringify({ role: "employee", data: employee })
    );
    return;
  }

  alert("Invalid credentials");
};

  const logOutFnc = () => {
    localStorage.removeItem("loggedUser")
    setUser("")
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