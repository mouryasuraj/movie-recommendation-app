
import { logo_URL } from "../utils/constant"
const Header = () => {
    return (
        <div className="md:px-10 py-2 px-4">
            <img className="md:w-[200px] w-[130px] select-none" src={logo_URL} alt="" />
        </div>
    )
}

export default Header
