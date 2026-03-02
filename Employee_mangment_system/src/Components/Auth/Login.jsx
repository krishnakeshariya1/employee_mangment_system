export const Login = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center ">
            <div className=" border-2 px-3 py-4 rounded-xl border-none bg-gray-100 shadow-xl">
                <h2 className="font-bold text-3xl mb-8 text-green-500">
                    Login
                </h2>
                <form className="flex flex-col items-center justify-center gap-7 w-64">
                    <input required type="email" placeholder="Enter email" className="border-1 px-2 py-1 rounded outline-none w-full text-lg " />
                    <input required type="password" placeholder="Enter password" className="border-1 px-2 py-1 rounded outline-none w-full text-lg" />
                    <button className="bg-green-500 px-3 py-1 rounded-2xl text-xl">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}