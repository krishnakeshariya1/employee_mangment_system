import { Login } from "./Components/Auth/Login"
import { AdminDashboard } from "./Components/Dashboard/AdminDashboard"
import { EmployeeDashboard } from "./Components/Dashboard/EmployeeDashboard"

const App =()=>{
  return(
    < div className="w-screen">
    {/* < Login /> */}
    {/* < EmployeeDashboard /> */}
    < AdminDashboard />
    </ div>
  )
}
export default App