export const TaskListNumbers = ({user}) => {
    return(
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">

            <div className="bg-sky-500 rounded-xl px-6 py-6">
                <h2 className="text-2xl sm:text-3xl font-semibold">
                    {user.taskNumbers.newTask}
                </h2>
                <h2 className="text-lg sm:text-xl font-bold">
                    New Task
                </h2>
            </div>

            <div className="bg-fuchsia-500 rounded-xl px-6 py-6">
                <h2 className="text-2xl sm:text-3xl font-semibold">
                    {user.taskNumbers.active}
                </h2>
                <h2 className="text-lg sm:text-xl font-bold">
                    Active Task
                </h2>
            </div>

            <div className="bg-lime-500 rounded-xl px-6 py-6">
                <h2 className="text-2xl sm:text-3xl font-semibold">
                    {user.taskNumbers.completed}
                </h2>
                <h2 className="text-lg sm:text-xl font-bold">
                    Completed Task
                </h2>
            </div>

            <div className="bg-yellow-500 rounded-xl px-6 py-6">
                <h2 className="text-2xl sm:text-3xl font-semibold">
                    {user.taskNumbers.failed}
                </h2>
                <h2 className="text-lg sm:text-xl font-bold">
                    Failed Task
                </h2>
            </div>

        </div>
    )
}