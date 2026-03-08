import { Header } from "../other/Header"
import { TaskListNumbers } from "../other/TaskLisstNumbers"
import { TaskList } from "../TaskList/TaskList"

export const EmployeeDashboard = ({user, logOutFnc}) =>{
    return(
        <div className="h-screen">
            < Header  user={user} logOutFnc={logOutFnc}/>
            <TaskListNumbers user={user} />
            <TaskList user={user}/>
        </div>
    )
}