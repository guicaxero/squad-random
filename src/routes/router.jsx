import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import HeaderCpnt from "../components/Header/HeaderCpnt"


const Router = () => {
    return (
        <BrowserRouter>
            <HeaderCpnt />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
        </BrowserRouter>
    )
}

export default Router