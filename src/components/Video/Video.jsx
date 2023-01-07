import React from 'react'

export const Video = () => {
    return <section class="s-video dark-section">
	<div class="container">
		<h2 class="section-headline">VIDEO PRESENTATION</h2>
		<p class="section-subhead">Checkout our video presentation!</p>
		<div class="row">
			<div class="col-12">
				<div class="video-wrapper">
					<iframe
						src="https://www.youtube.com/embed/iw6cP5qQzo4"
						title="VIDEO PRESENTATION"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					>
					</iframe>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- /.container --> */}
</section>

}