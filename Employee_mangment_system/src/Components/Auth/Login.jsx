import { useEffect, useState } from "react"

export const Login = () => {

    const submitHandler = (e) => {
        e.preventDefault()
    }
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        < div
            className="h-screen w-full flex justify-center items-center "
        >
            < div
                className=" border-2 px-3 py-4 rounded-xl border-none bg-gray-100 shadow-xl"
            >
                < h2
                    className="font-bold text-3xl mb-8 text-green-500 text-center"
                >
                    Login
                </h2>
                < form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className="flex flex-col items-center justify-center gap-7 w-64"
                >
                    < input
                        value={email}
                        required 
                        type="email" placeholder="Enter email"
                        className="border-1 px-2 py-1 rounded outline-none w-full text-lg "
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />

                    < input
                        value={password}
                        required
                        type="password" placeholder="Enter password"
                        className="border-1 px-2 py-1 rounded outline-none w-full text-lg"
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                    />

                    < button
                        className="bg-green-500 px-3 py-1 rounded-2xl text-xl"
                    >
                        Login
                    </button>

                </form>
            </div>
        </div>
    )
}