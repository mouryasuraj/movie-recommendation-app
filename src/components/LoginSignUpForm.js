import useLogin from "../utils/useLogin"
const LoginSignUpForm = () => {

    const { isSignInForm, handleToChangeForm, handleForm, name, email, password, showErrorMsg } = useLogin()



    return (
        <div className=" bg-black max-w-[480px] mx-auto my-5 bg-opacity-75 text-white px-7 md:p-12 rounded-md">
            <h2 className="text-3xl font-bold">{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>
            <form onSubmit={handleForm} className="flex flex-col gap-5 my-6">
                {/* Input for name */}
                {
                    !isSignInForm && <input
                        ref={name}
                        className="px-3 py-3 outline-none rounded-md border border-rgb(17,17,17) bg-[rgba(17,17,17,0.8)]
                        focus:border-2"
                        type="text"
                        placeholder="Full name" />
                }
                {/* Input for email */}
                <input
                    ref={email}
                    className="px-3 py-3 outline-none rounded-md border border-rgb(17,17,17) bg-[rgba(17,17,17,0.8)] focus:border-2"
                    type="text"
                    placeholder="Email" />
                {/* Input for password */}
                <input
                    ref={password}
                    className="px-3 py-3 outline-none rounded-md border border-rgb(17,17,17) bg-[rgba(17,17,17,0.8)] focus:border-2"
                    type="password"
                    placeholder="Password" />
                <p className="text-red-500 text-md">{showErrorMsg && <i class="fa-solid fa-ban"></i>} {showErrorMsg}</p>
                <button className="px-2 py-2 bg-red-600 font-bold rounded-md text-xl">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
            </form>
            <p className="text-lg text-gray-300 font-semibold">{isSignInForm ? 'New to Netflix?' : 'Already have an account?'} <button onClick={handleToChangeForm} className="hover:underline text-white ">{isSignInForm ? 'Sign up now' : 'Sign In'}</button></p>
        </div>
    )
}

export default LoginSignUpForm
