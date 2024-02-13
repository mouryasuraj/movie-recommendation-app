import { onAuthStateChanged } from "firebase/auth"
import { Outlet, useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/slices/userSlice'
import { useEffect } from "react"

const Body = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //If block will call when user loggedin or signup
                const { uid, email, displayName } = user
                dispatch(addUser({ uid, email, displayName }))
                navigate('/browse')
            } else {
                // else block will call when user signout
                dispatch(removeUser())
                navigate('/')
            }
        })
    }, [])

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Body
