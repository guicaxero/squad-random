import Navbar from "./Navbar"
import { GiSoccerKick } from "react-icons/gi";

const HeaderCpnt = ({children}) => {
    return (
        <header className="flex justify-center items-center bg-green-600 h-20">
            <GiSoccerKick size={40} 
                className="mr-4"
            />
            <Navbar />
            {children}
        </header>
    )
}

export default HeaderCpnt