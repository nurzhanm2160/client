import React from 'react';
import s from "./Home.module.scss"
import Title from "../../components/Title/Title";
import {Advantages} from "../../components/Advantages/Advantages";
import {Transactions} from "../../components/Transactions/Transactions";
import {Faq} from "../../components/Faq/Faq";
import {Stats} from "../../components/Stats/Stats";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import Calc from "../../components/Calc/Calc";
import {Price} from "../../components/Price/Price";


const Home = () => {

    return (
        <>
            <header>
                <Header/>
            </header>
            <div className={s.home}>
                <Title/>
                {/*<Video/>*/}
                <Price/>
                <Advantages/>
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