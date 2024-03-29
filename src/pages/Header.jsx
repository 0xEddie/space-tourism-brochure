import './Header.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/shared/logo.svg';

export default function Header() {
	const path = useLocation();
	// when .mobile-nav-toggle button pressed, toggle visibility of the mobile navbar
	const [mobileNavVisible, setMobileNavVisible] = useState(false);

	function toggleMobileNavVisibility() {
		setMobileNavVisible((prevVisibility) => !prevVisibility);
	}

	return (
		<header className="primary-header flex">
			{/* Images are wrapped in a div, fixes flexbox issue */}
			<Link to="/" className="logo-wrapper">
				<img src={Logo} alt="space tourism logo" className="logo" />
			</Link>

			<button
				className="mobile-nav-toggle"
				aria-controls="primary-navigation"
				onClick={toggleMobileNavVisibility}
				data-expanded={mobileNavVisible}
				type="button"
			>
				{/* button>span only visible to screen readers */}
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
					{/* the index numbers of the pages are hidden from accessibility tools */}
					<li className={path.pathname === '/' ? 'active' : ''}>
						<Link
							to="/"
							className="text-white ff-sans-cond uppercase letter-spacing-2"
						>
							<span aria-hidden="true">00</span>Home
						</Link>
					</li>
					<li className={path.pathname === '/destination' ? 'active' : ''}>
						<Link
							to="destination"
							className="text-white ff-sans-cond uppercase letter-spacing-2"
						>
							<span aria-hidden="true">01</span>Destination
						</Link>
					</li>
					<li className={path.pathname === '/crew' ? 'active' : ''}>
						<Link
							to="crew"
							className="text-white ff-sans-cond uppercase letter-spacing-2"
						>
							<span aria-hidden="true">02</span>Crew
						</Link>
					</li>
					<li className={path.pathname === '/technology' ? 'active' : ''}>
						<Link
							to="technology"
							className="text-white ff-sans-cond uppercase letter-spacing-2"
						>
							<span aria-hidden="true">03</span>Technology
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
