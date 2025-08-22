import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import HeaderCpnt from "../components/Header/HeaderCpnt"
import FormedTeams from "../pages/FormedTeams"
import BodyCpnt from "../components/Body"


const Router = () => {
    return (
        <BrowserRouter>
            <HeaderCpnt />
                <Routes>
                    <Route path="/" element={<BodyCpnt />}>
                        <Route index element={<Home />} />
                        <Route path="/teams" element={<FormedTeams />} />
                    </Route>
                </Routes>

        </BrowserRouter>
    )
}

export default Router