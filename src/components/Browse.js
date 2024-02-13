import { signOut } from "firebase/auth"
import Header from "./Header"
import { auth } from "../utils/firebase"

const Browse = () => {
  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <div>
      <Header />
      <button onClick={handleSignOut}>signButton</button>
    </div>
  )
}

export default Browse
