import React from 'react';
import s from "./AboutUs.module.scss"
import {Stats} from "../../components/Stats/Stats";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

const AboutUsPage = () => {
    return (
        <>
            <header className="header">
                <Header/>
            </header>
            <div className={`container ${s.about_us}`}>
                    <h2 className="section-headline">ABOUT US</h2>
                    <p className="section-subhead mt-5">
                        Bitrox is an advanced technology company specializing in cryptocurrency mining.
                        We provide users with access to the most modern blockchain technologies and algorithms
                        for mining cryptocurrencies in the shortest possible time. Our company was founded by a team of
                        5 enthusiasts
                        on April 7, 2022, from that moment we began to expand and work to achieve a result of 6% profit
                        per day.<br/><br/>

                        Bitrox aims to provide the private consumer with the world's most advanced mining equipment and
                        service 24/7,
                        with the highest level of service in the field. Together with our skilled and experienced team,
                        as well as
                        strategic customers and partnerships we are driving a new standard for the mining ecosystem and
                        data center
                        infrastructure facilities.<br/><br/>

                        If you still have any questions, you can contact us using the online chat, mail or telegram
                        account.
                        For more information, see the contacts section.
                    </p>
                <div className={s.stats}>
                    <Stats />
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default AboutUsPage;