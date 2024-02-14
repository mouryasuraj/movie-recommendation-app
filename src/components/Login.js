import Header from "./Header"
import LoginSignUpForm from "./LoginSignUpForm"
import { BG_IMAGE } from "../utils/constant"
const Login = () => {


    return (
        <div style={{ backgroundImage: `url(${BG_IMAGE})` }} className='w-[100%] h-[150vh] md:bg-none'>
            <div className="bg-black w-screen h-screen fixed md:bg-opacity-50">
            </div>
            <div className="relative">
                <Header />
                <LoginSignUpForm />
            </div>
        </div>
    )
}

export default Login
