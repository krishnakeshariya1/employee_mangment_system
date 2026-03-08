import { Header } from "../other/Header"
import { TaskListNumbers } from "../other/TaskLisstNumbers"
import { TaskList } from "../TaskList/TaskList"

export const EmployeeDashboard = ({user}) =>{
    console.log(user)
    return(
        <div className="h-screen">
            < Header  user={user}/>
            <TaskListNumbers user={user} />
            <TaskList />
        </div>
    )
}