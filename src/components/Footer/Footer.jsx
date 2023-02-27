import React from 'react'
import s from "./Footer.module.scss"

export const Footer = () => {
    return <footer className={s.footer}>
            <div className={s.footer_text}>
                <span>© 2023 Bitrox Mining</span>
            </div>
    </footer>
}