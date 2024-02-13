import { useRef, useState } from "react";
import { validateForm } from "./validate";
const useLogin = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [showErrorMsg, setShowErrorMsg] = useState(null)

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    // handleToChangeForm
    const handleToChangeForm = () => {
        setIsSignInForm(!isSignInForm)
        setShowErrorMsg(null)
        document.querySelector('form').reset()
    }

    // handleForm
    const handleForm = (e) => {
        e.preventDefault()
        // validateForm
        const message = validateForm(!isSignInForm && name.current.value, email.current.value, password.current.value)
        setShowErrorMsg(message)
    }

    return { isSignInForm, setIsSignInForm, handleToChangeForm, handleForm, name, email, password, showErrorMsg }
}

export default useLogin;