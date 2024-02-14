
import { LOGO_URL } from "../utils/constant"
import { onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/slices/userSlice'
import { useEffect } from "react"

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
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
        return () => unSubscribe()
    }, [])

    return (
        <div className="md:px-10 py-2 px-4">
            <img className="md:w-[200px] w-[130px] select-none" src={LOGO_URL} alt="" />
            {auth.currentUser && <div>Hello</div>}
        </div>
    )
}

export default Header
