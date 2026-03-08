export const CompletedTask = ({task}) => {
    return (
        <div className="bg-amber-400 h-full w-[350px] rounded-xl shrink-0 p-5 flex flex-col justify-around">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 w-fit py-1.5 px-3 rounded-lg font-semibold text-white">High</h3>
                <h4 className="font-semibold">20 feb 2024</h4>
            </div>
            <div>
                <h2 className="mt-6 font-semibold text-xl">{task.taskTitle}</h2>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni suscipit exercitationem quae explicabo quia?</p>
            </div>
            <div className="mt-5 text-center">
                <button className=" w-full bg-green-500 rounded font-semibold px-2 py-1">Completed</button>
            </div>
        </div>
    )
}