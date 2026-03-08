export const NewTask = ({task}) =>{
    console.log(task)
    return (
        <div className="bg-amber-400 h-full w-[350px] rounded-xl shrink-0 p-5 flex flex-col justify-around">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 w-fit py-1.5 px-3 rounded-lg font-semibold text-white">High</h3>
                <h4 className="font-semibold">20 feb 2024</h4>
            </div>
            <div>
                <h2 className="mt-6 font-semibold text-xl">{task.taskTitle}</h2>
            <p className="text-sm mt-2">{task.taskDescription}</p>
            </div>
            <div className="mt-5 text-center">
                <button className="w-full bg-orange-500 rounded font-semibold px-2 py-1">Accept Task</button>
            </div>
        </div> 
    )
}