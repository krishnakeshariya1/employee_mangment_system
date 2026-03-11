export const Header = ({user, logOutFnc }) => {
    return (
        <div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between bg-gray-200 px-4 sm:px-8 lg:px-14 py-4 gap-4"
        >
            <h1
                className="text-xl sm:text-2xl font-semibold"
            >
                Hello <br />
                <span
                    className="text-2xl sm:text-3xl font-bold"
                >
                    { user?.name || "User" } 👋
                </span>
            </h1>

            <button
              className="bg-red-500 px-3 py-2 rounded font-bold text-white w-fit"
              onClick={()=>{
                logOutFnc()
              }}
            >
              Log out
            </button>
        </div>
    )
}