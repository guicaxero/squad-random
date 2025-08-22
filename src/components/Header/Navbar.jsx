import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav className="">
            <ul className="flex flex-row gap-10 text-2xl font-bold">
                <Link
                    to="/"
                >
                    <li>Home</li>
                </Link>
                <Link
                    to="/teams"
                >
                    <li>Teams</li>
                </Link>
                <li>Estrelas</li>
            </ul>
        </nav>
    )
}

export default Navbar
