import { AcceptTask } from "./AcceptTask"
import { CompletedTask } from "./CompleteTask"
import { FailedTask } from "./FailedTask"
import { NewTask } from "./NewTask"

export const TaskList = ({ user }) => {
    return (
        <div id="taskList" className="bg-gray-100 mt-10 h-1/2 w-full py-10 px-4 flex gap-10 items-center justify-start flex-nowrap overflow-x-auto">
            {user.tasks.map((task, idx) => {

                if(task.active) return  < AcceptTask task={task} key={idx}/>
                
                if(task.newTask) return < NewTask key={idx}/>

                if(task.completed) return < CompletedTask key={idx}/>

                if(task.failed) return < FailedTask key={idx}/>
            })}
        </div>
    )
}