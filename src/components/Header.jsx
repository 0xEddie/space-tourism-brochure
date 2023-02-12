export default function PrimaryHeader() {
	return (
		<header className="primary-header">
			<div>
				{/* wrap img in div, fixes flexbox issue */}
				<img
					src="./assets/shared/logo.svg"
					alt="space tourism logo"
					className="logo"
				/>
			</div>
			<nav>
				<ul className="primary-navigation underline-indicators flex">
					<li className="uppercase text-white letter-spacing-2">
						<a href="./#">
							<span>00</span>Home
						</a>
					</li>
					<li className="uppercase text-white letter-spacing-2">
						<a href="./#">
							<span>01</span>Destination
						</a>
					</li>
					<li className="uppercase text-white letter-spacing-2">
						<a href="./#">
							<span>02</span>Crew
						</a>
					</li>
					<li className="uppercase text-white letter-spacing-2">
						<a href="./#">
							<span>03</span>Technology
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
