export const AcceptTask = ({task}) => {
    return (
        <div className="bg-amber-400 h-auto w-[350px] rounded-xl shrink-0 p-5">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 w-fit py-1.5 px-3 rounded-lg font-semibold text-white">High</h3>
                <h4 className="font-semibold">20 feb 2024</h4>
            </div>
            <h2 className="mt-6 font-semibold text-xl">{task.taskTitle}</h2>
            <p className="text-sm mt-2">{task.taskDescription}</p>
            <div className=" flex justify-between mt-5 gap-5 items-center font-semibold ">
                <button className="bg-green-500 text-sm py-1 px-2 rounded ">Mark as Completed</button>
                <button className="bg-red-500 text-sm py-1 px-2 rounded ">Mark as Failed</button>
            </div>
        </div>
    )
}