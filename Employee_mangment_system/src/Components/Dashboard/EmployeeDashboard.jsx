import { Header } from "../other/Header"
import { TaskListNumbers } from "../other/TaskLisstNumbers"
import { TaskList } from "../TaskList/TaskList"

export const EmployeeDashboard = () =>{
    return(
        <div className="h-screen">
            < Header />
            <TaskListNumbers />
            <TaskList />
        </div>
    )
}