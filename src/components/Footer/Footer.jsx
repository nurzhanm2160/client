import React from 'react'
import s from "./Footer.module.scss"

export const Footer = () => {
    return <footer className={s.footer}>
            <div className={s.footer_text}>
                <span>© 2022 Copyright: Shorta.cc</span>
                <span>Trustpilot</span>
            </div>
    </footer>
}