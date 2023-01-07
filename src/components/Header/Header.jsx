import React from 'react'
import './Header.scss'

export const Header = () => {
    return (
        <div class="wrapper">
			<main class="main">
				<div class="top-line">
					<div class="container">
						<div class="row align-items-center">
							<div class="col-md-2">
								<a href="/" class="top-line__brand">Shorta.</a>
							</div>
							{/* <!-- /.col-md-2 --> */}
							<div class="col-md-7">
								<nav class="top-line__nav">
									<a href="#prices" class="nav-link">Prices</a>
									<a href="#about_us" class="nav-link">ABOUT US</a>
									<a href="#news" class="nav-link">NEWS</a>
									<a href="#contacts" class="nav-link">CONTACTS</a>
									<a href="#specials" class="nav-link">SPECIALS</a>
									<a href="#faq" class="nav-link">FAQ</a>
								</nav>
								{/* <!-- /.top-line__nav --> */}
							</div>
							{/* <!-- /.col-md-6 --> */}
							<div class="col-md-3">
								<div class="top-line__account">
									<a href="/login" class="btn btn-outline-white">Login</a>
									<a href="/register" class="btn btn-gradient"><span>Register</span></a>
								</div>
							</div>
							{/* <!-- /.col-md-4 --> */}
						</div>
						{/* <!-- /.row --> */}
					</div>
					{/* <!-- /.container --> */}
				</div>
				{/* <!-- /.top-line --> */}
				{/* <router-outlet></router-outlet> */}

			</main>

	{/* <!-- /.main-footer --> */}

</div>
    )
}