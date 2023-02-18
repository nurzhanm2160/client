import './styles.scss';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Home from "./pages/Home/Home";
import Calc from "./components/Calc/Calc";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import Specials from "./pages/SpecialsPage/Specials";
import FaqPage from "./pages/FaqPage/FaqPage";
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage";
import InboxCheckPage from "./pages/InboxCheckPage/InboxCheckPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/about_us" element={<AboutUsPage/>}/>
                        <Route path="/specials" element={<Specials/>}/>
                        <Route path="/faq" element={<FaqPage/>}/>
                        <Route path="/confirm" element={<ConfirmPage/>}/>
                        <Route path="/check" element={<InboxCheckPage/>}/>
                        <Route path="/404" element={<ErrorPage/>}/>
                        <Route path="/contacts" element={<ContactsPage/>}/>
                        <Route path="/dashboard/*" element={<Dashboard/>}/>
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    )
}

export default App;
