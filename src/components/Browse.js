import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"

const Browse = () => {
  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <div>
      <button onClick={handleSignOut}>signButton</button>
    </div>
  )
}

export default Browse
