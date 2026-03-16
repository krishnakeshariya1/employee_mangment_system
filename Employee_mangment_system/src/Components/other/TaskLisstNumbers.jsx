export const TaskListNumbers = ({ user }) => {
    return (
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                <div className="bg-sky-500 rounded-xl p-6 flex flex-col justify-between min-h-[110px]">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        {user.taskNumbers.newTask}
                    </h2>
                    <p className="text-base md:text-lg font-bold">
                        New Task
                    </p>
                </div>

                <div className="bg-fuchsia-500 rounded-xl p-6 flex flex-col justify-between min-h-[110px]">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        {user.taskNumbers.active}
                    </h2>
                    <p className="text-base md:text-lg font-bold">
                        Active Task
                    </p>
                </div>

                <div className="bg-lime-500 rounded-xl p-6 flex flex-col justify-between min-h-[110px]">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        {user.taskNumbers.completed}
                    </h2>
                    <p className="text-base md:text-lg font-bold">
                        Completed Task
                    </p>
                </div>

                <div className="bg-yellow-500 rounded-xl p-6 flex flex-col justify-between min-h-[110px]">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        {user.taskNumbers.failed}
                    </h2>
                    <p className="text-base md:text-lg font-bold">
                        Failed Task
                    </p>
                </div>

            </div>
        </div>
    )
}