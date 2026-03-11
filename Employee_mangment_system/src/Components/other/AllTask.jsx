import { useEffect, useState } from "react"
import { getLocalStorage } from "../../Ulits/localStorage"

export const AllTask = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    // getLocalStorage returns { employees, admin }
    // we only care about the employee list here
    const { employees } = getLocalStorage();
    setData(employees || []);
  }, []);

    return (
      <div className="bg-gray-200 px-5 mt-10 h-72 overflow-y-auto flex flex-col gap-2 font-semibold hide-scrollbar">

  {/* Sticky Header */}
  <div className="sticky top-0 z-20 w-full py-5">
  <div className=" bg-blue-400 px-7 py-2.5 flex justify-between rounded-xl text-black font-bold">
    <span>Employee Name</span>
    <span>New Task</span>
    <span>Active Task</span>
    <span>Completed</span>
    <span>Failed</span>
  </div>
  </div>

  {data.map((e, idx) => (
    <div
      key={idx}
      className="border-2 border-black px-7 py-2.5 flex justify-between rounded-xl bg-white"
    >
      <span className="text-orange-950 font-bold">{e.name}</span>
      <span className="font-bold">{e.taskNumbers.newTask}</span>
      <span className="font-bold">{e.taskNumbers.active}</span>
      <span className="font-bold">{e.taskNumbers.completed}</span>
      <span className="font-bold">{e.taskNumbers.failed}</span>
    </div>
  ))}

</div>
    )
}