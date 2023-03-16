import { useState } from 'react';

export default function Header() {
	// when .mobile-nav-toggle button pressed, toggle visibility of the mobile navbar
	const [mobileNavVisible, setMobileNavVisible] = useState(false);

	function toggleMobileNavVisibility() {
		setMobileNavVisible((prevVisibility) => !prevVisibility);
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

			<button
				className="mobile-nav-toggle"
				aria-controls="primary-navigation"
				onClick={toggleMobileNavVisibility}
				data-expanded={mobileNavVisible}
				type="button"
			>
				{/* span in button only visible to screen readers */}
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
					{/* TODO: refactor <a> tags to <Link> elements */}
					<li>
						{/* the index numbers of the pages can be hidden from accessibility tools */}
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
		</header>
	);
}
