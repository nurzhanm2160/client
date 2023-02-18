import React from 'react';
import s from "./Home.module.scss"
import Title from "../../components/Title/Title";
import {Video} from "../../components/Video/Video";
import {Price} from "../../components/Price/Price";
import {Advantages} from "../../components/Advantages/Advantages";
import {News} from "../../components/News/News";
import {Transactions} from "../../components/Transactions/Transactions";
import {Faq} from "../../components/Faq/Faq";
import {Stats} from "../../components/Stats/Stats";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import Calc from "../../components/Calc/Calc";


const Home = () => {
    return (
        <>
            <header>
                <Header/>
            </header>
            <div className={s.home}>
                <Title/>
                <Video/>
                <Price/>
                <Advantages/>
                <News/>
                <Transactions />
                <Faq />
                <Calc />
                <Stats />
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default Home;