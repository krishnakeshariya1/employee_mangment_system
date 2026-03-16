import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

export const CreateTask = () => {

    const [data, setData] = useContext(AuthContext);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [assign , setAssign] = useState("");
    const [catg, setCatg] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault();

        const newTask = {"active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": title,
        "taskDescription": desc,
        "taskDate": date,
        "taskCategory": catg}

        const userData = data.map((emp)=>{
            if(emp.name.toLowerCase().trim() === assign.toLowerCase().trim()){
                return {
                    ... emp,
                    tasks : [...emp.tasks, newTask],
                    taskNumbers : {
                        ...emp.taskNumbers,
                        active : emp.taskNumbers.active +1,
                        newTask : emp.taskNumbers.newTask + 1
                    }
                }
            }
            return emp
        })
        
        setData(userData);

        setTitle("");
        setAssign("");
        setCatg("")
        setDate("");
        setDesc("");

        console.log(JSON.parse(localStorage.getItem("employees")));
    }

    return (
    <div className="mt-10 rounded">
        <form
            className="bg-gray-200 flex flex-col lg:flex-row flex-wrap w-full items-start justify-between p-4 sm:p-5 gap-6"
            onSubmit={(e) => {
                submitHandler(e);
            }}
        >

            <div className="text-black w-full lg:w-1/2 flex flex-col gap-4">

                <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Task Title</h3>
                    <input
                        type="text"
                        placeholder="Make a Ui of Admin dashboard"
                        className="text-sm py-2 px-3 w-full lg:w-4/5 border rounded placeholder:text-gray-500 outline-none"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </div>

                <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Date</h3>
                    <input
                        type="date"
                        className="text-sm py-2 px-3 w-full lg:w-4/5 border rounded placeholder:text-gray-500 outline-none"
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                    />
                </div>

                <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Assign to :</h3>
                    <input
                        type="text"
                        className="text-sm py-2 px-3 w-full lg:w-4/5 border rounded placeholder:text-gray-500 outline-none"
                        value={assign}
                        onChange={(e) => {
                            setAssign(e.target.value);
                        }}
                    />
                </div>

                <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Category</h3>
                    <input
                        type="text"
                        className="text-sm py-2 px-3 w-full lg:w-4/5 border rounded placeholder:text-gray-500 outline-none"
                        value={catg}
                        onChange={(e) => {
                            setCatg(e.target.value);
                        }}
                    />
                </div>

            </div>

            <div className="w-full lg:w-2/5 flex flex-col items-start gap-3">
                <h3 className="font-semibold text-base sm:text-lg mb-1">Task Description</h3>

                <textarea
                    cols={25}
                    rows={5}
                    className="border rounded text-sm w-full h-40 sm:h-44 bg-transparent p-2 outline-none"
                    value={desc}
                    onChange={(e) => {
                        setDesc(e.target.value);
                    }}
                />

                <button
                    className="bg-green-500 px-3 py-2 rounded font-semibold w-full hover:bg-green-600"
                >
                    Create Task
                </button>
            </div>

        </form>
    </div>
)
}