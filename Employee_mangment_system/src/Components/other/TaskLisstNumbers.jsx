export const TaskListNumbers = ({user}) =>{
    console.log(user)
    return(
        <div className=" w-screen mt-14 flex gap-4 px-4">
            <div className="bg-sky-500 rounded-xl px-14 py-6 w-full">
                <h2 className="text-3xl font-semibold" >0</h2>
                <h2 className="text-xl font-bold ">New Task</h2>
            </div>
            <div className="bg-fuchsia-500 h-40 rounded-xl px-14 py-6 w-full">
                <h2 className="text-3xl font-semibold" >0</h2>
                <h2 className="text-xl font-bold ">New Task</h2>
            </div>
            <div className="bg-lime-500 h-40 rounded-xl px-14 py-6 w-full">
                <h2 className="text-3xl font-semibold" >0</h2>
                <h2 className="text-xl font-bold ">New Task</h2>
            </div>
            <div className="bg-yellow-500 h-40 rounded-xl px-14 py-6 w-full">
                <h2 className="text-3xl font-semibold" >0</h2>
                <h2 className="text-xl font-bold ">New Task</h2>
            </div>
        </div>
    )
}