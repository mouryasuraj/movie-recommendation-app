
import { logo_URL } from "../utils/constant"
import { auth } from "../utils/firebase"

const Header = () => {



    return (
        <div className="md:px-10 py-2 px-4">
            <img className="md:w-[200px] w-[130px] select-none" src={logo_URL} alt="" />
            {auth.currentUser && <div>Hello</div>}
        </div>
    )
}

export default Header
