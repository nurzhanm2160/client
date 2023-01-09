import './styles.scss';
import {Homepage} from './pages/Homepage/Homepage';
import Header from "./components/Header/Header";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import {Footer} from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header className="header">
                    <Header/>
                </header>
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/home" element={<Home/>}/>
                    </Routes>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </BrowserRouter>
        </div>
    )
}

export default App;
