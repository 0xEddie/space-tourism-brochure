import { useState } from "react";

export default function Root() {
	return (
		<div className="app">
			<a className="jump-to-content" href="#main">Skip to content</a>
			<Header />
			<Home />
		</div>
	);
}

function Header() {
	const [mobileNavVisible, setMobileNavVisible] = useState(false)

	function toggleMobileNavVisibility() {
		setMobileNavVisible(prevVisibility => !prevVisibility)
	}

	return (
		<header className="primary-header flex">
			{/* wrap img in div, fixes flexbox issue */}
			<div className="logo-wrapper">
				<img
					src="/src/assets/shared/logo.svg"
					alt="space tourism logo"
					className="logo"
				/>
			</div>

			<button className="mobile-nav-toggle" aria-controls="primary-navigation" onClick={toggleMobileNavVisibility} data-expanded={mobileNavVisible}>
				{/* mobile nav button text only visible to screen readers */}
				<span className="sr-only" aria-expanded={mobileNavVisible}>
					Menu
				</span>
			</button>
			<nav>
				<ul
					id="primary-navigate"
					className="primary-navigation underline-indicators flex"
					data-visible={mobileNavVisible}
				>
					<li>
						<a
							href="./#"
							className="text-white ff-sans-cond uppercase letter-spacing-2"
						>
							<span aria-hidden="true">00</span>Home
						</a>
					</li>
					<li>
						<a
							href="./#"
							className="text-white ff-sans-cond uppercase letter-spacing-2"
						>
							<span aria-hidden="true">01</span>Destination
						</a>
					</li>
					<li>
						<a
							href="./#"
							className="text-white ff-sans-cond uppercase letter-spacing-2"
						>
							<span aria-hidden="true">02</span>Crew
						</a>
					</li>
					<li>
						<a
							href="./#"
							className="text-white ff-sans-cond uppercase letter-spacing-2"
						>
							<span aria-hidden="true">03</span>Technology
						</a>
					</li>
				</ul>
			</nav>
		</header >
	);
}

function Home() {
	return (
		<main className="grid-container grid-container--home" id="main">
			<div>
				<h1 className="ff-sans-cond fs-500 letter-spacing-3 uppercase">
					So, you want to travel to <br />
					<span className="ff-serif fs-900 text-white">space</span>
				</h1>
				<p>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>
			<div>
				<a
					href="#"
					className="large-button uppercase ff-serif text-dark bg-white"
				>
					Explore
				</a>
			</div>
		</main>
	);
}
