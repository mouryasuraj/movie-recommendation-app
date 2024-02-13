import Header from "./Header"
import LoginSignUpForm from "./LoginSignUpForm"
const Login = () => {


    return (
        <div className='w-[100%] h-[150vh] md:bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'>
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
