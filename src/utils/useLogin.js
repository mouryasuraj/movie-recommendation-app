import { useRef, useState } from "react";
import { validateForm } from "./validate";
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "./slices/userSlice";


const useLogin = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [showErrorMsg, setShowErrorMsg] = useState(null)
    const dispatch = useDispatch()


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
        if (message) return; //if any error message is occur then don't preceed further

        // signInORSignUp user
        if (!isSignInForm) {
            // signUp
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user
                    // This Promise is used to update the name
                    updateProfile(user,
                        {
                            displayName: name.current.value
                        }
                    ).then(() => {
                        const { uid, email, displayName } = auth.currentUser
                        dispatch(addUser({ uid, email, displayName }))
                    })
                })
                .catch(() => {
                    setShowErrorMsg('Email already in use')
                })
        } else {
            // signIn
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then(() => {
                    console.log('Logged In successfully');
                })
                .catch(() => {
                    setShowErrorMsg('Email or password is wrong')
                })
        }
    }

    return { isSignInForm, setIsSignInForm, handleToChangeForm, handleForm, name, email, password, showErrorMsg }
}

export default useLogin;