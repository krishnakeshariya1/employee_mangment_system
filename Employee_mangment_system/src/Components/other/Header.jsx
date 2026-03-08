export const Header = ({user}) => {
    console.log(user)
    return (
        < div
            className=" flex items-end justify-between bg-gray-200 px-14 py-4 "
        >
            < h1
                className="text-2xl font-semibold"
            >
                Hello  <br />
                < span
                    className="text-3xl font-bold"
                >
                    {user.name} 👋
                </span>
            </h1>

            < button
              className="bg-red-500 px-2.5 py-1.5 rounded font-bold text-white "
            >Log out</button>
        </div>
    )
}