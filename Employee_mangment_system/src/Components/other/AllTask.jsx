import { useEffect, useState } from "react"
import { getLocalStorage } from "../../Ulits/localStorage"

export const AllTask = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const { employees } = getLocalStorage();
    setData(employees || []);
  }, []);

  return (
    <div className="bg-gray-200 px-4 sm:px-5 mt-10 h-72 overflow-y-auto flex flex-col gap-3 font-semibold hide-scrollbar">

      {/* Desktop Header */}
      <div className="hidden md:flex sticky top-0 z-20 bg-blue-400 px-7 py-2.5 rounded-xl text-black font-bold justify-between">
        <span>Employee Name</span>
        <span>New Task</span>
        <span>Active Task</span>
        <span>Completed</span>
        <span>Failed</span>
      </div>

      {data.map((e, idx) => (
        <div key={idx}>

          {/* Desktop Row */}
          <div className="hidden md:flex border-2 border-black px-7 py-2.5 justify-between rounded-xl bg-white">
            <span className="text-orange-950 font-bold">{e.name}</span>
            <span>{e.taskNumbers.newTask}</span>
            <span>{e.taskNumbers.active}</span>
            <span>{e.taskNumbers.completed}</span>
            <span>{e.taskNumbers.failed}</span>
          </div>

          {/* Mobile Card */}
          <div className="md:hidden border-2 border-black rounded-xl bg-white p-4 flex flex-col gap-2">
            <span className="text-orange-950 font-bold text-lg">{e.name}</span>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <span>New Task:</span>
              <span className="font-bold">{e.taskNumbers.newTask}</span>

              <span>Active:</span>
              <span className="font-bold">{e.taskNumbers.active}</span>

              <span>Completed:</span>
              <span className="font-bold">{e.taskNumbers.completed}</span>

              <span>Failed:</span>
              <span className="font-bold">{e.taskNumbers.failed}</span>
            </div>
          </div>

        </div>
      ))}

    </div>
  )
}