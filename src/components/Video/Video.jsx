import React from 'react'

export const Video = () => {
    return <section className="s-video dark-section">
	<div className="container">
		<h2 className="section-headline">VIDEO PRESENTATION</h2>
		<p className="section-subhead">Checkout our video presentation!</p>
		<div className="row">
			<div className="col-12">
				<div className="video-wrapper">
					<iframe
						src="https://www.youtube.com/embed/iw6cP5qQzo4"
						title="VIDEO PRESENTATION"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					>
					</iframe>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- /.container --> */}
</section>

}