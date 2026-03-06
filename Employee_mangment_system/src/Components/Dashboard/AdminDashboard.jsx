import { AllTask } from "../other/AllTask"
import { CreateTask } from "../other/CreateTask"
import { Header } from "../other/Header"

export const AdminDashboard = () => {
    return (
        <div className="h-screen w-full">
            < Header />
            < CreateTask />
            < AllTask />
        </div>
    )
}