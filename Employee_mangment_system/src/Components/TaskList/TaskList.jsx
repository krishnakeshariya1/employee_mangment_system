import { AcceptTask } from "./AcceptTask"
import { CompletedTask } from "./CompleteTask"
import { FailedTask } from "./FailedTask"
import { NewTask } from "./NewTask"

export const TaskList = ({ user }) => {
    return (
        <div
            id="taskList"
            className="mt-10 w-full py-10 px-4 sm:px-6 lg:px-10 bg-gray-200 rounded-xl"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-10 justify-items-center ">

                {user.tasks.map((task, idx) => {

                    if (task.active) {
                        return (
                            <div key={idx} className="w-full max-w-xs md:max-w-sm text-sm md:text-base">
                                <AcceptTask task={task} />
                            </div>
                        )
                    }

                    if (task.newTask) {
                        return (
                            <div key={idx} className="w-full max-w-xs md:max-w-sm text-sm md:text-base">
                                <NewTask task={task} />
                            </div>
                        )
                    }

                    if (task.completed) {
                        return (
                            <div key={idx} className="w-full max-w-xs md:max-w-sm text-sm md:text-base">
                                <CompletedTask task={task} />
                            </div>
                        )
                    }

                    if (task.failed) {
                        return (
                            <div key={idx} className="w-full max-w-xs md:max-w-sm text-sm md:text-base">
                                <FailedTask task={task} />
                            </div>
                        )
                    }

                    return null
                })}

            </div>
        </div>
    )
}