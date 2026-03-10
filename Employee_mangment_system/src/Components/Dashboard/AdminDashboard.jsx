import { AllTask } from "../other/AllTask"
import { CreateTask } from "../other/CreateTask"
import { Header } from "../other/Header"

export const AdminDashboard = ({user, logOutFnc }) => {
    return (
        <div className="h-screen w-full">
            < Header  logOutFnc={logOutFnc} user={user} />
            < CreateTask />
            < AllTask />
        </div>
    )
}