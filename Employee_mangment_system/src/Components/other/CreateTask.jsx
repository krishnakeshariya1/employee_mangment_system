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

        const userData = data;
        userData.forEach((emp)=>{
            if(emp.name.toLowerCase().trim() === assign.toLowerCase().trim()){
                emp.tasks.push(newTask)
                emp.taskNumbers.active = emp.taskNumbers.active +1;
            }
        })
        
        setData(data);

        setTitle("");
        setAssign("");
        setCatg("")
        setDate("");
        setDesc("");

        console.log(data)
    }

    return (
         <div className="mt-10 rounded ">
                < form className="bg-gray-200 flex flex-wrap w-full items-start justify-between p-5 "
                  onSubmit={(e)=>{
                    submitHandler(e);
                  }}>

                    <div className="text-black  w-1/2 flex flex-col gap-1">

                        <div>
                            <h3 className="font-semibold text-lg mb-1">Task Title</h3>
                            < input type="text" placeholder="Make a Ui of Admin dashboard"
                                className="text-sm  py-1 px-2 w-4/5 border rounded  placeholder:text-gray-500 outline-none"
                                value={title}
                                onChange={(e)=>{
                                    setTitle(e.target.value);
                                }} />
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-1">Date</h3>
                            < input type="date"
                                className="text-sm  py-1 px-2 w-4/5 border rounded  placeholder:text-gray-500 outline-none" 
                                value={date}
                                onChange={(e)=>{
                                    setDate(e.target.value);
                                }} />
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-1">Assign to :</h3>
                            < input type="text"
                                className="text-sm  py-1 px-2 w-4/5 border rounded  placeholder:text-gray-500 outline-none"
                                value={assign}
                                onChange={(e)=>{
                                    setAssign(e.target.value);
                                }}  />
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-1">Category</h3>
                            < input type="text"
                                className="text-sm  py-1 px-2 w-4/5 border rounded  placeholder:text-gray-500 outline-none"
                                value={catg}
                                onChange={(e)=>{
                                    setCatg(e.target.value);
                                }}  />
                        </div>

                    </div>

                    <div className="w-2/5 flex flex-col items-start gap-2">
                        <h3 className="font-semibold text-lg mb-1">Task Description</h3>
                        <textarea cols={25} rows={5} className="border rounded text-sm w-full h-44 bg-transparent "
                         value={desc}
                         onChange={(e)=>{
                                    setDesc(e.target.value);
                                }} />
                        < button className="bg-green-500 px-2 py-1 rounded font-semibold w-full hover:bg-green-600"
                        >Create Task</button>
                    </div>

                </form>
            </div>
    )
}