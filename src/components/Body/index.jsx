import { Outlet } from "react-router-dom";


const BodyCpnt = () => {
    return (
        <main className="min-h-screen bg-gray-800 flex flex-col items-center p-6">
            <Outlet />
        </main>
    )
}

export default BodyCpnt;