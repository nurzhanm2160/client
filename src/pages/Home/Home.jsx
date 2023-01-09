import React from 'react';
import s from "./Home.module.scss"
import Title from "../../components/Title/Title";
import {Video} from "../../components/Video/Video";
import {Price} from "../../components/Price/Price";


const Home = () => {
    return (
        <div className={s.home}>
            <Title/>
            <Video/>
            <Price />
        </div>
    );
}

export default Home;