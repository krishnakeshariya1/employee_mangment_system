export const TaskListNumbers = ({user}) =>{
    console.log(user)
    return(
        <div className=" w-screen mt-14 flex gap-4 px-4">
            <div className="bg-sky-500 rounded-xl px-14 py-7 w-full">
                <h2 className="text-3xl font-semibold" >{user.taskNumbers.newTask}</h2>
                <h2 className="text-xl font-bold ">New Task</h2>
            </div>
            <div className="bg-fuchsia-500 h-40 rounded-xl px-14 py-7 w-full">
                <h2 className="text-3xl font-semibold" >{user.taskNumbers.active}</h2>
                <h2 className="text-xl font-bold ">Active Task</h2>
            </div>
            <div className="bg-lime-500 h-40 rounded-xl px-14 py-7 w-full">
                <h2 className="text-3xl font-semibold" >{user.taskNumbers.completed}</h2>
                <h2 className="text-xl font-bold ">Completed Task</h2>
            </div>
            <div className="bg-yellow-500 h-40 rounded-xl px-14 py-7 w-full">
                <h2 className="text-3xl font-semibold" >{user.taskNumbers.failed}</h2>
                <h2 className="text-xl font-bold ">Failed Task</h2>
            </div>
        </div>
    )
}