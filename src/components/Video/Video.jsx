import React from 'react'
import s from "./Video.module.scss"

export const Video = () => {
    return (
        <section className={s.video_main}>
            <div className="container">
                <div className={`row`}>
                    <h2>VIDEO PRESENTATION</h2>
                    <p>Checkout our video presentation!</p>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className={s.video}>
                            <iframe src="https://www.youtube.com/embed/iw6cP5qQzo4"
                                    title="VIDEO PRESENTATION"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}