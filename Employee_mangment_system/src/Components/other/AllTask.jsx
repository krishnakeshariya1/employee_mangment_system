import { useContext } from "react"
import { AuthContext } from "../../Context/AuthProvider"

export const AllTask = () => {
    const authData = useContext(AuthContext)

    return (
      <div className="bg-gray-200 px-5 mt-10 h-72 overflow-y-auto flex flex-col gap-2 font-semibold hide-scrollbar">

  {/* Sticky Header */}
  <div className="sticky top-0 z-20 w-full py-5">
  <div className=" bg-blue-400 px-7 py-2.5 flex justify-between rounded-xl">
    <span>Employee Name</span>
    <span>New Task</span>
    <span>Active Task</span>
    <span>Completed</span>
    <span>Failed</span>
  </div>
  </div>

  {authData.employees.map((e, idx) => (
    <div
      key={idx}
      className="border-2 border-black px-7 py-2.5 flex justify-between rounded-xl bg-white"
    >
      <span>{e.name}</span>
      <span>{e.taskNumbers.newTask}</span>
      <span>{e.taskNumbers.active}</span>
      <span>{e.taskNumbers.completed}</span>
      <span>{e.taskNumbers.failed}</span>
    </div>
  ))}

</div>
    )
}